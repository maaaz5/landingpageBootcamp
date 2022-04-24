import React from "react";
import styled from "styled-components";

const TeamCards = (props) => {
  return (
    <Card>
      <div>
        <img src={props.image} alt="pfp" />
      </div>
      <div className="text">
        <h5>{props.name}</h5>
        <h6>{props.job}</h6>
        {props.social}
      </div>
    </Card>
  );
};
const Card = styled.div`
  .text {
    margin-top: -5px;
    border: 1px solid #eeeeee;
    padding: 1.4rem 0rem;
  }
  text-align: center;
  img {
    width: 100%;
  }
  h5 {
    color: var(--textClor1);
    font-weight: 700;
    font-size: 1.6rem;
  }
  h6 {
    color: var(--textClor2);
    font-weight: 600;
    font-size: 1.4rem;
    padding: 0.8rem 0rem;
  }
  .Social {
    color: var(--textClor1);
  }
`;
export default TeamCards;
