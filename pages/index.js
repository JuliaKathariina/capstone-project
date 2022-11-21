import Head from "next/head";
import styled from "styled-components";
import Buttonhome from "../components/buttonhome/buttonhome";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
      </Head>
      <Main>
        <BackgroundImage />

        <Container>
          <StyledHeadlineh4>Reminder</StyledHeadlineh4>
          <BoxText>
            Contentment is the philosophers stone that turns everything it
            touches into gold.
          </BoxText>

          <Devicer />
          <Devicer1>
            <PLeft>Okay </PLeft>
          </Devicer1>
          <Link href="/Card">
            <StyleLeft> Show me stones...</StyleLeft>
          </Link>
        </Container>
        <Container>
          <StyledHeadlineh4>Reminder</StyledHeadlineh4>
          <BoxText>Do things at your own pace. Lifes not a race</BoxText>

          <Devicer />
          <Devicer1>
            <PLeft>Okay </PLeft>
          </Devicer1>
          <Link href="/mantra">
            <StyleRight>Show me mantra...</StyleRight>
          </Link>
        </Container>
      </Main>
    </div>
  );
}

const StyleLeft = styled.a`
  text-decoration: underline double black;
  cursor: pointer;
`;
const StyleRight = styled.a`
  text-decoration: underline double black;
  cursor: pointer;
`;
const Main = styled.main`
  display: grid;
  margin-top: 7rem;
`;
const Container = styled.div`
  background-color: white;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;
const BoxText = styled.p``;

const BackgroundImage = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -9999;
  position: fixed;
  background-image: url("/img/home.jpg");
`;

const StyledHeadlineh4 = styled.h4``;

const PLeft = styled.p`
  margin-left: 4rem;
  text-decoration: line-through wavy black;
`;

const Devicer = styled.div`
  width: 100%;
  height: 2px;
  background-color: #4b4b4d;
  margin: auto 0;
`;
const Devicer1 = styled.div`
  height: 3em;
  margin-left: 10em;
  width: 2px;
  background-color: #4b4b4d;
`;
