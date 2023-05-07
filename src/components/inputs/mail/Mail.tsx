import { Label } from "../Label";
import { Input, InputDiv, Trail} from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function MailInput({ element, handleIV, handleConstruction}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const [isValid, setIsValid] = useState(true)
    const handleValidation = (e) => {
        if(e.target.value.match(element.regex)){
            setIsValid(true)
            handleIV(true)
        }
        else {
            setIsValid(false)
            handleIV(false)
        }
    }

    const trail = element.label.match(/(college|College|COLLEGE|CMRIT|cmrit|Cmrit)/) ? '@cmrit.ac.in' : '@gmail.com'

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <InputDiv>
                <Input $isValid={isValid} onChange={(e) => {handleValidation(e);handleConstruction(element.type,e.target.value + trail)}} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
                <Trail $theme={theme}>{trail}</Trail>
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}