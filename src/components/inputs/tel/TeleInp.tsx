import { Label } from "../Label";
import { Input, InputDiv, Phone} from "./styles";
import { useState } from "react";

export default function TeleInput({theme, element}){
    const [isValid, setIsValid] = useState(true)
    const handleValidation = (e) => {
        if(e.target.value.match(element.regex))
            setIsValid(true)
        else setIsValid(false)
    }

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <InputDiv>
                <Phone $theme={theme}>+91</Phone>
                <Input onChange={handleValidation} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
            </InputDiv>
        </>
    )
}