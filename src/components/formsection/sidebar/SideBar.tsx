import {  Modal, SideBarContainer} from "./styles";
import info from "@/assests/info/info";
import SideBarElemComp from "./SideBarElemComp";

export default function SideBar({theme, handleScroll, mobile, handleMobile}){
    const content = info.map((element, idx) => <SideBarElemComp theme={theme} idx={idx} handleScroll={handleScroll} key={element[0].header} label={element[0].header} content = {element[0].content}></SideBarElemComp>)

    return(
        <>
        <SideBarContainer $mobile={mobile} $theme={theme}>
            <pre style={{marginBottom:"1rem", marginTop:"0", marginLeft:"1rem", color:"#B0B0B0", minHeight:"1rem"}}>Overview   {">"}</pre>
            {content}
        </SideBarContainer>
        {mobile && <Modal onTouchStart={handleMobile}/>}
        </>
    )
}