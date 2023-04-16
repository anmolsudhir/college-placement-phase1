import {LogoContainer, LogoText, MenuBtn, ThemeBtn, TopBarContainer} from './styles'
import Image from 'next/image';

export default function TopBar({theme, handleTheme }){
    return (            
        <TopBarContainer $theme={theme}>
            <LogoContainer>
                <Image style={{padding:"0.5rem"}} src='/logo-cmr-cropped-removebg-preview.png' alt='logo' width={50} height={50}/>
                <LogoText>CMRIT PLACEMENT PORTAL</LogoText>
            </LogoContainer>
            <ThemeBtn $theme={theme} onClick={handleTheme}>
                <Image style={{padding:"0.5rem"}} src={theme === 'dark' ? '/brightness.png' : '/sleep-mode.png'} alt='logo' width={22} height={22}/>
            </ThemeBtn>
            <MenuBtn $theme={theme}>
                <Image style={{padding:"0.5rem"}} src='/menu-bar.png' alt='logo' width={22} height={22}/>
            </MenuBtn>
        </TopBarContainer>
    );
}