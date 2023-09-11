//  icons
import { FiMail, FiMapPin } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";

// navigation
export const navigation = [
  {
    name: "How it works",
    href: "howitworks",
  },
  {
    name: "Services",
    href: "services",
    icon: <FiChevronDown />,
  },
  {
    name: "Templates",
    href: "template",
    icon: <FiChevronDown />,
  },
  {
    name: "Pricing",
    href: "pricing",
  },
];

// social
export const social = [
  {
    icon: <FaFacebook />,
    href: "",
  },
  {
    icon: <FaTwitter />,
    href: "",
  },
  {
    icon: <BiLogoLinkedin />,
    href: "",
  },
];

// services
export const services = [
  {
    icon: <BiPlus />,
    name: "What is an AI Resume Builder?",
  },
  {
    icon: <BiPlus />,
    name: "How does the AI Resume Builder work?",
  },
  {
    icon: <BiPlus />,
    name: "Is my data safe and secure?",
  },
  {
    icon: <BiPlus />,
    name: "Can I edit the generated resume?",
  },
  {
    icon: <BiPlus />,
    name: "Can I use the AI Resume Builder for multiple job applications?",
  },
  {
    icon: <BiPlus />,
    name: "Is there a cost to use the AI Resume Builder?",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
