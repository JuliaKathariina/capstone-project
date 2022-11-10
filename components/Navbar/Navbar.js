import Link from "next/link";
import HeartIcon from "../../public/img/hearticon.svg";
import HeartMantra from "../../public/img/heartmantra.png";
import Image from "next/image";
import HomeIcon from "../../public/img/homeicon.svg";
import styled from "styled-components";
import KristallIcon from "../../public/img/kristalicon.svg";
import MoonIcon from "../../public/img/moonicon.svg";

function NavBar() {
  return (
    <NavBarStyle>
      <Link href="/Favocard">
        <IconStyle>
          <Image src={HeartIcon} alt="icon" width="50px" height="50px" />
        </IconStyle>
      </Link>
      <Link href="/Card">
        <IconStyle>
          <Image src={KristallIcon} alt="icon" width="50px" height="50px" />
        </IconStyle>
      </Link>
      <Link href="/">
        <IconStyle>
          <Image src={HomeIcon} alt="icon" width="50px" height="50px" />
        </IconStyle>
      </Link>
      <Link href="/mantra">
        <IconStyle>
          <Image src={MoonIcon} alt="icon" width="50px" height="50px" />
        </IconStyle>
      </Link>
      <Link href="/FavoMantra">
        <IconStyle>
          <Image src={HeartMantra} alt="icon" width="50px" height="50px" />
        </IconStyle>
      </Link>
    </NavBarStyle>
  );
}

export default NavBar;

const IconStyle = styled.a`
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const NavBarStyle = styled.div`
  width: 100%;
  left: 0px;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  border: none;
  background-color: rgba(245, 235, 235, 0.38);
  z-index: 500;
`;
