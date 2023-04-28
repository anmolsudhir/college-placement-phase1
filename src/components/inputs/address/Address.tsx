import { Label } from "../Label";
import { AddressArea } from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";

export default function Address({theme, element, handleIV}){

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
            <Label $theme={theme}>{element.label}</Label>
            <AddressArea $isValid={isValid} onChange={handleValidation} $theme={theme} $placeholder={element.label}></AddressArea>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}