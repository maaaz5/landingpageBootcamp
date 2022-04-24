import React from "react";
import styled from "styled-components";
import { Container } from "../component/globalstyles/global";
import { BtnRounded } from "../component/Btns/Btns";
import bg from "./../images/appbackground.svg";
const MakeAppoinementSection = () => {
  return (
    <Appoi>
      <Container>
        <Wrapper>
          <TextWrapper>
            <h4>Contact Us</h4>
            <h1>Make an Appointment</h1>
          </TextWrapper>
          <form>
            <div className="fistLine">
              <input type="text" name="Name" placeholder="Full Name" />

              <input
                type="email"
                name="Email"
                placeholder="exemple@exemple.com"
              />
            </div>

            <div className="secondLine">
              <select name="Departement" id="Departement">
                <option disabled selected>
                  Please Select
                </option>
                <option value="">Agadir</option>
                <option value="">Casablanca</option>
                <option value="">Tanger</option>
              </select>

              <select name="Time" id="Time">
                <option value="" selected>
                  4:00 Available
                </option>
                <option value="">7:00 Available</option>
                <option value="">9:00 Available</option>
              </select>
            </div>
            <textarea name="msg" id="msg" placeholder="Message"></textarea>
          </form>
          <BtnRounded bgClr="var(--primaryClr)" Clr="white">
            Book Appoinement
          </BtnRounded>
        </Wrapper>
      </Container>
    </Appoi>
  );
};
const Appoi = styled.div`
  padding: 7rem 0rem;
  background: url(${bg});
  background-position: top;
  background-size: 100%;
  background-repeat: no-repeat;

  form {
    width: 50%;
    textarea {
      resize: none;
      width: 100%;
      height: 140px;
      border: 1px solid var(--mutedClr);
      outline: none;
      border-radius: 4px;
      padding: 0.6rem 0.8rem;
      margin-bottom: 1rem;
    }
    div {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      input + input,
      select + select {
        padding-right: 2rem;
      }
      input,
      select {
        width: 50%;
        border: 1px solid var(--mutedClr);
        outline: none;
        border-radius: 4px;
        padding: 0.6rem 0.8rem;
      }
    }
  }
`;
const Wrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TextWrapper = styled.div`
  color: var(--textClor1);
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
  }
`;
export default MakeAppoinementSection;
