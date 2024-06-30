import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Front End Developer with a knack for crafting robust and scalable web applications. With 2 years of experience, I have honed my skills in front-end technologies like Javascript and React, as well as libraries like TailwindCss, Bootstrap, Framer. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EXPERIENCES = [
  {
    year: "2022 February - 2023 December",
    role: "Frontend Developer",
    company: "Persistent Systems",
    description: `Designed and developed user interfaces for web applications using React and TailwindCss. Worked closely with Designers to develop Pixel perfect UI designs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "React,js", "TailwindCss"],
  }
];

export const PROJECTS = [
  {
    title: "Admin Dashboard",
    image: project1,
    description:
      "A Admin Dashboard with Responsive Sidebar using react Pro Sidebar library, charts created using Nivo charts library and with Dark n Light Mode ",
    technologies: [ "React.js", "Material UI","HTML", "CSS"],
  },
  {
    title: "Spotify-clone",
    image: project2,
    description:
      "A functional spotify clone web application fully responsive with listening to songs functionality. ",
    technologies: ["HTML", "CSS", "React.js", "TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "TailwindCss"],
  },
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["HTML", "CSS", "React.js", "Shopify"],
  // },
  {
    title: "News Blog",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana ",
  phoneNo: "+91 7989014440 ",
  email: "anwesh19021999@gmail.com",
};
