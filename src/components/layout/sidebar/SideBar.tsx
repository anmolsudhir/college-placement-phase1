import {  Modal, SideBarContainer} from "./styles";
import SideBarElemComp from "./SideBarElemComp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { changeMobile } from "@/redux/features/mobileSlice";

export default function SideBar({info, handleScroll}){
    const theme = useSelector((state : RootState) => state.theme.theme)
    const mobile = useSelector((state : RootState) => state.mobile.mobile)
    const dispatch = useDispatch()

    const content = info.map((element, idx) =>  <SideBarElemComp theme={theme} idx={idx} handleScroll={handleScroll} key={element[0].header} label={element[0].header} content = {element[0].content}></SideBarElemComp>)

    return(
        <>
        <SideBarContainer $mobile={mobile} $theme={theme}>
            {content}
        </SideBarContainer>
        {mobile && <Modal onTouchStart={() => dispatch(changeMobile())}/>}
        </>
    )
}