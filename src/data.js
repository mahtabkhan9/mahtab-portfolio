// Skills Section Logo's
import React from 'react';
import { SiRender, SiJsonwebtokens, SiSocketdotio, SiRazorpay, SiGooglegemini, SiLangchain } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import { AiFillOpenAI } from 'react-icons/ai';
import { FaAws } from 'react-icons/fa';
import { FiShare2, FiImage, FiTerminal, FiCpu, FiBox, FiDatabase, FiMonitor, FiGlobe, FiServer } from 'react-icons/fi';
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import motionLogo from './assets/tech_logo/framer-motion.png';
import phpLogo from './assets/tech_logo/php.png';

// Experience Section Logo's
import creditBucketLogo from './assets/company_logo/creditbucketLogo.jpg';
import grentechLogo from './assets/company_logo/grentechin_logo.jpeg';
import iitPatnaLogo from './assets/company_logo/iitpatna.png';

// Education Section Logo's
import gceLogo from './assets/education_logo/logo.jpg';
import bsebLogo from './assets/education_logo/bseb.jpg';

// Project Section Logo's
import bookswap from './assets/work_logo/bookswap.png';
import eventor from './assets/work_logo/eventor.png';
import renderly from './assets/work_logo/renderly.png';
import restrobook from './assets/work_logo/restrobook.png';


export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Core CS',
    skills: [
      { name: 'DSA', icon: React.createElement(FiCpu, { color: '#8be9fd' }) },
      { name: 'OOP', icon: React.createElement(FiBox, { color: '#ff79c6' }) },
      { name: 'DBMS', icon: React.createElement(FiDatabase, { color: '#50fa7b' }) },
      { name: 'Operating Systems', icon: React.createElement(FiMonitor, { color: '#f1fa8c' }) },
      { name: 'Computer Networks', icon: React.createElement(FiGlobe, { color: '#bd93f9' }) },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux Toolkit', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Motion', logo: motionLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'REST APIs', icon: React.createElement(FiServer, { color: '#61DAFB' }) },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Socket.io', icon: React.createElement(SiSocketdotio, { color: '#FFFFFF' }) },
      { name: 'JWT', icon: React.createElement(SiJsonwebtokens, { color: '#D63AFF' }) },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Gen AI',
    skills: [
      { name: 'OpenAI', icon: React.createElement(AiFillOpenAI, { color: '#10A37F' }) },
      { name: 'Google Gemini', icon: React.createElement(SiGooglegemini, { color: '#8E75FF' }) },
      { name: 'LangChain', icon: React.createElement(SiLangchain, { color: '#12B471' }) },
      { name: 'LangGraph', icon: React.createElement(FiShare2, { color: '#FF8C00' }) },
      { name: 'Prompt Eng.', icon: React.createElement(BsRobot, { color: '#FF6B6B' }) },
      { name: 'Claude Code', icon: React.createElement(FiTerminal, { color: '#D97757' }) },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'AWS', icon: React.createElement(FaAws, { color: '#FF9900' }) },
      { name: 'Render', icon: React.createElement(SiRender, { color: '#46E3B7' }) },
      { name: 'ImageKit', icon: React.createElement(FiImage, { color: '#1E65F3' }) },
      { name: 'Razorpay', icon: React.createElement(SiRazorpay, { color: '#3385FF' }) },
    ],
  },
];

export const experiences = [
  {
    id: 2,
    img: iitPatnaLogo,
    role: "Full Stack Engineer Intern",
    company: "Indian Institute of Technology Patna (Incubation Centre)",
    date: "August 2026 - Present",
    desc: "Developing the Income Profiling Engine with CreditBucket Technologies Pvt. Ltd., incubated at IIT Patna, for borrower data collection and analysis. Building Node.js/Express.js backend services, REST APIs, and the Conversational Orchestrator. Implementing session workflows, document uploads, identity/consent flows, and profile processing. Working with PostgreSQL, Redis/BullMQ, Docker, and third-party APIs in a modular-monolith architecture.",
    skills: [
      "Node JS",
      "Express JS",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "Third-party APIs",
      "Modular Monolith"
    ],
  },
  {
    id: 0,
    img: creditBucketLogo,
    role: "Software Developer Intern",
    company: "CreditBucket Technologies Pvt. Ltd. (Samriddh Kendra)",
    date: "December 2025 - January 2026",
    desc: "Worked on a Bank Statement Analyzer for processing and analyzing financial transaction data. Developed backend modules for automated financial analysis, reporting, and financial record processing. Contributed to the Loan Origination System (LOS) by implementing frontend features, fixing bugs, and improving application performance.",
    skills: [
      "JavaScript",
      "Node JS",
      "Express JS",
      "MongoDB",
      "REST APIs",
      "Financial Data Processing",
      "Loan Origination System",
      "Bug Fixing"
    ],
  },
  {
    id: 1,
    img: grentechLogo,
    role: "Software Developer Intern",
    company: "Grentech",
    date: "August 2025 - November 2025",
    desc: "Developed 10+ responsive UI components using React.js and Tailwind CSS from Figma designs. Translated design prototypes into pixel-perfect interfaces with 90% design accuracy. Improved code consistency and collaboration using Git and GitHub.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
      "Responsive UI Development",
      "Figma",
      "Git",
      "GitHub"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: gceLogo,
    school: "Gaya College of Engineering, Gaya",
    date: "2022 - 2026",
    grade: "8.21 CGPA",
    desc: "I am pursuing my final-year of B.Tech in CSE from Gaya College of Engineering, Gaya. During my time at GCE, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GCE Gaya has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - Computer Science & Engineering",
  },
  // {
  //   id: 1,
  //   img: bsebLogo,
  //   school: "Muslim Minority Inter College, Bhagalpur",
  //   date: "2020",
  //   grade: "83.60%",
  //   desc: "I completed my class 12 boards education from Muslim Minority Inter College, under BSEB Patna board.",
  //   degree: "Class 12 - PCM",
  // },
  // {
  //   id: 2,
  //   img: bsebLogo,
  //   school: "Muslim High School, Bhagalpur",
  //   date: "2018",
  //   grade: "62.60%",
  //   desc: "I completed my class 10 boards education from Muslim High School, under BSEB Patna board.",
  //   degree: "Class 10",
  // },
];


export const projects = [
  {
    id: 0,
    title: "BookSwap - A C2C Book Selling Marketplace",
    description:
      "Full-stack MERN marketplace for students to buy, sell and swap books with real-time chat. Created 15+ REST APIs for authentication, book listings, transactions and messaging. Integrated Socket.io for real-time buyer-seller communication, Razorpay payments, and Google Gemini AI to automatically extract book details, reducing average listing creation time to under 30 seconds.",
    image: bookswap,
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Razorpay", "Google Gemini API", "ImageKit", "Tailwind CSS", "REST API"],
    github: "https://github.com/mahtabkhan9/bookswap-web",
    webapp: "https://bookswap-web-sigma.vercel.app/",
  },
  {
    id: 7,
    title: "RestroBook - Restaurant Reservation System",
    description:
      "Full-stack MERN restaurant reservation system with secure role-based access control. Developed real-time table booking with availability checks, conflict detection, and capacity validation. Created separate customer and admin dashboards for reservation, table, and attendance management, and automated reservation status updates using cron jobs.",
    image: restrobook,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Axios", "Cron Jobs", "RBAC"],
    github: "https://github.com/mahtabkhan9/restrobook",
    webapp: "https://restrobook.vercel.app",
  },
  {
    id: 1,
    title: "Eventor",
    description:
      "Full-stack event management platform built using the MERN stack. Users can create, manage, and RSVP to events with real-time capacity control. Implemented atomic MongoDB to eliminate 100% of overbooking scenarios under concurrent requests. Designed efficient REST APIs for CRUD operations, ensuring fast response times.",
    image: eventor,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API", "Concurrency Handling", "CRUD"],
    github: "https://github.com/mahtabkhan9/eventor",
    webapp: "https://eventor-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Renderly.ai",
    description:
      "A full-stack AI image generation platform built using the MERN stack. Users can generate AI images from text prompts via the Clipdrop API, manage credits, and purchase more via Razorpay. Features secure JWT authentication, user dashboards, and a modern, responsive UI using Tailwind CSS and Framer Motion.",
    image: renderly,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Motion", "JWT", "Razorpay", "API"],
    github: "https://github.com/mahtabkhan9/renderly",
    webapp: "https://renderly-omega.vercel.app/",
  },
];

