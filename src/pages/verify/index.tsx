import { useRouter } from "next/router";
import { Back, Container, Content } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { InputDiv } from "./styles";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Error, SubmitButton } from "../styles";
import auth from "@/firebase/auth/initFirebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Link from "next/link";
import Text from "@/components/inputs/text/Text";
import Spinner from "@/components/Spinner";
import Slider from "@/components/Slider/slider";
import axios from "axios";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}

export default function Verify(){
    const colors = useSelector((state : RootState) => state.colors)
    const [mobileVerified, setMobileVerified] = useState(false);
    const [mailOTPState, setMailOTPState] = useState("")
    const [sentOPT, setSentOPT] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const [mobStatus, setMobStatus] = useState("25%")
    const [mailStatus, setMailStatus] = useState("0%");
    const [error, setError] = useState({state : false, message : "An error occured"})
    const [isVerifiedSession, setIsVerifiedSession] = useState(true)
    let mailOTP;
    const obj = useSelector((state: RootState) => state.form);

    const router = useRouter();
    const { last, first } = router.query;

    const elem = {
      label: "Enter 6-Digit OTP" ,
      regex: /^\d{6}$/,
      type: "number",
      errorInfo : "OTP Must be six digits",
    };

    useEffect(() => {
      if (typeof window !== "undefined")
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-placeholder",
          {
            size: "invisible",
            callback: () => {},
          },
          auth
        );
      
        axios
          .post("/api/signup/verify-session", obj.formObject)
          .then(() => {
            setIsVerifiedSession(true)
          })
          .catch((err) => { 
            console.log(err);
            setIsVerifiedSession(false);
            setError({state : true, message : err.response.data.message})
          });
    }, []);

  if(isVerifiedSession){

    const sendPhoneOTP = () => {
      setLoading(true)
      const phoneNumber = "+91" + obj.formObject?.tel;
      const appVerifier = window.recaptchaVerifier;
      if (typeof window !== "undefined")
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            //console.log("sent code", confirmationResult);
            setMobStatus("50%")
            setSentOPT(true);
            setDisabled(true)
            setLoading(false);
            setError({ state: false, message: "" });
          })
          .catch((error) => {
            console.log(error, "It happened");
            setLoading(false);
            setError({state : true, message : "Could Not Send OTP"})
          });
      else console.log("window undefined");
    };

    const confirmPhone = () => {
        setLoading(true)
        setMobStatus("75%")
        setError({state : false, message : "Error"})
        if (typeof window !== "undefined"){
            //console.log(window.confirmationResult);
            const confirmation = window.confirmationResult
            confirmation.confirm(phone)
            .then(() => {
                setMobStatus("100%");
                setError({
                  state: false,
                  message: "",
                });
                setSentOPT(false)
                setMobileVerified(true)
                setLoading(false);
                setTimeout(() => setMailStatus("25%"), 500)
            })
            .catch(() => {
                setLoading(false)
                setError({ state: true, message: "Sorry, wrong OTP. Please check again!" });
            })
        }
    }

    const generateOTP = () => {
      let digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < 6; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }

    const sendMailOTP = async() => {
      setLoading(true);
      const emailAddress = obj.formObject?.mail;
      mailOTP = generateOTP()
      setMailOTPState(mailOTP)
      try{
        await axios.post('/api/signup/sendmail-otp', {emailAddress, mailOTP})
        setMailStatus("50%");
        setSentOPT(true);
        setDisabled(true);
        setLoading(false);
        setError({ state: false, message: "" });
      } catch(err) {
        //console.log(err)
        setLoading(false);
        setError({ state: true, message: "Could Not Send OTP" });
      }
    };

    const confirmMail = async () => {
      setLoading(true);
      setMailStatus("75%");
      setError({ state: false, message: "Error" });
      if (email === mailOTPState) {
        setMailStatus("100%");
        setError({
          state: false,
          message: "",
        });
        try {
          await axios.post("/api/signup/create-user", obj.formObject);
          setTimeout(() => router.push("/register"), 3000);
        } catch {
          setLoading(false)
          setDisabled(true)
          setError({
            state: true,
            message: `Could not create user with email ${obj.fromObject?.mail}. Please try again after some time`,
          });
          setTimeout(() => router.push("/"), 5000);
        }
      } else {
        setLoading(false);
        setError({
          state: true,
          message: "Sorry, wrong OTP. Please check again!",
        });
      }
    };

    return (
      <Container $colors={colors}>
        <div id="recaptcha-placeholder"></div>
        <InputDiv $colors={colors}>
          <Link href={"/"}>
            <Back style={{ cursor: "pointer" }}>
              <Image
                title="HEHE"
                src={"/left-arrow.png"}
                alt="back"
                height={20}
                width={20}
              ></Image>
            </Back>
          </Link>
          <Slider
            nBars={[
              {
                label: "Verify Mobile",
                //status: mobileVerified ? "100%" : "25%",
                status: mobStatus,
              },
              {
                label: "Verify Mail",
                //status: mobileVerified ? "25%" : "0%"
                status: mailStatus,
              },
            ]}
          ></Slider>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              color: "#000",
              width: "100%",
              fontSize: "1.25rem",
              fontWeight: "500",
              textAlign: "center",
              margin: "1rem 0 0 0",
              boxSizing: "border-box",
            }}
          >
            Verify Phone Number and E-Mail
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              flexDirection: "row",
              color: "#000",
              width: "100%",
              fontWeight: "100",
              textAlign: "center",
              margin: "1rem 0 2rem 0",
              boxSizing: "border-box",
            }}
          >
            OTP Will be Sent to Phone number E-Mail provided at Sign Up
          </span>
          <Image src="/shield.png" alt="lock" height={100} width={100}></Image>
          <Content $display={mobileVerified ? "none" : "flex"}>
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                color: "#444444",
                width: "100%",
                fontWeight: "500",
                fontSize: "1rem",
                margin: "1rem 0",
                boxSizing: "border-box",
              }}
            >
              Verify Phone Number
            </span>
            {sentOPT && (
              <>
                <Text
                  element={elem}
                  handleConstruction={(type, e) => setPhone(e)}
                  handleIV={(valid) => {
                    setDisabled(!valid);
                    setError({ state: false, message: "" });
                  }}
                ></Text>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    color: "#000",
                    width: "100%",
                    fontWeight: "100",
                    textAlign: "center",
                    fontSize: "0.75rem",
                    margin: "1rem 0 0 0",
                    boxSizing: "border-box",
                  }}
                >
                  {`OTP sent to ******${last}`}
                </span>
              </>
            )}
          </Content>
          <Content $display={mobileVerified ? "flex" : "none"}>
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                color: "#444444",
                width: "100%",
                fontWeight: "500",
                fontSize: "1rem",
                margin: "1rem 0",
                boxSizing: "border-box",
              }}
            >
              Verify E-Mail
            </span>
            {sentOPT && (
              <>
                <Text
                  element={elem}
                  handleConstruction={(type, e) => setEmail(e)}
                  handleIV={(valid) => {
                    setDisabled(!valid);
                    setError({ state: false, message: "" });
                  }}
                ></Text>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    color: "#000",
                    width: "100%",
                    fontWeight: "100",
                    textAlign: "center",
                    margin: "1rem 0 0 0",
                    fontSize: "0.75rem",
                    boxSizing: "border-box",
                  }}
                >
                  {`OTP sent to ${first}********@cmrit.ac.in`}
                </span>
              </>
            )}
          </Content>
          <div style={{ width: "100%", margin: "1rem 0" }}>
            {mobileVerified ? (
              <SubmitButton
                $id={"submit-btn"}
                $colors={colors}
                onClick={sentOPT ? confirmMail : sendMailOTP}
                $disabled={loading || disabled}
              >
                {loading ? (
                  <Spinner></Spinner>
                ) : sentOPT ? (
                  "Submit"
                ) : (
                  "Send OTP"
                )}
              </SubmitButton>
            ) : (
              <SubmitButton
                $id={"submit-btn"}
                $colors={colors}
                onClick={sentOPT ? confirmPhone : sendPhoneOTP}
                $disabled={loading || disabled}
              >
                {loading ? (
                  <Spinner></Spinner>
                ) : sentOPT ? (
                  "Submit"
                ) : (
                  "Send OTP"
                )}
              </SubmitButton>
            )}
          </div>
          {error.state && <Error $colors={colors}>{error.message}</Error>}
        </InputDiv>
      </Container>
    );
  }

  else return (
    <Container $colors={colors}>
      <div
        style={{
          height: "100%",
          width: "80%",
          boxSizing: "border-box",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <Error $colors={colors}>{error.message}</Error>
      </div>
    </Container>
  );
}