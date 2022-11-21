import styled from "styled-components";
import React, { useContext } from "react";
import { CardContext } from "../../context/cardContext";
import Scroll from "../../components/Scroll.js";
import ListEntry from "../../components/listEntry";
import NavBar from "../../components/Navbar/Navbar";

function MantraList() {
  const { mantraField, setMantraField } = useContext(CardContext);

  function handleRemove(id) {
    const newList = mantraField.filter((listEntry) => listEntry.id !== id);

    setMantraField(newList);
  }

  return (
    <>
      <BackgroundImage />
      <Headline> Deine Mantras und Affirmationen</Headline>
      <Container>
        <List>
          {mantraField?.map((listEntry) => (
            <ListEntry
              key={listEntry.id}
              id={listEntry.id}
              mantra={listEntry.mantra}
              category={listEntry.category}
              handleRemove={handleRemove}
            ></ListEntry>
          ))}
        </List>

        <NavBar />
        <Scroll />
      </Container>
    </>
  );
}
export default MantraList;

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
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px;
  margin: 10px;
`;
const Headline = styled.h1`
  font-family: "Raleway", sans-serif;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  text-align: center;
  z-index: 600;
`;

const List = styled.ul`
  padding: 10px;
  margin: 10px;
`;

const Button = styled.button`
  z-index: 2;
`;
