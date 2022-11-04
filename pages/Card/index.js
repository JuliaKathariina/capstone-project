import NavBar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../../components/Card.js";
import ScrollButton from "../../components/Scroll";
import { DataStones } from "../../Data/DataStones";
import { Search } from "../../components/Searchbar/search";
import { useState } from "react";

export default function Home() {
  const [stones, setStones] = useState(DataStones);
  const [filterStones, setFilterStones] = useState(DataStones);

  return (
    <>
      <Main>
        <BackgroundImage />
        <StyledHeadline>My Souls place</StyledHeadline>
        <Search stones={stones} setFilterStones={setFilterStones} />
        <div>
          {filterStones.map((item) => (
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

        <NavBar />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: grid;
`;

const BackgroundImage = styled.div`
  width: 100%;
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
  text-align: center;
`;
