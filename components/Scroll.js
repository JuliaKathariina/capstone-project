import styled from "styled-components";
import { useEffect } from "react";
import Compass from "../public/img/compass.png";
import Image from "next/image";

export default function ScrollButton() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <StyleImage>
        <Image
          src={Compass}
          alt="kompass"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        ></Image>
      </StyleImage>
    </>
  );
}

const StyleImage = styled.div`
  position: fixed;
  padding: 1rem 1rem;
  font-size: 10px;
  bottom: 55px;
  left: 3px;
  background-color: rgba(245, 235, 235, 0.38);
  border-radius: 50% 50% 50% 50%;
  color: black;
  text-align: center;
  cursor: pointer;
`;
