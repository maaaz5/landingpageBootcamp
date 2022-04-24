import React from "react";
import styled from "styled-components";
const ReviewCard = (props) => {
  return (
    <Card>
      {props.stars}
      <p>{props.desc}</p>
      <Profile>
        <img src={props.image} alt="profile picture" />
        <div>
          <h5>{props.name}</h5>
          <h6>{props.job}</h6>
        </div>
      </Profile>
    </Card>
  );
};
const Card = styled.div`
  border-radius: 6px;
  background-color: #ffffff;
  padding: 1rem 2rem;
  text-align: left;
  border: 1px solid #dedede;
  font-size: 14px;
  .stars {
    color: #f3cd03;
    font-size: 0.1rem;
  }
  p {
    padding: 1rem 0rem;
    color: var(--textClor2);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Profile = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-left: 2rem;
  }
  h5 {
    color: var(--primaryClr);
    font-size: 14px;
  }
  h6 {
    padding: 0.5rem 0rem;
    color: var(--textClor1);
    font-size: 14px;
  }
`;
export default ReviewCard;
