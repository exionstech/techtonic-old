import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTelegramFill,
} from "react-icons/ri";

const navdata = [
  {
    title: "Home",
    path: "/",
    target: "",
  },
  {
    title: "About",
    path: "/about",
    target: "",
  },
  {
    title: "Opportunities",
    path: "/opportunities",
    target: "",
  },
  {
    title: "Blog",
    path: "/blog",
    target: "_blank",
  },
];
export default navdata;

export const navsocial = [
  {
    title: "GitHub",
    Icon: RiGithubFill,
    path: "https://github.com/Techtonic-Community/site",
  },
  {
    title: "LinkedIn",
    Icon: RiLinkedinBoxFill,
    path: "https://www.linkedin.com/company/techtoniccommunity",
  },
  {
    title: "Telegram",
    Icon: RiTelegramFill,
    path: "https://t.me/techtoniccommunity",
  },
];
