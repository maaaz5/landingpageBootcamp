import React from "react";
import Nav from "./Nav";
import { Container } from "../globalstyles/global";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
const Header = () => {
  return (
    <Headers>
      <Wrapper>
        <h2>Publist</h2>
        <Nav />
        <Icons>
          <SearchIcon />
          <ShoppingCartIcon />
        </Icons>
      </Wrapper>
    </Headers>
  );
};
const Headers = styled.div`
  padding: 1rem 0rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 1rem;
  }
`;
export default Header;
