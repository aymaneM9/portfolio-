import {
  mobile,
  backend,
  creator,
  web,
} from "../assets";
import alfia_logo from "/alfia_logo.png"
import html from "/html.png";
import css from "/css.png";
import javascript from "/javascript.png";
import typescript from "/typescript.png";
import reactjs from "/reactjs.png";
import tailwind from "/tailwind.png";
import mongodb from "/mongodb.png";
import nodejs from "/nodejs.png";
import docker from "/docker.png";
import figma from "/figma.png";
import git from "/git.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Devops Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: creator,
  },
];

const technologies = [
{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },

    {
    name: "React Native",
    icon: "/react-native-logo.png",
  },
  {
    name: "Flutter",
    icon: "/flutter-logo.png",
  },
  {
    name: "Laravel",
    icon: "/laravel-logo.png",
  },
  {
    name: "ExpressJs",
    icon: "/express-js-logo.png",
  },
  {
    name: "MySQL",
    icon: "/mysql-logo.png",
  },
  {
    name: "Vercel",
    icon: "/vercel-logo.png",
  },
  {
    name: "Aws",
    icon: "/aws-logo.png",
  },
  {
    name: "Postman",
    icon: "/postman-logo.png",
  },
  {
    name: "Bootstrap",
    icon: "/bootstrap-logo.png",
  },
  {
    name: "Canva",
    icon: "/canva-logo.png",
  },
  {
    name: "Linux",
    icon: "/linux-logo.png",
  },
  {
    name: "VirtualBox",
    icon: "/virtualbox-logo.png",
  },
  {
    name: "Vmware",
    icon: "/vmware-logo.webp",
  },

];




const experiences = [
  {
    title: "Software Developer",
    company_name: "Alfia Capital",
    icon: alfia_logo,
    iconBg: "#E6DEDD",
    date: "March 2025 - Present ",
    points: [
      "Contributing to innovative projects in a dynamic startup environment.",
      "Collaborating with talented teams to design, build, and optimize scalable software solutions that drive business growth.",
      "Leveraging technical skills and passion for problem-solving to deliver high-performance applications.",
      "Continuously learning from industry-leading professionals to improve development practices."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "MOONGRAPH",
    icon: "/moon-logo.png",
    iconBg: "#383E56",
    date: "December 2024 - February 2025 (3 months)",
    points: [
      "Developed a company system application using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Contributed to 50% of the project, focusing on both front-end and back-end development.",
      "Improved system functionality and performance through collaborative development."
    ],
  },
  {
    title: "Web Developer",
    company_name: "ALGOLUS - Centre Algo Academy",
    icon: "/algo-logo.png",
    iconBg: "#E6DEDD",
    date: "February 2023 - April 2023 (3 months)",
    points: [
      "Developed a parapharmacy management system during a second internship.",
      "Built backend services with Laravel to handle inventory and user management.",
      "Created a dynamic frontend using React and a mobile app with React Native.",
      "Integrated RESTful APIs to connect frontend, backend, and mobile functionalities."
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "ALGOLUS - Centre Algo Academy",
    icon: "/algo-logo.png",
    iconBg: "#383E56",
    date: "June 2022 - August 2022 (3 months)",
    points: [
      "Developed a full stack library management system using Laravel.",
      "Implemented database schemas and user authentication.",
      "Created a responsive design to enhance usability across devices.",
      "Ensured system functionality through thorough testing and debugging."
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MOOUP",
    description:
      "A food delivery super app with 3 mobile apps for Customer, Delivery, and Restaurant, plus 2 web apps for Customer website and Admin Dashboard. Built with React, React Native, Node.js, and Express.js.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "React Native", color: "text-green-500" },
      { name: "Laravel", color: "text-yellow-500" },
      { name: "MySql", color: "text-gray-500" },
      { name: "Firebase", color: "text-purple-500" },
    ],
    image: "/mooup-preview.png",
    source_code_link: "https://mooup.ma",
  },
  {
    name: "ALFIA",
    description:
      "A full system for venture builder, including project management, resource allocation, and dashboards. Built using React, Node.js, and Express.js.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Node.js", color: "text-yellow-500" },
      { name: "Express.js", color: "text-gray-500" },
      { name: "Dashboard", color: "text-purple-500" },
      { name: "Tailwind", color: "text-green-500" },
      { name: "MongoDB", color: "text-red-500" },


    ],
    image: "/alfia-preview.png",
    source_code_link: "https://app.alfia.com.sa",
  },
  {
    name: "BRIKOOL",
    description:
      "Feature-rich home services platform connecting clients with service providers. Built with React.js, Material-Tailwind, Node.js, Express.js, and React Native mobile app. Includes JWT authentication, real-time chat, multilingual support, and dark mode.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "React Native", color: "text-green-500" },
      { name: "Node.js", color: "text-yellow-500" },
      { name: "Express.js", color: "text-gray-500" },
      { name: "Tailwind", color: "text-purple-500" },
      { name: "MongoDB", color: "text-red-500" },

    ],
    image: "/brikool-preview.png",
    source_code_link: "https://brikool-client-lilac.vercel.app/",
  },
  {
    name: "POS & Inventory System",
    description: "For this project, I developed two user interfaces: one for the administrator dashboard and another for the cashier. The system also includes a mobile app for servers, ensuring seamless communication and functionality across all roles. The administrator dashboard provides full control over inventory, sales reports, and user management, while the cashier interface is streamlined for quick and efficient transactions. The mobile app facilitates easy order management for servers.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "React Native", color: "text-green-500" },
      { name: "Laravel", color: "text-yellow-500" },
      { name: "Tailwind", color: "text-purple-500" },
      { name: "MySql", color: "text-red-500" },
    ],
    image: "/pos-preview.png",
    source_code_link: "https://github.com/AYMANEMTS/PointOfSales",
  },
  {
    name: "E-Commerce",
    description: "This project includes two interfaces: one for the admin dashboard and another for the customer interface. The admin dashboard allows for managing products, orders, and user interactions, while the customer interface provides a smooth shopping experience, enabling users to browse products, place orders, and choose between online payments or cash on delivery. The integration of multiple payment options enhances user convenience and flexibility.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Laravel", color: "text-yellow-500" },
      { name: "Tailwind", color: "text-purple-500" },
      { name: "MySql", color: "text-red-500" },
    ],
    image: "/ecom.png",
    source_code_link: "https://github.com/AYMANEMTS/eCommerce",
  },
];

export { services, technologies, experiences, testimonials, projects };
