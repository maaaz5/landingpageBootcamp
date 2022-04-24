import React from "react";
import styled from "styled-components";
import { BtnRounded } from "../Btns/Btns";
const Heading = () => {
  return (
    <HeadingCol>
      <h1>Business Advisory Services Provider</h1>
      <p>We know how large objects will act, but things on a small scale.</p>
      <Btns>
        <BtnRounded
          radius="30px"
          bgClr="var(--primaryClr)"
          Clr="var(--lightClr)"
        >
          Get Quote Now
        </BtnRounded>
        <BtnRounded
          radius="30px"
          Clr="var(--secondaryClr1)"
          outLine="var(--secondaryClr1)"
        >
          Learn More
        </BtnRounded>
      </Btns>
    </HeadingCol>
  );
};
const HeadingCol = styled.div`
  width: 60%;
  @media screen and (max-width: 650px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  h1 {
    color: var(--textClor1);
    font-size: 5.8rem;
  }
  p {
    padding: 2rem 0rem;
    color: var(--textClor2);
    font-size: 2rem;
    font-weight: 500;
  }
`;
const Btns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    margin-right: 1rem;
    @media screen and (max-width: 650px) {
      margin: 1rem 0rem 0rem 0rem;
    }
  }
`;
export default Heading;
