import React from "react";
import styled from "styled-components";
import HeadnSub from "../component/HeadandSubHead/HeadnSub";
import { Container } from "../component/globalstyles/global";
import bgvid from "./../images/video-img.png";
const WhoWeAreSection = () => {
  return (
    <Who>
      <Container>
        <div className="wrapper">
          <HeadnSub title="Who We Are" />
          <ImgWrapper>
            <img src={bgvid} />
          </ImgWrapper>
        </div>
      </Container>
    </Who>
  );
};
const Who = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  padding: 6rem 0rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 0;
    left: 0%;
    background-color: var(--secondaryClr2);
  }
  div {
    .wrapper {
    }
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  overflow: hidden;

  img {
    width: 100%;
    z-index: 1;
    @media screen and (max-width: 600px) {
      width: 230%;
    }
  }
`;
export default WhoWeAreSection;
