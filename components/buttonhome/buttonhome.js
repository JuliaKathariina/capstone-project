import Link from "next/link";
import styled from "styled-components";

export default function Buttonhome() {
  return (
    <>
      <Link href="/Card">
        <Styleink>Card !</Styleink>
      </Link>

      <Link href="/mantra">
        <Stylelink>Card !</Stylelink>
      </Link>
    </>
  );
}

const Styleink = styled.a`
  position: absolute;
  bottom: 100px;
  left: 40px;
  color: white;
`;
const Stylelink = styled.a`
  position: absolute;
  bottom: 100px;
  right: 40px;
  color: white;
`;
