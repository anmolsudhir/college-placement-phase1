import { Label } from "../Label";
import { AddressArea } from "./styles";

export default function Address({theme, element}){
    return (
        <>
            <Label $theme={theme}>{element.label}</Label>
            <AddressArea $theme={theme} $placeholder={element.label}></AddressArea>
        </>
    )
}