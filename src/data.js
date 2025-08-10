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
import grentechLogo from './assets/company_logo/grentechin_logo.jpeg';
import atplcLogo from './assets/company_logo/atplc_logo.png';

// Education Section Logo's
import gceLogo from './assets/education_logo/logo.jpg';
import bsebLogo from './assets/education_logo/bseb.jpg';

// Project Section Logo's
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
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'PHP', logo: phpLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
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
    img: grentechLogo,
    role: "Software Developer Intern",
    company: "Grentech",
    date: "August 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "Express JS"
    ],
  },
  {
      id: 1,
      img: atplcLogo,
      role: "Full Stack Development Training Internship",
      company: "ATPLC",
      date: "May 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using HTML, CSS, JavaScript, PHP, and MySQL, managing both frontend and backend development. Utilized Bootstrap for responsive UI design, configured XAMPP and Apache for local development and deployment, and optimized application performance while collaborating with cross-functional teams in an agile environment.",
      skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "MySQL",
          "PHP",
          "Bootstrap",
          "XAMPP",
          "Apache",
      ],
  },
];

export const education = [
  {
    id: 0,
    img: gceLogo,
    school: "Gaya College of Engineering, Gaya",
    date: "Sept 2022 - July 2026",
    grade: "8.04 CGPA",
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
    desc: "I completed my class 10 boards education from Muslim Minority Inter College, under BSEB Patna board.",
    degree: "Class 10",
  },
];


export const projects = [
  {
    id: 0,
    title: "Renderly.ai",
    description:
      "A full-stack AI image generation platform built using the MERN stack. Users can generate AI images from text prompts via the Clipdrop API, manage credits, and purchase more via Razorpay. Features secure JWT authentication, user dashboards, and a modern, responsive UI using Tailwind CSS and Framer Motion.",
    image: renderly,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Motion", "JWT", "Razorpay", "API"],
    github: "https://github.com/mahtabkhan9/renderly",
    webapp: "https://renderly-omega.vercel.app/",
  },
  {
    id: 1,
    title: "Employee Management System",
    description:
      "A React-based application to manage employees with role-based dashboards. Admins can assign tasks, track status, and manage employees, while employees view and update their assigned tasks. Data persistence is handled using localStorage, and Context API is used for managing global authentication state.",
    image: ems,
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Context API", "LocalStorage"],
    github: "https://github.com/mahtabkhan9/ems",
    webapp: "https://ems-pink.vercel.app/",
  },
  {
    id: 2,
    title: "Drive - File Storage Backend App",
    description:
      "A secure file storage backend application built with Node.js, Express, and MongoDB. It supports user authentication using JWT, file upload and retrieval via Cloudinary, and file handling through Multer. The interface is rendered using EJS templates and styled with Tailwind CSS.",
    image: drive,
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Multer", "EJS", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/drive",
    webapp: "https://drive-4ii8.onrender.com/",
  },
  {
    id: 3,
    title: "User Management CRUD App",
    description:
      "A user management app for managing user data, including features for creating, reading, updating, and deleting users.",
    image: user,
    tags: ["React.js", "Redux Toolkit", "JavaScipt", "JSON PLaceholder API", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/user-management-app",
    webapp: "https://user-management-app-gamma.vercel.app/",
  },
  {
    id: 4,
    title: "ToDo List App",
    description:
      "A task management application that allows users to add, and delete tasks, helping them stay organized and productive.",
    image: todo,
    tags: ["Next.js", "React.js", "Tailwind CSS"],
    github: "https://github.com/mahtabkhan9/ToDoList",
    webapp: "https://to-do-list-alpha-puce-64.vercel.app/",
  }
];

export const profiles = [
  {
    id: 0,
    name: "GitHub",
    url: ""
  }
]