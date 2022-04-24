import styled from "styled-components";

export const BtnRounded = styled.a`
  font-weight: bold;
  background-color: ${(props) =>
    props.bgClr ? `${props.bgClr}` : "transparent"};
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  color: ${(props) => `${props.Clr}`};
  border: ${(props) =>
    props.outLine ? `1px solid ${props.outLine}` : "transparent"};
  padding: 1rem 1.8rem;
  cursor: pointer;
  font-size: 1.4rem;
`;
