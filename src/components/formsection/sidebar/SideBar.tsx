import {  Modal, SideBarContainer} from "./styles";
import info from "@/assests/info/info";
import SideBarElemComp from "./SideBarElemComp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { changeMobile } from "@/features/mobileSlice";

export default function SideBar({handleScroll}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const mobile = useSelector((state : RootState) => state.mobile.mobile)
    const dispatch = useDispatch()

    const content = info.map((element, idx) =>  <SideBarElemComp theme={theme} idx={idx} handleScroll={handleScroll} key={element[0].header} label={element[0].header} content = {element[0].content}></SideBarElemComp>)

    return(
        <>
        <SideBarContainer $mobile={mobile} $theme={theme}>
            <pre style={{margin:"0 0 1rem 0", color:"#B0B0B0", minHeight:"1rem"}}>Overview  {">"}</pre>
            {content}
        </SideBarContainer>
        {mobile && <Modal onTouchStart={() => dispatch(changeMobile())}/>}
        </>
    )
}