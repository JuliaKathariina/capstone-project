import NavBar from "../../components/Navbar/Navbar";
import styled from "styled-components";
import Card from "../../components/Card.js";
import ScrollButton from "../../components/Scroll";
import { Search } from "../../components/Searchbar/search";
import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../../context/cardContext";

export default function Home() {
  const { stones, setStones } = useContext(CardContext);
  const [filterStones, setFilterStones] = useState(stones);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Main>
        <BackgroundImage />
        <NavBar />
        <StyledHeadline>StyledHeadline</StyledHeadline>
        <Search stones={stones} setFilterStones={setFilterStones} />

        <div>
          {filterStones.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              img={item.img}
              name={item.name}
              sternzeichen={item.sternzeichen}
              chakra={item.chakra}
              inhalt={item.inhalt}
              anwendung={item.anwendung}
              item={item.item}
              stones={stones}
              setStones={setStones}
              checked={checked}
            />
          ))}
        </div>

        <ScrollButton />
      </Main>
    </>
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
  text-align: center;
  z-index: 600;
`;
