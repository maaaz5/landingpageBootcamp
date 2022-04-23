import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <Bar>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </Bar>
  );
};
const Bar = styled.div`
  margin-left: auto;
  width: 30%;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
`;
export default Nav;
