// File name: 301313021_NguyenVanHan_Asg1
// Student Name: Nguyen Van Han
// Student Id: 301313021  
// Date: 5/26/2024

// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Personal Details
export const personalDetails = {
  name: "Han",
  tagline: "I'm a developer",
  img: profile,
  about: `Hi, I'm an developer with more than 2 years of experience. Whatever you need, I can build it.`,
};

// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/h%C3%A2n-nguy%E1%BB%85n-54b24525b/",
  github: "https://github.com/Hansaama",
  twitter: "https://twitter.com/Han52158498",
  instagram: "https://www.instagram.com/",
};

//  Work Experience 
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `NoWhere`,
    Location: "KnoWhere",
    Type: "Full Time",
    Duration: "Sep 2022 - Dec 2023",
  },
  {
    Position: "Internship",
    Company: `Thraxa`,
    Location: "Bengal",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Tisw`,
    Location: "Asgard",
    Type: "Internship",
    Duration: "Sep 2020 - Dec 2020",
  },
];

// Education Details
export const eduDetails = [
  {
    Position: "Linguist",
    Company: "Hanoi University",
    Location: "Vietnam",
    Type: "Full Time",
    Duration: "Jan 2020 - 2023",
  },
  {
    Position: "Software Engineer Technician",
    Company: `Centennial College`,
    Location: "Canada",
    Type: "Full Time",
    Duration: "Aug 2023 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Project Details
export const projectDetails = [
  {
    title: "Project 1",
    image: projectImage1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project 2",
    image: projectImage2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed euismod nisi. Faucibus et molestie ac feugiat sed lectus.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project 3",
    image: projectImage3,
    description: `Dolor sit amet consectetur adipiscing. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Justo laoreet sit amet cursus sit amet dictum. Dui sapien eget mi proin sed libero enim sed faucibus.Ut sem viverra aliquet eget sit.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Contact Details
export const contactDetails = {
  email: "nguyenhanfs@gmail.com",
  phone: "+1 437 460 7114",
};
