import React from "react";
import styled from "styled-components";
const Card = (props) => {
  return (
    <Wrapper>
      <CardHeader>
        {props.icon}
        <h4>{props.title}</h4>
      </CardHeader>
      <CardBody>
        <ul>{props.listItem}</ul>
        <a href="#">{props.link}</a>
      </CardBody>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: left;

  padding: 1rem 0rem;
`;
const CardHeader = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 3rem;
  background-color: #d9edff;
  margin-bottom: -1rem;
  h4 {
    margin-left: 1rem;
    color: var(--textClor1);
  }
  svg {
    background-color: white;
    padding: 1rem;
    font-size: 4rem;
    border-radius: 50%;
    color: var(--primaryClr);
  }
`;
const CardBody = styled.div`
  background-color: white;
  border: 2px solid #d9edff;
  border-radius: 10px;
  padding: 2rem 3rem;
  font-weight: 600;
  color: var(--textClor2);
  ul {
    list-style: none;
    margin-bottom: 1rem;
    li {
      padding: 0.5rem 0rem;
    }
  }
  a {
    color: var(--primaryClr);
  }
`;
export default Card;
