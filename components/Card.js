import styled from "styled-components";
import Image from "next/image";
import Rosenquarz from "../public/img/Rosenquarz.png";

function Card() {
  return (
    <WrapperCard>
      <CardBody>
        <ImageCard>
          <Image src={Rosenquarz} alt="Stones" />
        </ImageCard>
        <HeadlineCard>Healing Stones</HeadlineCard>
        <CardDescription>
          Rose quartz has been revered for centuries. Symbolically, it stands
          for love and friendship. Which is why it is often cut into the shape
          of a heart and then worn as a necklace. It has an inherent power to
          awaken sensitivity and romance in the mind of the wearer. Likewise, it
          is said to help bring emotional desires to fruition.
        </CardDescription>
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
  border-radius: 20% 20% 20% 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(245, 235, 235, 0.38);
  margin: 20px 50px;
  z-index: 3;
`;

const ImageCard = styled.div`
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const HeadlineCard = styled.h2`
  padding: 1rem;
  text-align: center;
`;

const CardDescription = styled.p`
  padding: 0 1rem;
  text-align: center;
`;
