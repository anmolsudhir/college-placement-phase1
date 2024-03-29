import { Label } from "../Label";
import { RadioDiv, RadioLabel, RadioOption } from "./styles";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { addObj } from "@/redux/features/formSlice";

export default function Radio({ element, handleSelect, handleHidden}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState(element.list ? element.list[0] : '');

    useEffect(() => {
        if(element.label === "Are you Interested in CMRIT Placement")
            handleHidden(false)
        if(element.objName){
            const payload: any = JSON.parse(
              `{"${element.objName}":"${element.list[0].trim()}"}`
            );
            dispatch(addObj(payload));
        }
    },[])

    const handleOptionChange = (e) => {
        setSelectedOption(e)
        handleSelect(e)
        e === 'Yes' ? handleHidden(false) : handleHidden(true);
    };

    const handleConstruction = (e) => {
      if (element.objName) {
        const payload: any = JSON.parse(
          `{"${element.objName}":"${e.trim()}"}`
        );
        dispatch(addObj(payload));
      }
    };

    const options = element.list?.map((elem, idx : number) =>  
            <div style={{width:"100%", boxSizing:"inherit", display:"flex", alignItems:"center", justifyContent:"center"}} key={idx*Math.random()}>
                <RadioOption
                    $theme={theme} 
                    $name={element.label} 
                    value={elem}
                    checked={selectedOption === elem}
                    onChange={() => {handleOptionChange(elem); handleConstruction(elem);}}
                    />
                <RadioLabel onClick={() => {
                  handleOptionChange(elem);
                  handleConstruction(elem);
                }} $theme={theme}>{elem}</RadioLabel>
            </div>)

    return(
        <>
            <Label $theme={theme}>{element.label}</Label>
            <RadioDiv $theme={theme}>
                {options}
            </RadioDiv>
        </>
    )
}