import React from "react";
import styled from "styled-components";
import { BtnRounded } from "../component/Btns/Btns";
import { Container } from "../component/globalstyles/global";
const Agency = () => {
  return (
    <Agence>
      <Container>
        <Wrapper>
          <Text>
            <h2>Consulting Agency For Your Business</h2>
            <p>the quick fox jumps over the lazy dog</p>
          </Text>
          <BtnRounded bgClr="var(--primaryClr)" Clr="white">
            Contact Us
          </BtnRounded>
        </Wrapper>
      </Container>
    </Agence>
  );
};
const Agence = styled.div`
  padding: 4rem 0rem;
`;
const Text = styled.div`
  h2 {
    color: var(--textClor1);
    padding-bottom: 0.4rem;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  p {
    color: var(--textClor2);
    font-size: 1.4rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & {
      a {
        margin-top: 2rem;
        width: 100%;
      }
    }
  }
  a {
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export default Agency;
