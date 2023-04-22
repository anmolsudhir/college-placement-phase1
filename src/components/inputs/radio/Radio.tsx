import { Label } from "../Label";
import { RadioDiv, RadioLabel, RadioOption } from "./styles";
import { useState } from "react";

export default function Radio({theme, element}){

    const [selectedOption, setSelectedOption] = useState(element.list ? element.list[0] : '');

    const handleOptionChange = (e) => {
        setSelectedOption(e);
    };

    const options = element.list?.map((elem, idx : number) =>  
            <div style={{width:"100%", boxSizing:"inherit", display:"flex", alignItems:"center", justifyContent:"center"}} key={idx*Math.random()}>
                <RadioOption $
                    $theme={theme} 
                    $name={element.label} 
                    value={elem}
                    checked={selectedOption === elem}
                    onChange={() => handleOptionChange(elem)}
                    />
                <RadioLabel onClick={() => handleOptionChange(elem)} $theme={theme} htmlFor={elem}>{elem}</RadioLabel>
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