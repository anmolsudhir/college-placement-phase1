import { FormSectionContentDiv } from "./styled";

export default function FormSectionContent({theme, slides, compref}){

    return <FormSectionContentDiv ref={compref}  $theme={theme}>
            {slides}
        </FormSectionContentDiv>
    
}
