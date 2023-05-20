import { RootState } from "@/redux/store/store";
import {
  Container,
  Footer,
  InputDiv,
  LoginDiv,
  LogoDiv,
  SubmitButton,
  TextDiv,
  LandingDiv,
  SwitchDiv,
  LoginLogoDiv,
  Error,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import MailInput from "@/components/inputs/mail/Mail";
import {
  InfoDiv,
  InfoText,
} from "@/components/formsection/formsectioncontent/formslide/inputcard/styles";
import TeleInput from "@/components/inputs/tel/TeleInp";
import Text from "@/components/inputs/text/Text";
import { addObj, clearObj } from "@/redux/features/formSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios'
import Spinner from "@/components/Spinner";
import { changeThemeAbs } from "@/redux/features/themeSlice";

export default function Home() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const colors = useSelector((state: RootState) => state.colors);
  const obj = useSelector((state: RootState) => state.form);
  const [mailValid, setMailValid] = useState(false);
  const [telValid, setTelValid] = useState(false);
  const [passwordValid, setPWValid] = useState(false);
  const [isPWValid, setisPWValid] = useState(false);
  const [active, setActive] = useState(false);
  const [isSIgnUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorObj, setErrorObj] = useState({status : false, message : ""})
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearObj())
    dispatch(changeThemeAbs('light'))
  }, [])

  const mailElem = {
    label: "Cmrit E-Mail",
    regex: /^[a-z]{4,6}[0-9]{2}[a-z]{2}\s*$/,
    type: "mail",
  };

  const telElem = {
    label: "Personal Phone Number",
    regex: /^[6-9][0-9]{9}\s*$/,
    type: "tel",
  };

  let passText = isSIgnUp ? "Set Password" : "Enter Password"

  const password = {
    label: passText,
    regex: /.{8,}/,
    type: "password",
  };

  const handleConstruction = (type, e) => {
    type === "password" && setisPWValid(false);
    const payload: any = JSON.parse(`{"${type}":"${e.trim()}"}`);
    dispatch(addObj(payload));
  };

  const handleLogin = async () => {
    setLoading(true)
    if (mailValid && passwordValid) {
      console.log("Hi from handleLogin");
      try {
        const res = await axios.post("/api/login", obj.formObject);
        setLoading(false)
        setErrorObj({status : false, message : ""})
        console.log(res.data)
        router.push('/register')
      } catch (err) {
        console.log(err);
        setErrorObj({status : true, message : err.response.data.message})
        setLoading(false);
      }
    }else{
      console.log("Not HI")
      setLoading(false)
    }
  };

  const handleSignUp = async (event) => {
    if (mailValid && telValid && passwordValid) {
      setLoading(true)
      event.preventDefault();
      const link = `/verify?id=12345&last=${obj.formObject.tel?.substring(
        obj.formObject.tel.length - 4
      )}&first=${obj.formObject.mail[0]}`;

      //const verificationId = crypto.randomBytes(64).toString('hex')

      try{
        const res = await axios.post('/api/signup', obj.formObject)
        console.log(res)
        dispatch(addObj({verificationToken : res.data.verificationToken}))
        console.log(obj.formObject)
        router.push(link)
      } catch(err){
        setLoading(false)
        setErrorObj({status : true, message : err.response.data.message})
        // console.log(err, "HEHE")
      }
    }
  };

  return (
    <Container $theme={theme} $colors={colors}>
      <LandingDiv $colors={colors}>
        <LogoDiv>
          <Image
            src={"/cmr-logo-full.png"}
            height={100}
            width={100}
            alt="logo"
          ></Image>
        </LogoDiv>
        <TextDiv>Welcome To CMRIT Placement Portal</TextDiv>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            color: "#000",
            width: "100%",
            fontWeight: "100",
            textAlign: "center",
          }}
        >
          Please proceed with Login/Sign Up to continue
        </span>
        <Footer $colors={colors}>CMRIT Placement Cell, Bengaluru 2023</Footer>
      </LandingDiv>
      <LoginDiv>
        <InputDiv $colors={colors}>
          <LoginLogoDiv>
            <Image
              src={"/cmr-logo-full.png"}
              height={50}
              width={50}
              alt="logo"
            ></Image>
          </LoginLogoDiv>
          <InfoDiv
            $width={"70%"}
            $theme={theme}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setActive(!active)}
            $active={active}
          >
            {active && (
              <InfoText $theme={theme}>
                <ul>
                  <li style={{ padding: "1rem", boxSizing: "inherit" }}>
                    <b>College e-mail</b> : Enter your College e-mail ID. (Ex
                    ansu20cs@cmrit.ac.in)
                  </li>
                  {isSIgnUp && (
                    <li style={{ padding: "1rem", boxSizing: "inherit" }}>
                      <b>Mobile Number</b> : Do not enter +91, the mobile number
                      must be 10 digits, check again after typing
                    </li>
                  )}
                  <li style={{ padding: "1rem", boxSizing: "inherit" }}>
                    <b>Password</b> : Enter Password. Password must have a
                    minimum length of 8 characters.
                  </li>
                </ul>
              </InfoText>
            )}
            <Image
              style={{ cursor: "pointer" }}
              src={active ? "/cross.png" : "/information-button-dark.png"}
              alt="info"
              width={15}
              height={15}
            />
          </InfoDiv>
          <div style={{ width: "100%", margin: "0 0 1rem 0" }}>
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                color: "#444444",
                width: "100%",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              {isSIgnUp ? "SIGN UP" : "LOGIN"}
            </span>
          </div>
          <div style={{ width: "100%", margin: "1rem 0" }}>
            <MailInput
              element={mailElem}
              handleIV={(valid) => setMailValid(valid)}
              handleConstruction={handleConstruction}
            ></MailInput>
          </div>
          {isSIgnUp && (
            <div style={{ width: "100%", margin: "1rem 0" }}>
              <TeleInput
                element={telElem}
                handleIV={(valid) => setTelValid(valid)}
                handleConstruction={handleConstruction}
              ></TeleInput>
            </div>
          )}
          <div
            style={{
              width: "100%",
              margin: "1rem 0 0.35rem 0",
              boxSizing: "border-box",
            }}
          >
            <Text
              element={password}
              handleIV={(valid) => setPWValid(valid)}
              handleConstruction={handleConstruction}
            ></Text>
          </div>
          <div style={{ width: "100%", margin: "1rem 0" }}>
            <SubmitButton
              $disabled={loading}
              onClick={isSIgnUp ? handleSignUp : handleLogin}
              $colors={colors}
            >
              {loading ? <Spinner></Spinner> : isSIgnUp ? "Sign Up" : "Login"}
            </SubmitButton>
          </div>
          {!isSIgnUp && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                color: "gray",
                width: "100%",
                fontWeight: "500",
                fontSize: "0.75rem",
                
              }}
            >
              <span style={{ cursor: "pointer" }}>Forgotten Your Password?</span>
            </div>
          )}
          {(!isSIgnUp && isPWValid) && (
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "#f00",
                height: "auto",
                width: "100%",
                fontWeight: "100",
                fontSize: "0.75rem",
              }}
            >
              Invalid Password
            </span>
          )}
          {
            (errorObj.status) && 
            <Error $colors={colors}>
              {errorObj.message}
            </Error>
          }
        </InputDiv>
        <SwitchDiv $colors={colors}>
          {isSIgnUp ? (
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "#000",
                height: "auto",
                width: "100%",
                fontWeight: "100",
                fontSize: "0.9rem",
              }}
            >
              <div
                style={{
                  fontWeight: "300",
                }}
              >
                Already have an account?
              </div>
              <div
                onClick={() => {setIsSignUp(!isSIgnUp); setErrorObj({status : false, message : ""})}}
                style={{
                  cursor: "pointer",
                  marginLeft: "0.2rem",
                  fontWeight: "700",
                }}
              >
                Login
              </div>
            </span>
          ) : (
            <span
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "flex-start",
                color: "#000",
                height: "auto",
                width: "100%",
                fontWeight: "100",
                fontSize: "0.9rem",
              }}
            >
              <div
                style={{
                  fontWeight: "300",
                }}
              >
                {"Don't have an account?"}
              </div>
              <div
                onClick={() => {setIsSignUp(!isSIgnUp); setErrorObj({status : false, message : ""})}}
                style={{
                  cursor: "pointer",
                  marginLeft: "0.2rem",
                  fontWeight: "700",
                }}
              >
                Sign Up
              </div>
            </span>
          )}
        </SwitchDiv>
      </LoginDiv>
    </Container>
  );
}
