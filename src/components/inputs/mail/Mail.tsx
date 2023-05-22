import { Label } from "../Label";
import { Input, InputDiv, Trail} from "./styles";
import { useState } from "react";
import { Invalid } from "../Invalid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { addObj } from "@/redux/features/formSlice";

export default function MailInput({ element, handleIV}){
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
      const payload: any = JSON.parse(
        `{"${element.objName}":"${e.trim() + trail}"}`
      );
      dispatch(addObj(payload));
    };

    const trail = element.label.match(/(college|College|COLLEGE|CMRIT|cmrit|Cmrit)/) ? '@cmrit.ac.in' : '@gmail.com'

    return (
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <InputDiv>
                <Input $isValid={isValid} onChange={(e) => {handleValidation(e);handleConstruction(e.target.value)}} $type={element.type} $placeholder = {element.label} $theme={theme}></Input>
                <Trail $theme={theme}>{trail}</Trail>
            </InputDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}