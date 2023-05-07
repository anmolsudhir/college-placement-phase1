import { Label } from "../Label";
import Radio from "../radio/Radio";
import { Precentage, ResultDiv, ResultInput } from "./styles";
import { useEffect, useState } from "react";
import { Invalid } from "../Invalid";
import { RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";

export default function Result({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const [isValid, setIsValid] = useState(true)
    const [isPercentage, setIsPercentage] = useState(false)
    const [hasRendered, setHasRendered] = useState(false)
    const [value, setValue] = useState('')
    const [regex, setRegex] = useState(/(^[0-9]\.[0-9]|10.0)\s*$/)
    
    useEffect(() => {
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

    const handleSelect = (e) => {
        console.log(value, regex)
        if(e === 'CGPA') {
            setRegex(/^[0-9]\.[0-9]$/) 
            setIsPercentage(false)
        }
        else {
            setRegex(/^[0-9]{2}\.[0-9]+\s*$/)
            setIsPercentage(true)
        }
    }

    const ele = {
        label : '',
        list : ['CGPA', 'Percentage']
    }

    const handleValidation = (e) => {
        setValue(e.target.value)
        if(e.target.value.match(regex)){
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
            <Radio handleHidden={(e) => {}} handleSelect={handleSelect} element={ele}></Radio>
            <ResultDiv>
                <ResultInput $isValid={isValid} onChange={handleValidation} $theme={theme} $placeholder={element.label}></ResultInput>
                {isPercentage && <Precentage $theme={theme}>%</Precentage>}
            </ResultDiv>
            {!isValid && <Invalid $theme={theme}>Invalid Input. Please check with info given at the top right corner</Invalid>}
        </>
    )
}