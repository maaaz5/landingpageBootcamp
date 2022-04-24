import React from "react";
import styled from "styled-components";
import HeadnSub from "../component/HeadandSubHead/HeadnSub";
import { Container } from "../component/globalstyles/global";
import bgvid from "./../images/video-img.png";
const WhoWeAreSection = () => {
  return (
    <Who>
      <Container>
        <HeadnSub title="Who We Are" />
        <ImgWrapper>
          <img src={bgvid} />
        </ImgWrapper>
      </Container>
    </Who>
  );
};
const Who = styled.div`
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
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    z-index: 1;
  }
`;
export default WhoWeAreSection;
