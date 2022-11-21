import styled from "styled-components";

export default function Button({ children, type = "button", ...props }) {
  return (
    <ButtonSave type={type} {...props}>
      {children}
    </ButtonSave>
  );
}

const ButtonSave = styled.button`
  background: white;
  font-size: 15px;
  text-align: center;
  border: none;
  padding: 5;
  margin: 10px;
  text-decoration: underline;
  cursor: pointer;
  outline: black;

  &:hover {
    background: black;
    color: white;
    transition: 0.1s;
  }
`;
