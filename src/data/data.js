import PeopleIcon from "@mui/icons-material/People";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import img1 from "./../images/profilepictures/img1.png";
import img2 from "./../images/profilepictures/img2.png";
import img3 from "./../images/profilepictures/img3.png";
import image1 from "./../images/Team/img1.png";
import image2 from "./../images/Team/img2.png";
import image3 from "./../images/Team/img3.png";
export const TeamData = [
  {
    image: image1,
    name: "Avie Beaton",
    job: "CO Founder",
    SocialIcons: (
      <div className="Social">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
      </div>
    ),
  },
  {
    image: image2,
    name: "Ben Jonson",
    job: "Consultant",
    SocialIcons: (
      <div className="Social">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
      </div>
    ),
  },
  {
    image: image3,
    name: "Ashley Fletcher",
    job: "CEO",
    SocialIcons: (
      <div className="Social">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon />
      </div>
    ),
  },
];
export const IndustryData = [
  {
    icon: <PeopleIcon />,
    title: "Buisness & Finance",
    list: [
      "- The best product start with Figma",
      "- Desugb with real data",
      "- Lighting fast prototyping",
      "- Fastest way to organize",
      "- Work at the speed of thought.",
    ],
    link: "Learn More",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Travel & Aviation",
    list: [
      "- The best product start with Figma",
      "- Desugb with real data",
      "- Lighting fast prototyping",
      "- Fastest way to organize",
      "- Work at the speed of thought.",
    ],
    link: "Learn More",
  },
  {
    icon: <NewspaperIcon />,
    title: "Financial Services",
    list: [
      "- The best product start with Figma",
      "- Desugb with real data",
      "- Lighting fast prototyping",
      "- Fastest way to organize",
      "- Work at the speed of thought.",
    ],
    link: "Learn More",
  },
];

export const ClientsData = [
  {
    stars: (
      <div className="stars">
        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon />
      </div>
    ),
    desc: "Slate helps you see how many more days you need to work to reach your financial goal",
    image: img1,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    stars: (
      <div className="stars">
        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon />
      </div>
    ),
    desc: "Slate helps you see how many more days you need to work to reach your financial goal",
    image: img2,
    name: "Regina Miles",
    job: "Designer",
  },
  {
    stars: (
      <div className="stars">
        <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarBorderIcon />
      </div>
    ),
    desc: "Slate helps you see how many more days you need to work to reach your financial goal",
    image: img3,
    name: "Regina Miles",
    job: "Designer",
  },
];

export const NavData = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Buisness Marketing",
      "User Analytics",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Features",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];
