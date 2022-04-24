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
  padding: 1rem 0rem;
`;
const Text = styled.div`
  h2 {
    color: var(--textClor1);
    padding-bottom: 0.4rem;
  }
  p {
    color: var(--textClor2);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export default Agency;
