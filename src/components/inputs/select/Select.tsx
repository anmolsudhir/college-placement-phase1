import { Label } from "../Label";
import { SelectGroup, Option } from "./styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store/store";
import { addObj } from "@/redux/features/formSlice";

export default function Select({element, handleHidden}){
  const theme = useSelector((state : RootState) => state.theme.theme)
  const dispatch = useDispatch();
  const [hasRendered, setHasRendered] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConstruction = (e) => {
    const payload: any = JSON.parse(`{"${element.objName}":"${e.trim()}"}`);
    dispatch(addObj(payload));
  };

  useEffect(() => {
    if(!hasRendered){
        if (element.objName) {
          const payload: any = JSON.parse(
            `{"${element.objName}":"${element.list[0].trim()}"}`
          );
          dispatch(addObj(payload));
        }
    }
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
                onChange={(e) => {handleOptionChange(e); handleConstruction(e.target.value)}}
                $theme={theme}
            >
                {options}
            </SelectGroup>
        </>
    )
}