import React from "react";
import styled from "styled-components";
import { BtnRounded } from "../Btns/Btns";
const Form = () => {
  return (
    <Wrapper>
      <h2>Book Appoinement</h2>
      <form>
        <label htmlFor="Name">Name*</label>
        <input type="text" name="Name" />

        <label htmlFor="Email">Email*</label>
        <input type="email" name="Email" />

        <label htmlFor="Departement">Departement*</label>
        <select name="Departement" id="Departement">
          <option disabled selected>
            Please Select
          </option>
          <option value="">Agadir</option>
          <option value="">Casablanca</option>
          <option value="">Tanger</option>
        </select>

        <label htmlFor="Time">Time*</label>
        <select name="Time" id="Time">
          <option value="" selected>
            4:00 Available
          </option>
          <option value="">7:00 Available</option>
          <option value="">9:00 Available</option>
        </select>

        <BtnRounded bgClr="var(--primaryClr)" Clr="white">
          Book Appoinement
        </BtnRounded>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-radius: 10px;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  form {
    a {
      width: 100%;
      margin-top: 2rem;
      text-align: center;
      padding: 1rem 0rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 2rem 0rem;
    input,
    label,
    select {
      width: 100%;
    }
    label {
      padding: 1rem 0rem;
    }
    input,
    select {
      border: 1px solid grey;
      outline: none;
      border-radius: 10px;
      background-color: #f9f9f9;
      font-size: 1.2rem;
      padding: 0.4rem 0.4rem;
    }
  }
`;
export default Form;
