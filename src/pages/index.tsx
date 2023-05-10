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
import { addObj } from "@/redux/features/formSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios'
import { Spinner } from "@/components/Spinner";

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
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(addObj({}))
  }, [])

  const mailElem = {
    label: "Cmrit mail",
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
    const payload: any = JSON.parse(`{"${type}":"${e}"}`);
    dispatch(addObj(payload));
  };

  const checkPassword = async () => {
    if (obj.formObject.password && obj.formObject.password === "88888888") {
      return Promise.resolve(true);
    }
    return Promise.reject(false);
  };

  const handleLogin = async () => {
    if (mailValid && telValid) {
      console.log("Hi");
      try {
        await checkPassword();
        setisPWValid(false);
      } catch (error) {
        console.log(error);
        setisPWValid(true);
      }
    }
  };

  const handleSignUp = async (event) => {
    if (mailValid && telValid && passwordValid) {
      setLoading(true)
      event.preventDefault();
      const link = `/verify?id=12345&last=${obj.formObject.tel?.substring(
        obj.formObject.tel.length - 4
      )}&first=${obj.formObject.mail}`;

      try{
        const res = await axios.post('/api/signup', {...(obj.formObject)})
        router.push(link)
      } catch(err){
        console.log(err)
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
              src={active ? "/cancel.png" : "/information-button-dark.png"}
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
            style={{ width: "100%", margin: "1rem 0", boxSizing: "border-box" }}
          >
            <Text
              element={password}
              handleIV={(valid) => setPWValid(valid)}
              handleConstruction={handleConstruction}
            ></Text>
          </div>
          <div
            style={{ width: "100%", margin: "1rem 0" }}
          >
              <SubmitButton
                $disabled={loading}
                onClick={isSIgnUp ? handleSignUp : handleLogin}
                $colors={colors}
              >
                {loading ? <Spinner></Spinner> : (isSIgnUp ? "Sign Up" : "Login")}
              </SubmitButton>
          </div>
          {isPWValid && (
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
                fontSize: "0.75rem",
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
                onClick={() => setIsSignUp(!isSIgnUp)}
                style={{
                  textDecoration: "underline",
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
                fontSize: "0.75rem",
              }}
            >
              <div
                style={{
                  fontWeight: "300",
                }}
              >
                Don't have an account?
              </div>
              <div
                onClick={() => setIsSignUp(!isSIgnUp)}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: "0.2rem",
                  fontWeight: "700",
                }}
              >
                Sign Up
              </div>
            </span>
          )}
        </InputDiv>
      </LoginDiv>
    </Container>
  );
}
