import { RootState } from '@/redux/store/store'
import {Container, Footer, InputDiv, LoginDiv, LogoDiv, SubmitButton, TextDiv, LandingDiv} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import MailInput from '@/components/inputs/mail/Mail'
import { InfoDiv, InfoText } from '@/components/formsection/formsectioncontent/formslide/inputcard/styles'
import TeleInput from '@/components/inputs/tel/TeleInp'
import Text from '@/components/inputs/text/Text'
import { addObj } from '@/redux/features/formSlice'
import { useState } from 'react'
import createFirebaseApp from '@/firebase/auth/initFirebase'
import createReCAPTCHA from '@/firebase/auth/phone/reCAPCHA'
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"

export default function Home() {
  const theme = useSelector((state : RootState) => state.theme.theme)
  const colors = useSelector((state : RootState) => state.colors)
  const obj = useSelector((state : RootState) => state.form)
  const [mailValid, setMailValid] = useState(false)
  const [telValid, setTelValid] = useState(false)
  const [passwordValid, setPWValid] = useState(false)
  const [isPWValid, setisPWValid] = useState(false)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

    firebase.initializeApp(firebaseConfig)

  const mailElem ={
    label : "Cmrit mail",
    regex : /^[a-z]{4,6}[0-9]{2}[a-z]{2}\s*$/,
    type : 'mail',
  }

  const telElem ={
    label : "Personal Phone Number",
    regex : /^[6-9][0-9]{9}\s*$/,
    type : 'tel',
  }

  const password ={
    label : "Enter Password",
    regex : /.{8,}/,
    type : 'password',
  }

  const handleConstruction = (type, e) => {
    type === 'password' && setisPWValid(false);
    const payload : any = JSON.parse(`{"${type}":"${e}"}`);
    dispatch(addObj(payload));
  }

  const verifyMobile = () => {
    createReCAPTCHA('submit-btn');
    const phoneNumber = obj.formObject?.tel;
    const appVerifier = window.recaptchaVerifier;
    const firebaseApp = createFirebaseApp()
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        //window.confirmationResult = confirmationResult;
        // ...
        console.log('message sent', confirmationResult)
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
  }

  const checkPassword = async () => {
    if(obj.formObject.password && obj.formObject.password === '88888888'){
      return Promise.resolve(true)
    }
    return Promise.reject(false)
  }

  const handleSubmission = async() => {
    console.log(obj)
    if(mailValid && telValid && passwordValid){
      try{ 
        await checkPassword();
        setisPWValid(false);
        verifyMobile();
      } catch(error){
        console.log(error);
        setisPWValid(true);
      }
    }
    else console.log('soryy')
  }

  return (
    <Container $theme={theme} $colors={colors}>
      <LandingDiv $colors={colors}>
        <LogoDiv>
          <Image src={'/cmr-logo-full.png'} height={100} width={100} alt='logo'></Image>
        </LogoDiv>
        <TextDiv>
          Welcome To CMRIT Placement Protal
        </TextDiv>
        <span style={
          {
            display:"flex", 
            justifyContent:"center",
            alignItems : "flex-end",
            color : "#000",
            width:"100%",
            fontWeight:"100", 
            textAlign:"center"
          }
        }>
          Please proceed with Login to continue
        </span>
        <Footer $colors={colors}>
          CMRIT Placement Cell, Bengaluru 2023
        </Footer>
      </LandingDiv>
      <LoginDiv>
        <InputDiv $colors={colors}>
          <InfoDiv $width={"70%"} $theme={theme} onMouseDown={(e) => e.preventDefault()} onClick={() => setActive(!active)} onMouseLeave={() => setActive(false)} $active={active}>
            {active && <InfoText $theme={theme}>
              <ul>
                <li style={{padding:"1rem",boxSizing:"inherit"}}>
                  <b>Mobile Number</b> : Do not enter +91, the mobile number must be 10 digits, check again after typing
                </li>
                <li style={{padding:"1rem",boxSizing:"inherit"}}>
                  <b>College e-mail</b> : Enter your College e-mail ID. (Ex ansu20cs@cmrit.ac.in)
                </li>
                <li style={{padding:"1rem",boxSizing:"inherit"}}>
                  <b>Password</b> : Enter Password. Password must have a minimum length of 8 characters.  
                </li>  
              </ul>  
            </InfoText>}
            <Image style={{cursor : "pointer"}} src={ '/information-button-dark.png'} alt="info" width={15} height={15}/>
          </InfoDiv>
          <div style={{width : "100%", margin:"0 0 1rem 0"}}>
            <span style={
              {
                display:"flex",
                textAlign:"center" , 
                justifyContent:"center",
                color : "#444444",
                width:"100%",
                fontWeight:"600",
                fontSize : '1.5rem',
              }
            }>
              LOGIN
            </span>
          </div>
          <div style={{width : "100%", margin:"1rem 0"}}>
            <MailInput element={mailElem} handleIV={(valid) => setMailValid(valid)} handleConstruction={handleConstruction}></MailInput>
          </div>
          <div style={{width : "100%", margin:"1rem 0"}}>
            <TeleInput element={telElem} handleIV={(valid) => setTelValid(valid)} handleConstruction={handleConstruction}></TeleInput>
          </div>
          <div style={{width : "100%", margin:"1rem 0", boxSizing:"border-box"}}>
            <Text element={password} handleIV={(valid) => setPWValid(valid)} handleConstruction={handleConstruction}></Text>
          </div>
          <div style={{width : "100%", margin:"1rem 0"}}>
            <SubmitButton $id={'submit-btn'} onClick = {handleSubmission} $colors={colors}>Login</SubmitButton>
          </div>
          {isPWValid && <span style={
              {
                display:"flex",
                textAlign:"center" , 
                justifyContent:"center",
                alignItems : "flex-start",
                color : "#f00",
                height : "auto",
                width:"100%",
                fontWeight:"100",
                fontSize : '0.75rem',
              }
            }>
              Invalid Password
            </span>}
        </InputDiv>
      </LoginDiv>
    </Container>
  )
}
