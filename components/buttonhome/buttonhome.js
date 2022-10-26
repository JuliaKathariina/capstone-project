import Link from "next/link";
import styled from "styled-components";

export default function Buttonhome() {
  return (
    <>
      <Styleink>
        <Link href="/Card">Card !</Link>
      </Styleink>
      <Stylelink>
        <Link href="/Mantra">Mantra!</Link>
      </Stylelink>
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
