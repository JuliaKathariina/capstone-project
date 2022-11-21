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

  return (
    <>
      <BackgroundImage />

      <Search stones={stones} setFilterStones={setFilterStones} />
      <Main>
        <CardContainer>
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
              stones={stones}
              setStones={setStones}
              status={item.status}
            />
          ))}
        </CardContainer>
        <ScrollButton />
      </Main>
      <NavBar />
    </>
  );
}

const Main = styled.main`
  display: flex;
`;

const CardContainer = styled.div`
  margin-bottom: 5rem;
`;

const BackgroundImage = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -9999;
  position: fixed;
  background-image: url("/img/beige.jpg");
  background-size: 100vh;
`;
