import { Label } from "../Label";
import { RadioDiv, RadioLabel, RadioOption } from "./styles";

export default function Radio({theme, element}){
    const options = element.list?.map((elem, idx) =>  <>
                <RadioOption $name={element.label} $id={elem} $type={element.type}/>
                <RadioLabel htmlFor={elem}>{elem}</RadioLabel>
            </>)

    return(
        <>
            <Label $theme={theme}>{element.label}</Label>
            <RadioDiv $theme={theme}>
                {options}
            </RadioDiv>
        </>
    )
}