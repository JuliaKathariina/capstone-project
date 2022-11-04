import styled from "styled-components";
import Image from "next/image";

function Card({ name, inhalt, anwendung, sternzeichen, chakra, img }) {
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
      </CardBody>
    </WrapperCard>
  );
}

export default Card;

const WrapperCard = styled.div``;

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
