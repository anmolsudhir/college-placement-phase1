import { Label } from "../Label";
import { DateDiv } from "./styles";

export default function({theme, element}){
    return(
        <>
            <Label $theme={theme}>{element.label}</Label>
            <DateDiv $theme={theme} />
        </>
    )
}