import { Label } from "../Label";
import Radio from "../radio/Radio";
import { Precentage, ResultDiv, ResultInput } from "./styles";
import { useEffect, useState } from "react";
import { Invalid } from "../Invalid";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addObj } from "@/redux/features/formSlice";

export default function Result({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const dispatch = useDispatch();
    const [isValid, setIsValid] = useState(true)
    const [isPercentage, setIsPercentage] = useState(false)
    const [hasRendered, setHasRendered] = useState(false)
    const [value, setValue] = useState('')
    const [type, setType] = useState('cgpa')
    const [regex, setRegex] = useState(/(^[0-9]\.[0-9]|10.0)\s*$/)
    
    useEffect(() => {
        if(!hasRendered){
            const payload: any = JSON.parse(
              `{"${element.objName}" : {"type":"cgpa", "value" : ""}}`
            );
            dispatch(addObj(payload));
            
        }
        if(hasRendered){
            if(value.match(regex)){
                setIsValid(true)
                handleIV(true)
            }
            else {
                setIsValid(false)
                handleIV(false)
            }
        }
        else setHasRendered(true)
    }, [value, regex])

    useEffect(() => {
      handleConstruction();
    }, [type, value]);


    const handleConstruction = () => {
        dispatch(
          addObj(
            JSON.parse(
              `{"${element.objName}" : { "type" : "${type}", "value" : "${value}"} }`
            )
          )
        );
    }

    const handleSelect = (e) => {
        if(e === 'CGPA') {
            setType('cgpa')
            setRegex(/^[0-9]\.[0-9]$/) 
            setIsPercentage(false)
        }
        else {
            setType("percentage");
            setRegex(/^[0-9]{2}\.[0-9]+\s*$/)
            setIsPercentage(true)
        }
    }

    const ele = {
        label : '',
        list : ['CGPA', 'Percentage']
    }

    const handleValidation = async(e) => {
        setValue(e.target.value)
        if(e.target.value.match(regex)){
            setIsValid(true)
            handleIV(true)
            handleConstruction();
        }
        else {
            setIsValid(false)
            handleIV(false)
            handleConstruction();
        }
    }

    return ( 
        <>
            <Label $theme={theme} className='label'>{element.label}</Label>
            <Radio handleHidden={() => {}} handleSelect={handleSelect} element={ele}></Radio>
            <ResultDiv>
                <ResultInput $isValid={isValid} onChange={(e) => {handleValidation(e)}} $theme={theme} $placeholder={element.label}></ResultInput>
                {isPercentage && <Precentage $theme={theme}>%</Precentage>}
            </ResultDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}