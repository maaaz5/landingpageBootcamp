import React from "react";
import styled from "styled-components";
import HeadnSub from "../component/HeadandSubHead/HeadnSub";
import { Container } from "../component/globalstyles/global";
import { TeamData } from "../data/data";
import TeamCards from "../component/TeamCards/TeamCards";

const OurTeam = () => {
  return (
    <Team>
      <Container>
        <HeadnSub title="Meet Our Team" />
        <CardsWrapper>
          {TeamData.map((item) => (
            <TeamCards
              image={item.image}
              name={item.name}
              job={item.job}
              social={item.SocialIcons}
            />
          ))}
        </CardsWrapper>
      </Container>
    </Team>
  );
};
const Team = styled.div`
  padding: 4rem 0rem;
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0rem;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;
export default OurTeam;
