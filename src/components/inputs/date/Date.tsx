import { useState } from "react";
import { Label } from "../Label";
import { DateDiv } from "./styles";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)

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