import { Label } from "../Label";
import { SelectGroup, Option } from "./styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function Select({element, handleHidden}){
  const theme = useSelector((state : RootState) => state.theme.theme)
  const [hasRendered, setHasRendered] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if(hasRendered && element.label === 'Pursuing Degree'){
        if(selectedOption === 'BE')
            handleHidden(true)
        else handleHidden(false)
    }
    else setHasRendered(true)
  }, [selectedOption])


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