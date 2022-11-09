import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { CardContext } from "../context/cardContext.js";
function Card({ name, inhalt, anwendung, sternzeichen, chakra, img, id }) {
  const { stones, setStones } = useContext(CardContext);
  function toggleStatus(id) {
    setStones(
      stones.map((stone) =>
        stone.id === id ? { ...stone, status: !stone.status } : stone
      )
    );
  }

  return (
    <CardBody>
      <ImageCard>
        <Image src={img} alt="Stones" width="100px" height="100px" />
      </ImageCard>
      <HeadlineCard>{name}</HeadlineCard>
      <Headlinedivs>{sternzeichen}</Headlinedivs>
      <Headlinedivs>{chakra}</Headlinedivs>
      <CardDescription>{inhalt}</CardDescription>
      <CardDescription>{anwendung}</CardDescription>
      <Button onClick={() => toggleStatus(id)}> Favoriten</Button>
    </CardBody>
  );
}

export default Card;

const Button = styled.button`
  background-color: rgba(245, 235, 235, 0.38);
  color: black;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 0px 0px;
  cursor: pointer;
`;
const CardBody = styled.div`
  overflow: hidden;
  box-sizing: 0 2px 20px;
  box-shadow: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(245, 235, 235, 0.38);
  margin: 20px 50px;
  z-index: 3;
`;

const ImageCard = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const HeadlineCard = styled.h2`
  padding: 1rem;
  text-align: center;
`;

const Headlinedivs = styled.div`
  padding: 1rem;
  text-align: center;
`;

const CardDescription = styled.p`
  padding: 0 1rem;
  text-align: center;
`;
