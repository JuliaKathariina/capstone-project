import Link from "next/link";
import styled from "styled-components";

export default function Buttonhome() {
  return (
    <>
      <Link href="/Card">
        <Styleleft>Card !</Styleleft>
      </Link>

      <Link href="/mantra">
        <Styleright>Card !</Styleright>
      </Link>
    </>
  );
}

const Styleleft = styled.a`
  position: absolute;
  bottom: 100px;
  left: 40px;
  color: white;
`;
const Styleright = styled.a`
  position: absolute;
  bottom: 100px;
  right: 40px;
  color: white;
`;
