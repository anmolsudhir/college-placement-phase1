import { useState } from "react";
import { TextInput } from "./styles";
import { Label } from "../Label";
import { Invalid } from "../Invalid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { addObj } from "@/redux/features/formSlice";

export default function Text({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const dispatch = useDispatch()
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

    const handleConstruction = (e) => {
        const payload: any = JSON.parse(`{"${element.objName}":"${e.trim()}"}`);
        dispatch(addObj(payload));
    }

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <TextInput $type={element.type} onChange={(e) => {handleValidation(e); handleConstruction(e.target.value)}} $isValid={isValid} $theme = {theme} $placeholder={element.label}/>
            {!isValid && <Invalid $theme={theme}>{element.errorInfo ? element.errorInfo : "Invalid Input. Please check with info given at the top right corner"}</Invalid>}
        </>
    )
}