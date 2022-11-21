import React from "react";
import styled from "styled-components";

function ListEntry({ id, mantra, category, handleRemove }) {
  return (
    <Card>
      <Output>{mantra} </Output>
      <Devicer />
      <Devicer1>
        <Outputcategory>#{category} </Outputcategory>
      </Devicer1>

      <Button type="button" onClick={() => handleRemove(id)}>
        Delete
      </Button>
    </Card>
  );
}
export default ListEntry;
const Devicer = styled.div`
  display: grid;
  height: 2px;
  background-color: #4b4b4d;
  margin: auto 0;
`;
const Devicer1 = styled.div`
  display: grid;
  margin-left: 8em;
  width: 2px;
  background-color: #4b4b4d;
`;

const Card = styled.section`
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  position: relative;
  background-color: white;
  border-radius: 15px 15px 15px 15px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const Output = styled.p`
  width: 100%;
  font-size: 20px;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  text-align: center;
`;
const Outputcategory = styled.p`
  width: 200%;
  background-color: beige;
  font-size: 15px;
  word-break: break-all;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin: 10px;
  border-radius: 15px 15px 15px 15px;
  text-decoration: underline solid black;
`;
const Button = styled.button`
  z-index: 2;
  background-color: white;
  font-size: 15px;
  position: absolute;
  left: 35px;
  bottom: 28px;
  border: none;
  outline: none;
  text-decoration: underline solid black;
  cursor: pointer;
`;
