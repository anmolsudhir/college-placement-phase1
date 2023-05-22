import Layout from "@/components/layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import styled from 'styled-components'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${(props: any) =>
    props.$theme === "light" ? "#F1F1F1" : "#1c1c1c"};

`;

const ButtonGrp = styled.div`
  display: none;
  flex-direction: row;
  gap: 5rem;
  margin: 5rem 0;

  @media (max-width : 720px) {
    display: flex;
  }
`

const Options = styled.div`
  box-sizing: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 1rem 0.05rem
    ${(props) =>
      props.$theme === "light"
        ? props.$colors.border.light
        : "rgb(20, 20, 20)"};
  height: auto;
  padding: 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 720px) {
    display: none;
  }
`;

const NotFoundText = styled.div`
  box-sizing: inherit;
  margin-top: 6rem;
  width: auto;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 2rem;
  color: ${(props: any) =>
    props.$theme === "dark" ? "#999999" : "#1c1c1c"};
`;

const LogoText = styled.div`
  box-sizing: inherit;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: auto;
  font-size: 1.5rem;
  text-align: left;
  padding: 1rem 0 0 0;
  color: #99bf14;
`;

const TextSpan = styled.div`
  font-weight: 300;
  padding: 1rem 2rem;
  text-align: center;
  color: ${(props: any) => (props.$theme === "dark" ? "#999999" : "#1c1c1c")};
`;

export default function NotFound(){
    const colors = useSelector((state : RootState) => state.colors)
    const theme = useSelector((state: RootState) => state.theme.theme);
    return (
      <Layout notMenu={true} notSidebar={true} info={{}}>
        <Container $colors={colors} $theme={theme}>
          <NotFoundText $theme={theme}>
            Sorry, the page you requested is not available
          </NotFoundText>
          <TextSpan $theme={theme}>
            The link you followed maybe broken or you are not authorized. Go
            back to &nbsp;
            <Link
              href={"/"}
              style={{
                color: "#99bf14",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Home
            </Link>
            &nbsp; or try signing / logging in.
          </TextSpan>
          <ButtonGrp>
            <Button $colors={colors} $theme={theme}>
              Sign In
            </Button>
            <Button $colors={colors} $theme={theme}>
              Login
            </Button>
          </ButtonGrp>
          <Options $theme={theme} $colors={colors}>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <Image
                src="/logo-cmr-cropped-removebg-preview.png"
                alt="logo"
                width={40}
                height={40}
              ></Image>
              <LogoText>
                CMR INSTITUTE OF TECHNOLOGY
              </LogoText>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
              <Button $colors={colors} $theme={theme}>
                Sign In
              </Button>
              <Button $colors={colors} $theme={theme}>
                Login
              </Button>
            </div>
          </Options>
        </Container>
      </Layout>
    );
}