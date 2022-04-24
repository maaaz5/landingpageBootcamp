import React from "react";
import styled from "styled-components";
import { Container } from "../component/globalstyles/global";
import SocialIcons from "../component/socialIcons/SocialIcons";
import { NavData } from "../data/data";
import { BtnRounded } from "../component/Btns/Btns";
const FooterSection = () => {
  return (
    <Footer>
      <Container>
        <Wrapper>
          <Header>
            <h3>Publist</h3>
            <SocialIcons />
          </Header>
          <NavBar>
            {NavData.map((item) => (
              <ul>
                <li className="title">{item.title}</li>
                {item.links.map((items) => (
                  <li>{items}</li>
                ))}
              </ul>
            ))}
            <ul>
              <li className="title">Get in Touch</li>
              <li className="Input">
                <input type="email" placeholder="Your Email" />
                <BtnRounded bgClr="var(--primaryClr)" Clr="white">
                  Subscribe
                </BtnRounded>
              </li>
            </ul>
          </NavBar>
        </Wrapper>
      </Container>
    </Footer>
  );
};
const Footer = styled.footer`
  background-color: var(--textClor1);
  padding: 5rem 0rem;
`;
const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
  border-bottom: 1px solid #364067;
  h3 {
    color: white;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
  @media screen and (max-width: 300px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    & {
      div {
        svg {
          margin: 1rem 1rem 0 0;
        }
      }
    }
  }
`;
const Wrapper = styled.div``;
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    display: flex;
    gap: 2rem;
  }
  ul {
    list-style: none;
    .title {
      color: white;
      font-weight: 700;
      font-size: 1.6rem;
      padding: 2rem 0rem;
    }
    li {
      color: var(--mutedClr);
      font-weight: 600;
      font-size: 1.4rem;
      padding: 0.6rem 0rem;
    }
    .Input {
      display: flex;
      width: 100%;
      @media screen and (max-width: 250px) {
        display: flex;
        flex-direction: column;

        input {
          width: 100%;
          border-radius: 0.5rem;
        }
        a {
          width: 100%;
          border-radius: 0.5rem;
        }
      }
      input {
        width: 100%;
        outline: none;
        border: 1px solid #e6e6e6;
        padding: 0.8rem 1.5rem;
        border-radius: 5px 0px 0px 5px;
        font-size: 1.4rem;
        @media screen and (max-width: 250px) {
          width: 100%;
          border-radius: 0.5rem;
        }
      }
      a {
        border: 1px solid #e6e6e6;
        border-radius: 0px 5px 5px 0px;
        @media screen and (max-width: 250px) {
          margin-top: 1rem;
          width: 100%;
          border-radius: 0.5rem;
          text-align: center;
        }
      }
    }
  }
`;
export default FooterSection;
