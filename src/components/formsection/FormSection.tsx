import SideBar from "./sidebar/SideBar";
import FormSectionContent from "./formsectioncontent/FormSectionContent";
import { FormContainer, ProgressBar } from "./styles";

export default function FormSection({theme}){
    return(
        <FormContainer $theme={theme}>
            <ProgressBar/>
            <SideBar theme={theme}/>
            <FormSectionContent theme={theme} />
        </FormContainer>
    )
}