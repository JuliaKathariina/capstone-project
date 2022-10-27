import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import BG from "../public/img/background.gif";
import Buttonhome from "../components/buttonhome/buttonhome";

export default function Home() {
  return (
    <div>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
      </Head>
      <Main>
        <Background>
          <Image src={BG} alt="background" layout="responsive" />
        </Background>
        <H1>My Souls place</H1>
        <Buttonhome />
      </Main>
    </div>
  );
}

const Main = styled.main`
  text-align: center;
`;

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
`;
