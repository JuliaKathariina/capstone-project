import Head from "next/head";
import styled from "styled-components";
import Buttonhome from "../components/buttonhome/buttonhome";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
      </Head>
      <Main>
        <BackgroundImage />
        <StyledHeadline>My Souls place</StyledHeadline>
        <Buttonhome />
      </Main>
    </div>
  );
}

const Main = styled.main`
  display: grid;
`;

const BackgroundImage = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -9999;
  position: fixed;
  background-image: url("/img/starlight_background.jpg");
  background-size: 100vh;
`;

const StyledHeadline = styled.h1`
  font-family: "Raleway", sans-serif;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 13% 16% 13% 16%;
`;
