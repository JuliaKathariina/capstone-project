import NavBar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../../components/Card.js";
import ScrollButton from "../../components/Scroll";
import { DataStones } from "../../Data/DataStones";

const stones = DataStones;

export default function Home() {
  return (
    <>
      <Main>
        <StyledHeadline>My Souls place</StyledHeadline>
        <div>
          {stones.map((item) => (
            <Card
              key={item.id}
              img={item.img}
              name={item.name}
              sternzeichen={item.sternzeichen}
              chakra={item.chakra}
              inhalt={item.inhalt}
              anwendung={item.anwendung}
            />
          ))}
        </div>

        <ScrollButton />
      </Main>

      <NavBar />
    </>
  );
}

const Main = styled.main`
  display: grid;
  background-color: black;
`;

const StyledHeadline = styled.h1`
  font-family: "Raleway", sans-serif;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 13% 16% 13% 16%;
  text-align: center;
`;
