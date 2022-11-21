import { useContext } from "react";
import styled from "styled-components";
import TextForm from "../../components/textForm";
import { CardContext } from "../../context/cardContext";
import Navbar from "../../components/Navbar/Navbar.js";
import ScrollButton from "../../components/Scroll";

function TextPage() {
  const { mantraField, setMantraField } = useContext(CardContext);
  function appendListEntry(mantra, category) {
    setMantraField((listEntry) => [
      ...listEntry,
      {
        mantra,
        category,

        id: Math.random().toString(36).substring(2),
      },
    ]);
  }
  return (
    <ContainerMantra>
      <BackgroundImage />
      <Headline> MANTRAS </Headline>
      <Container>
        <Headlineh3>WAS SOLL MIR DAS BRINGEN?</Headlineh3>
        Kurze Sätze, die Großes bewirken – Affirmationen und Mantras sind
        besonders in Meditation und Yoga sowie in spirituellen Lehren zu finden.
        Aber auch, wenn du sonst nicht so viel mit diesen Bereichen zu tun hast,
        kannst du Mantras und Affirmationen für dich nutzen, um dir eine
        positive Grundhaltung anzueignen und dein Mindset zu stärken.
      </Container>
      <Container>
        <TextForm appendListEntry={appendListEntry} />
      </Container>
      <Container>
        <Headlineh3>
          Hier einige Beispiele für Satzfragmente, die du nutzen kannst:
        </Headlineh3>
        <ul>
          <li>Ich bin… </li>
          <li> Ich darf… </li>
          <li>Es ist gut für mich… </li>
          <li>Ich genieße es...</li>
          <li> Ich freue mich darauf... </li>
          <li>Ich kann mir erlauben …</li>
          <li> … jeden Tag mehr und mehr </li>
          <li> … immer mehr und mehr</li>
        </ul>
      </Container>
      <Navbar />
      <ScrollButton />
    </ContainerMantra>
  );
}
export default TextPage;
const Headlineh3 = styled.h3`
  font-family: "Raleway", sans-serif;
  text-align: center;
  z-index: 600;
`;
const ContainerMantra = styled.div`
  margin-bottom: 6rem;
`;
const Headline = styled.h1`
  font-family: "Raleway", sans-serif;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  text-align: center;
  z-index: 600;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
const Container = styled.div`
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  text-align: center;
  padding: 10px;
  margin: 20px 50px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  cursor: default;
`;
const Form = styled.form`
  display: flex;
  padding: 10px;
  margin: 10px;
`;
