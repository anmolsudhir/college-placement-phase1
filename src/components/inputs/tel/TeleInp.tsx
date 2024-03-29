import { Label } from "../Label";
import { Input, InputDiv, Phone} from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addObj } from "@/redux/features/formSlice";

export default function TeleInput({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const dispatch = useDispatch();
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
    };

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <InputDiv>
                <Phone $theme={theme}>+91</Phone>
                <Input $isValid={isValid} onChange={(e) => {handleValidation(e); handleConstruction(e.target.value)}} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}