import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { CardContext } from "../context/cardContext.js";
import { useState } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";
function Card({ name, inhalt, anwendung, sternzeichen, chakra, img, id }) {
  const { stones, setStones } = useContext(CardContext);
  const [checked, setChecked] = useState(true);
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
      <HeartSwitch
        size="lg"
        inactiveTrackFillColor="#00000075"
        inactiveTrackStrokeColor="##05040500"
        activeTrackFillColor="#00000075"
        activeTrackStrokeColor="##05040500"
        inactiveThumbColor="#E6E6E6FF"
        activeThumbColor="#00000000"
        onClick={() => toggleStatus(id)}
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
        }}
      />
    </CardBody>
  );
}

export default Card;

const Button = styled.button`
  background-color: rgba(119, 105, 120, 0.11);
  color: black;
  font-size: 20px;

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
  background-color: rgba(119, 105, 120, 0.85);
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
