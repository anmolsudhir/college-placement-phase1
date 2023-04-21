import { useState } from "react";
import { TextInput } from "./styles";
import { Label } from "../Label";

export default function Text({theme, element}){
    const [isValid, setIsValid] = useState(true)
    const handleValidation = (e) => {
        if(e.target.value.match(element.regex))
            setIsValid(true)
        else setIsValid(false)
    }

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <TextInput $type={element.type} onChange={handleValidation} $isValid={isValid} $theme = {theme} $placeholder={element.label}/>
        </>
    )
}