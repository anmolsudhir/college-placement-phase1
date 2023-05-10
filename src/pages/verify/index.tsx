import { useRouter } from "next/router";
import { Back, Container, Content } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { InputDiv } from "./styles";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SubmitButton } from "../styles";
import auth from "@/firebase/auth/initFirebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Link from "next/link";
import Text from "@/components/inputs/text/Text";
import { Spinner } from "@/components/Spinner";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
  }
}


export default function Verify(){
    const colors = useSelector((state : RootState) => state.colors)
    const [mobileVerified, setMobileVerified] = useState(false);
    const [sentOPT, setSentOPT] = useState(false);
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const obj = useSelector((state: RootState) => state.form);

    const router = useRouter();
    const {id, last, first } = router.query;

    const elem = {
      label: "Enter 6-Digit OTP" ,
      regex: /^\d{6}$/,
      type: "number",
      errorInfo : "OTP Must be six digits",
    };

    useEffect(() => {
      if (typeof window !== "undefined")
        window.recaptchaVerifier = new RecaptchaVerifier(
          "submit-btn",
          {
            size: "invisible",
            callback: (response) => {
              console.log(response);
            },
          },
          auth
        );
    }, []);

    //setMobileVerified(!mobileVerified)

    const getInput = () => {

    }

    const sendPhoneOTP = () => {
      setLoading(true)
      const phoneNumber = "+91" + obj.formObject?.tel;
      const appVerifier = window.recaptchaVerifier;
      if (typeof window !== "undefined")
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("sent code", confirmationResult);
            setSentOPT(true);
            setDisabled(true)
            setLoading(false);
          })
          .catch((error) => {
            console.log(error, "It happened");
            setLoading(false);
          });
      else console.log("window undefined");
    };

    const confirmPhone = () => {
        setLoading(true)
        if (typeof window !== "undefined"){
            console.log(window.confirmationResult);
            const confirmation = window.confirmationResult
            confirmation.confirm(phone)
            .then((msg) => {
                console.log(msg)
                setSentOPT(false)
                setMobileVerified(true)
                setLoading(false);
            })
        }
    }

    const verifyEmail = () => {
      const phoneNumber = "+91" + obj.formObject?.tel;
      const appVerifier = window.recaptchaVerifier;
      if (typeof window !== "undefined")
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("sent code", confirmationResult);
            setSentOPT(true)
          })
          .catch((error) => {
            console.log(error, "It happened");
          });
      else console.log("window undefined");
    };

    return (
      <Container $colors={colors}>
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
                  handleIV={(valid) => {setDisabled(!valid); console.log(valid)}}
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
                    margin: "1rem 0",
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
                  handleIV={(valid) => setDisabled(valid)}
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
                    margin: "1rem 0",
                    fontSize: "0.75rem",
                    boxSizing: "border-box",
                  }}
                >
                  {`OTP sent to ${first[0]}********@cmrit.ac.in`}
                </span>
              </>
            )}
          </Content>
          {mobileVerified ? (
            <SubmitButton
              $id={"submit-btn"}
              $colors={colors}
              onClick={sentOPT ? getInput : verifyEmail}
            >
              {loading ? '' : (sentOPT ? "Submit" : "Send OTP")}
            </SubmitButton>
          ) : (
            <SubmitButton
              $id={"submit-btn"}
              $colors={colors}
              onClick={sentOPT ? confirmPhone : sendPhoneOTP}
              $disabled={loading}
            >
              {loading ? <Spinner></Spinner> : (sentOPT ? "Submit" : "Send OTP")}
            </SubmitButton>
          )}
        </InputDiv>
      </Container>
    );
}