import { useState } from "react";
import { TextInput } from "./styles";
import { Label } from "../Label";
import { Invalid } from "../Invalid";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Text({ element, handleIV}){
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

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <TextInput $type={element.type} onChange={handleValidation} $isValid={isValid} $theme = {theme} $placeholder={element.label}/>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}