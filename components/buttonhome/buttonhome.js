import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import MoonIcon from "../../public/img/moonicon.svg";
import KristallIcon from "../../public/img/kristalicon.svg";

export default function Buttonhome() {
  return (
    <>
      <Link href="/Card">
        <StyleLeft>
          <Image src={KristallIcon} alt="icon" width="50px" height="50px" />
        </StyleLeft>
      </Link>

      <Link href="/mantra">
        <StyleRight>
          <Image src={MoonIcon} alt="icon" width="50px" height="50px" />
        </StyleRight>
      </Link>
    </>
  );
}

const StyleLeft = styled.a`
  position: absolute;
  bottom: 50px;
  left: 40px;
  color: white;
  cursor: pointer;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 13% 16% 13% 16%;
`;
const StyleRight = styled.a`
  position: absolute;
  bottom: 50px;
  right: 40px;
  color: white;
  cursor: pointer;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 13% 16% 13% 16%;
`;
