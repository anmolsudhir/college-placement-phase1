import { changeTheme } from '@/redux/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {LogoContainer, LogoText, MenuBtn, ThemeBtn, TopBarContainer} from './styles'
import Image from 'next/image';
import { changeMobile } from '@/redux/features/mobileSlice';

export default function TopBar({ }){
    const dispatch = useDispatch()
    const theme = useSelector((state : RootState) => state.theme.theme)

    return (            
        <TopBarContainer $theme={theme}>
            <LogoContainer>
                <Image style={{padding:"0.5rem"}} src='/logo-cmr-cropped-removebg-preview.png' alt='logo' width={50} height={50}/>
                <LogoText>CMRIT PLACEMENT PORTAL</LogoText>
            </LogoContainer>
            <ThemeBtn $theme={theme} onClick={() => dispatch(changeTheme())}>
                <Image style={{padding:"0.5rem"}} src={theme === 'dark' ? '/light.png' : '/dark.png'} alt='logo' width={22} height={22}/>
            </ThemeBtn>
            <MenuBtn onClick={() => dispatch(changeMobile())} $theme={theme}>
                <Image style={{padding:"0.5rem"}} src='/menu-bar.png' alt='logo' width={22} height={22}/>
            </MenuBtn>
        </TopBarContainer>
    );
}