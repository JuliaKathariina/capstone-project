import React from "react";
import styled from "styled-components";

function ListEntry({ id, mantra, category, handleRemove }) {
  return (
    <>
      <Card>
        <Headlineh3> Mantra </Headlineh3>
        <Output>{mantra} </Output>
        <Output>{category} </Output>
        <Button type="button" onClick={() => handleRemove(id)}>
          X
        </Button>
      </Card>
    </>
  );
}
export default ListEntry;
const Headlineh3 = styled.h3`
  font-family: "Raleway", sans-serif;
  text-align: center;
  z-index: 600;
`;
const Card = styled.section`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  position: relative;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 15px 15px 15px 15px;
`;

const Output = styled.p`
  width: 100%;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(2, 5, 49, 0.21);
`;

const Button = styled.button`
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 10px;
  color: #ddd;
  font-family: "Noto Sans", sans-serif;
  color: #a18ba7;
  cursor: pointer;
`;
