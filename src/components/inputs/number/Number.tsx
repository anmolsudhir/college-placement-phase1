import { Label } from "../Label";
import { Input, InputDiv } from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function NumberInp({ element, handleIV}){
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
            <InputDiv>
                <Input $isValid={isValid} onChange={handleValidation} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}