import { Label } from "../Label";
import { Input, InputDiv, Phone} from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function TeleInput({ element, handleIV}){
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
                <Phone $theme={theme}>+91</Phone>
                <Input $isValid={isValid} onChange={handleValidation} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}