import styled from "styled-components";

export const BtnRounded = styled.a`
  font-weight: bold;
  background-color: ${(props) =>
    props.bgClr ? `${props.bgClr}` : "transparent"};
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  color: ${(props) => `${props.Clr}`};
  border: ${(props) =>
    props.outLine ? `1px solid ${props.outLine}` : "transparent"};
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-size: 0.8rem;
`;
