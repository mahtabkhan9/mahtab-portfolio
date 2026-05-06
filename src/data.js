// Skills Section Logo's
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

// Education Section Logo's
import gceLogo from './assets/education_logo/logo.jpg';
import bsebLogo from './assets/education_logo/bseb.jpg';

// Project Section Logo's
import bookswap from './assets/work_logo/bookswap.png';
import eventor from './assets/work_logo/eventor.png';
import renderly from './assets/work_logo/renderly.png';
import ems from './assets/work_logo/ems.png';
import drive from './assets/work_logo/drive.png';
import user from './assets/work_logo/user.png';
import todo from './assets/work_logo/todo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
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
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
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
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: creditBucketLogo,
    role: "Software Developer Intern",
    company: "CreditBucket Technologies Pvt. Ltd. (Samriddh Kendra)",
    date: "December 2025 - March 2026",
    desc: "Developed a Bank Statement Analyzer to automate financial data extraction, reducing manual processing time by 60%. Implemented data validation and parsing mechanisms to achieve 90% accuracy in transaction consistency. Built 10+ analytical modules to support internal financial assessment and reporting processes.",
    skills: [
      "JavaScript",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Data Validation",
      "Data Parsing",
      "REST APIs",
      "Analytical Modules Development"
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
    date: "Sept 2022 - July 2026",
    grade: "8.2 CGPA",
    desc: "I am pursuing my final-year of B.Tech in CSE from Gaya College of Engineering, Gaya. During my time at GCE, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GCE Gaya has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - Computer Science & Engineering",
  },
  {
    id: 1,
    img: bsebLogo,
    school: "Muslim Minority Inter College, Bhagalpur",
    date: "2020",
    grade: "83.60%",
    desc: "I completed my class 12 boards education from Muslim Minority Inter College, under BSEB Patna board.",
    degree: "Class 12 - PCM",
  },
  {
    id: 2,
    img: bsebLogo,
    school: "Muslim High School, Bhagalpur",
    date: "2018",
    grade: "62.60%",
    desc: "I completed my class 10 boards education from Muslim High School, under BSEB Patna board.",
    degree: "Class 10",
  },
];


export const projects = [
  {
    id: 0,
    title: "BookSwap - A C2C Book Selling Marketplace",
    description:
      "Full-stack MERN marketplace for students to buy, sell and swap books with real-time chat. Built a credit-based listing system with Razorpay integration and implemented Google Gemini AI for automatic book data extraction. Developed secure REST APIs with JWT, OTP authentication and Socket.io powered real-time messaging.",
    image: bookswap,
    tags: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Razorpay", "Google Gemini API", "ImageKit", "Tailwind CSS", "REST API"],
    github: "https://github.com/mahtabkhan9/bookswap-web",
    webapp: "https://bookswap-web-sigma.vercel.app/",
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
  {
    id: 3,
    title: "Employee Management System",
    description:
      "A React-based application to manage employees with role-based dashboards. Admins can assign tasks, track status, and manage employees, while employees view and update their assigned tasks. Data persistence is handled using localStorage, and Context API is used for managing global authentication state.",
    image: ems,
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Context API", "LocalStorage"],
    github: "https://github.com/mahtabkhan9/ems",
    webapp: "https://ems-pink.vercel.app/",
  },
  {
    id: 4,
    title: "Drive - File Storage Backend App",
    description:
      "A secure file storage backend application built with Node.js, Express, and MongoDB. It supports user authentication using JWT, file upload and retrieval via Cloudinary, and file handling through Multer. The interface is rendered using EJS templates and styled with Tailwind CSS.",
    image: drive,
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Multer", "EJS", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/drive",
    webapp: "https://drive-4ii8.onrender.com/",
  },
  {
    id: 5,
    title: "User Management CRUD App",
    description:
      "A user management app for managing user data, including features for creating, reading, updating, and deleting users.",
    image: user,
    tags: ["React.js", "Redux Toolkit", "JavaScipt", "JSON PLaceholder API", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/user-management-app",
    webapp: "https://user-management-app-gamma.vercel.app/",
  },
  {
    id: 6,
    title: "ToDo List App",
    description:
      "A task management application that allows users to add, and delete tasks, helping them stay organized and productive.",
    image: todo,
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/ToDoList",
    webapp: "https://to-do-list-alpha-puce-64.vercel.app/",
  }
];

