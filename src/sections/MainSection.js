import React from "react";
import styled from "styled-components";
import Header from "../component/Header/Header";
import Heading from "../component/Heading/Heading";
import Form from "../component/Form/Form";
import bg from "./../images/mainbg.png";
import { Container } from "../component/globalstyles/global";
const MainSection = () => {
  return (
    <Mainsection>
      <Container>
        <Header />
        <Content>
          <Heading />
          <Form />
        </Content>
      </Container>
    </Mainsection>
  );
};
const Mainsection = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  padding: 6rem 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default MainSection;
