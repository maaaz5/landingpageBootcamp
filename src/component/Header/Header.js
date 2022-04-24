import React, { useState } from "react";
import Nav from "./Nav";
import { Container } from "../globalstyles/global";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [click, setClick] = useState(false);
  function clicked() {
    setClick(!click);
  }
  return (
    <Headers onClick={clicked} className={click ? "divider" : ""}>
      <Wrapper>
        <h2>Publist</h2>
        <Nav name={click} />
        <Icons>
          <SearchIcon />
          <ShoppingCartIcon />
          <MenuIcon className="hamb" />
        </Icons>
      </Wrapper>
    </Headers>
  );
};
const Headers = styled.div`
  padding: 1rem 0rem;
  transition: all 0.1s ease-in-out;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2.4rem;
  }
`;
const Icons = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .hamb {
    display: none;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }
  svg {
    margin-left: 1rem;
    font-size: 1.8rem;
  }
`;
export default Header;
