import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const SocialIcons = () => {
  return (
    <div className="icons">
      <FacebookIcon className="fb" />
      <InstagramIcon className="ig" />
      <TwitterIcon className="tw" />
      <YouTubeIcon className="yt" />
    </div>
  );
};

export default SocialIcons;
