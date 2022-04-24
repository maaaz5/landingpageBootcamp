import React from "react";
import styled from "styled-components";
import HeadnSub from "../component/HeadandSubHead/HeadnSub";
import { ClientsData } from "../data/data";
import ReviewCard from "../component/ReviewCard/ReviewCard";
import { Container } from "../component/globalstyles/global";
const ClientSection = () => {
  return (
    <Clients>
      <Container>
        <HeadnSub title="What Clients Say" />
        <CardsWrapper>
          {ClientsData.map((item) => (
            <ReviewCard
              stars={item.stars}
              desc={item.desc}
              image={item.image}
              name={item.name}
              job={item.job}
            />
          ))}
        </CardsWrapper>
      </Container>
    </Clients>
  );
};
const Clients = styled.div`
  padding: 4rem 0rem;
  background-color: #f3f3f3;
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4rem 0rem;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export default ClientSection;
