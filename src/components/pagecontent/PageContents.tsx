import { PageContContainer} from "./styles";
import PageContentComp from "./PageContentComp";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function PageContents({info, handleScroll}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const mobile = useSelector((state : RootState) => state.mobile.mobile)

    const content = info.map((element, idx) =>  <PageContentComp theme={theme} idx={idx} handleScroll={handleScroll} key={element[0].header} label={element[0].header} content = {element[0].content}></PageContentComp>)

    return(
        <>
            <PageContContainer $mobile={mobile} $theme={theme}>
                <div style={{color:"#B0B0B0", minHeight:"1rem", fontWeight:"900", marginBottom:"0.75rem"}}>On this page</div>
                {content}
            </PageContContainer>
        </>
    )
}