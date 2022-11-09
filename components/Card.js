import styled from "styled-components";
import Image from "next/image";

function Card({
  name,
  inhalt,
  anwendung,
  sternzeichen,
  chakra,
  img,
  stones,
  setStones,
  id,
}) {
  function toggleStatus(id) {
    setStones(
      stones.map((stone) =>
        stone.id === id ? { ...stone, status: !stone.status } : stone
      )
    );
  }
  console.log(stones);
  return (
    <WrapperCard>
      <CardBody>
        <ImageCard>
          <Image src={img} alt="Stones" width="100px" height="100px" />
        </ImageCard>
        <HeadlineCard>{name}</HeadlineCard>
        <Headlinedivs>{sternzeichen}</Headlinedivs>
        <Headlinedivs>{chakra}</Headlinedivs>
        <CardDescription>{inhalt}</CardDescription>
        <CardDescription>{anwendung}</CardDescription>
        <Button onClick={() => toggleStatus(id)}>Zu den Favoriten</Button>
      </CardBody>
    </WrapperCard>
  );
}

export default Card;

const WrapperCard = styled.div``;
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
