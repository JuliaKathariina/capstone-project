import Link from "next/link";
import styled from "styled-components";

export default function Buttonhome() {
  return (
    <>
      <Link href="/Card">
        <StyleLeft>Card !</StyleLeft>
      </Link>

      <Link href="/mantra">
        <StyleRight>Card !</StyleRight>
      </Link>
    </>
  );
}

const StyleLeft = styled.a`
  position: absolute;
  bottom: 100px;
  left: 40px;
  color: white;
`;
const StyleRight = styled.a`
  position: absolute;
  bottom: 100px;
  right: 40px;
  color: white;
`;
