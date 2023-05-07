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

export default function Home() {
  const theme = useSelector((state : RootState) => state.theme.theme)
  const colors = useSelector((state : RootState) => state.colors)
  const obj = useSelector((state : RootState) => state.form)
  const [mailValid, setMailValid] = useState(false)
  const [telValid, setTelValid] = useState(false)
  const [passwordValid, setPWValid] = useState(false)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

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
    const payload : any = JSON.parse(`{"${type}":"${e}"}`);
    console.log(typeof payload);
    dispatch(addObj(payload));
  }

  const handleSubmission = () => {
    console.log(obj)
    if(mailValid && telValid && passwordValid){
      //proceed
      console.log('hey')
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
                <li style={{padding:"1rem"}}>
                  <b>Mobile Number</b> : Do not enter +91, the mobile number must be 10 digits, check again after typing
                </li>
                <li style={{padding:"1rem"}}>
                  <b>College e-mail</b> : Enter your College e-mail ID. (Ex ansu20cs@cmrit.ac.in)
                </li>
                <li style={{padding:"1rem"}}>
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
            <SubmitButton onClick = {handleSubmission} $colors={colors}>Login</SubmitButton>
          </div>
        </InputDiv>
      </LoginDiv>
    </Container>
  )
}
