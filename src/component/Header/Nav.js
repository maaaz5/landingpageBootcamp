import React from "react";
import styled from "styled-components";
const Nav = (props) => {
  return (
    <Bar className={props.name ? "active" : ""}>
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
    </Bar>
  );
};
const Bar = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  transition: all 0.1s ease-in-out;
  @media screen and (max-width: 500px) {
    transform: translateY(-500px);
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f6f6;
    width: 100%;
    z-index: 3;
    top: 5rem;
    left: 0;
    text-align: center;
    position: absolute;
  }

  li {
    padding: 0rem 1rem;
    @media screen and (max-width: 500px) {
      padding: 4rem 0rem;
    }
    a {
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--textClor2);
    }
  }
`;
export default Nav;
