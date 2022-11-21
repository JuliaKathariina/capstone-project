import styled from "styled-components";
import Image from "next/image";
import { useContext } from "react";
import { CardContext } from "../context/cardContext.js";
import { useState } from "react";
import { HeartSwitch } from "@anatoliygatt/heart-switch";

function Card({
  name,
  inhalt,
  anwendung,
  sternzeichen,
  chakra,
  img,
  id,
  status,
}) {
  const { stones, setStones } = useContext(CardContext);
  const [checked, setChecked] = useState(status);
  function toggleStatus(id) {
    setStones(
      stones.map((stone) =>
        stone.id === id ? { ...stone, status: !stone.status } : stone
      )
    );
  }

  return (
    <CardBody>
      <HeartSwitch
        size="lg"
        padding="20px"
        inactiveTrackFillColor="black"
        inactiveTrackStrokeColor="#black"
        activeTrackFillColor="beige"
        activeTrackStrokeColor="black"
        inactiveThumbColor="white"
        activeThumbColor="black"
        onChange={(event) => {
          toggleStatus(id);
          setChecked(event.target.checked);
        }}
        checked={checked}
      />
      <ImageCard>
        <Image src={img} alt="Stones" width="100px" height="100px" />
      </ImageCard>

      <HeadlineCard>{name}</HeadlineCard>

      <Headlinedivs1>
        <PStyle>Sternzeichen:</PStyle>
        {sternzeichen}
      </Headlinedivs1>

      <Headlinedivs2>
        <PStyle>Charken:</PStyle>
        {chakra}
      </Headlinedivs2>
      <Devicer />
      <CardDescription>{inhalt}</CardDescription>
      <Devicer />
      <CardDescription>Anwendung:{anwendung}</CardDescription>
    </CardBody>
  );
}

export default Card;

const Devicer = styled.div`
  display: grid;
  width: 100%;
  height: 2px;
  background-color: #4b4b4d;
  margin: auto 0;
`;

const CardBody = styled.div`
  overflow: hidden;
  box-sizing: 0 2px 25px;
  box-shadow: gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin: 20px 20px;
  z-index: 3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const ImageCard = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const HeadlineCard = styled.h2`
  padding: 1rem;
  text-align: center;
  text-decoration: underline black;
`;

const Headlinedivs1 = styled.div`
  text-align: center;
  background-color: #f4f1e9;
  border-radius: 80px;
  margin: 10px;
`;

const Headlinedivs2 = styled.div`
  text-align: center;
  margin: 10px;
  border-radius: 80px;
  background-color: #f4f1e9;
`;

const CardDescription = styled.p`
  padding: 0 1rem;
  text-align: center;
`;
const PStyle = styled.p`
  text-decoration: underline black;
`;
