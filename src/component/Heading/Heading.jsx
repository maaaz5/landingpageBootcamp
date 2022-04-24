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
  h1 {
    color: var(--textClor1);
    font-size: 4rem;
  }
  p {
    padding: 2rem 0rem;
    color: var(--textClor2);
    font-size: 1.3rem;
  }
`;
const Btns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-right: 1rem;
  }
`;
export default Heading;
