import React from "react";
import styled from "styled-components";
const HeadnSub = (props) => {
  return (
    <Wrapper>
      <h2>{props.title}</h2>
      <p>
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-bottom: 2rem;
  text-align: center;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--textClor1);
    padding: 1rem 0rem;
  }
  p {
    font-size: 01rem;
    color: var(--textClor2);
    font-weight: medium;
  }
`;

export default HeadnSub;
