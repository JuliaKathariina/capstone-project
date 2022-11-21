import Link from "next/link";
import styled from "styled-components";

export default function Buttonhome() {
  return (
    <>
      <Link href="/Card">
        <StyleLeft> Show me stones...</StyleLeft>
      </Link>

      <Link href="/mantra">
        <StyleRight>Show me mantra...</StyleRight>
      </Link>
    </>
  );
}

const StyleLeft = styled.a`
  position: fixed;
  top: 275px;
  left: 40px;
  text-decoration: underline double black;
  cursor: pointer;
`;
const StyleRight = styled.a`
  position: fixed;
  bottom: 170px;
  left: 40px;
  text-decoration: underline double black;
  cursor: pointer;
`;
