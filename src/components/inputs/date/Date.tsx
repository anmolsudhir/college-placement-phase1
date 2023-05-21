import { useState } from "react";
import { Label } from "../Label";
import { DateDiv } from "./styles";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addObj } from "@/redux/features/formSlice";

export default function Date({ element, handleIV}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState('')
    const handleDate = (e) => {
        setSelectedDate(e.target.value)
        handleIV(true)
    }

    const handleConstruction = (e) => {
      const payload: any = JSON.parse(`{"${element.objName}":"${e.trim()}"}`);
      dispatch(addObj(payload));
    };

    return(
        <>
            <Label $theme={theme}>{element.label}</Label>
            <DateDiv onChange={(e) =>  {handleDate(e); handleConstruction(e.target.value)}} $theme={theme} />
        </>
    )
}