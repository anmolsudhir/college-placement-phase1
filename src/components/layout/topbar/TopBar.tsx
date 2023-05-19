import { changeTheme } from '@/redux/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';
import {LogoContainer, LogoText, MenuBtn, ThemeBtn, TopBarContainer} from './styles'
import Image from 'next/image';
import { changeMobile } from '@/redux/features/mobileSlice';
import Link from 'next/link';

export default function TopBar(){
    const dispatch = useDispatch()
    const theme = useSelector((state : RootState) => state.theme.theme)

    return (
      <TopBarContainer $theme={theme}>
        <LogoContainer>
          <Link href={'/'}>
            <Image
              style={{ padding: "0.25rem" }}
              src="/logo-cmr-cropped-removebg-preview.png"
              alt="logo"
              width={30}
              height={30}
            />
          </Link>
          <LogoText>CMRIT PLACEMENT PORTAL</LogoText>
        </LogoContainer>
        <ThemeBtn $theme={theme} onClick={() => dispatch(changeTheme())}>
          <Image
            style={{ padding: "0.5rem" }}
            src={theme === "dark" ? "/light.png" : "/dark.png"}
            alt="logo"
            width={20}
            height={20}
          />
        </ThemeBtn>
        <MenuBtn onClick={() => dispatch(changeMobile())} $theme={theme}>
          <Image
            style={{ padding: "0.5rem" }}
            src="/menu-bar.png"
            alt="logo"
            width={20}
            height={20}
          />
        </MenuBtn>
      </TopBarContainer>
    );
}