import NavBar from "../../components/Navbar/Navbar";
import Image from "next/image";
import BlackJpg from "../../public/img/Black Minimalist Starlight Desktop Wallpaper.jpg";
import styled from "styled-components";
import Card from "../../components/Card.js";
import ScrollButton from "../../components/Scroll";

export default function Home() {
  return (
    <>
      <Main>
        <Background>
          <Image src={BlackJpg} alt="background" layout="fill" />
        </Background>
        <StyledHeadline>My Souls place</StyledHeadline>
        <Card />
        <Card />
        <Card />
        <Card />
        <ScrollButton />
      </Main>

      <NavBar />
    </>
  );
}

const Main = styled.main`
  display: grid;
`;

const StyledHeadline = styled.h1`
  font-family: "Raleway", sans-serif;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 13% 16% 13% 16%;
  text-align: center;
`;
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: repeat-y;

  top: 0;
  left: 0;
  z-index: -10;
`;
