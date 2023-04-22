import { Label } from "../Label";
import { Input, InputDiv, Trail} from "./styles";
import { useState } from "react";

export default function MailInput({theme, element}){
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
                <Input onChange={handleValidation} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
                {element.label === 'College Mail' && <Trail $theme={theme}>@cmrit.ac.in</Trail>}
            </InputDiv>
        </>
    )
}