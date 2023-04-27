import { Label } from "../Label";
import { Input, InputDiv, Trail} from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";

export default function MailInput({theme, element, handleIV}){
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

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <InputDiv>
                <Input $isValid={isValid} onChange={handleValidation} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
                {element.label === 'College Mail' && <Trail $theme={theme}>@cmrit.ac.in</Trail>}
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}