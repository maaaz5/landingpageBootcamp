import React from "react";
import styled from "styled-components";
import HeadnSub from "../component/HeadandSubHead/HeadnSub";
import Card from "../component/Cards/Card";
import { IndustryData } from "../data/data";
import { Container } from "../component/globalstyles/global";

const IndustrySection = () => {
  return (
    <Industry>
      <Container>
        <HeadnSub title="Industry" />
        <CardsWrapper>
          {IndustryData.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              link={item.link}
              listItem={item.list.map((litem) => {
                return <li>{litem}</li>;
              })}
            />
          ))}
        </CardsWrapper>
      </Container>
    </Industry>
  );
};
const Industry = styled.div`
  padding: 6rem 0rem;
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
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;
export default IndustrySection;
