import { useState } from "react";
import { Label } from "../Label";
import { DateDiv } from "./styles";

export default function({theme, element, handleIV}){

    const [selectedDate, setSelectedDate] = useState('')
    const handleDate = (e) => {
        setSelectedDate(e.target.value)
        handleIV(true)
    }
    return(
        <>
            <Label $theme={theme}>{element.label}</Label>
            <DateDiv onChange={handleDate} $theme={theme} />
        </>
    )
}