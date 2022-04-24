import React from "react";
import styled from "styled-components";
const ReviewCard = (props) => {
  return (
    <Card>
      {props.stars}
      <p>{props.desc}</p>
      <Profile>
        <div className="img">
          <img src={props.image} alt="profile picture" />
        </div>

        <div>
          <h5>{props.name}</h5>
          <h6>{props.job}</h6>
        </div>
      </Profile>
    </Card>
  );
};
const Card = styled.div`
  border-radius: 0.6rem;
  background-color: #ffffff;
  padding: 2rem 4rem;
  text-align: left;
  border: 1px solid #dedede;
  font-size: 0.8rem;
  .stars {
    color: #f3cd03;
    display: flex;
    svg {
      font-size: 2rem;
    }
  }
  p {
    padding: 1rem 0rem;
    color: var(--textClor2);
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }
  @media screen and (max-width: 800px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 632px) {
    flex-basis: 100%;
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
  .img {
    margin: 0;
    img {
      width: 100%;
    }
  }
  h5 {
    color: var(--primaryClr);
    font-size: 1.4rem;
    font-weight: 600;
  }
  h6 {
    padding: 0.5rem 0rem;
    color: var(--textClor1);
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
export default ReviewCard;
