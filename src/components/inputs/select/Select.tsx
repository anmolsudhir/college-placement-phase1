import { Label } from "../Label";
import { SelectGroup, Option } from "./styles";
import { useState } from "react";

export default function Select({theme, element}){

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


    const options = element.list?.map((elem, idx) => <Option key={idx*Math.random()} $value={elem}>{elem}</Option>)
    return (
        <>
            <Label $theme={theme}>{element.label}</Label>
            <SelectGroup 
                value={selectedOption} 
                onChange={handleOptionChange}
                $theme={theme}
            >
                {options}
            </SelectGroup>
        </>
    )
}