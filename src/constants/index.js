import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
} from "../assets";
import mooup_logo from "/mooup_logo.png"
import pos_logo from "/pos_logo.png"
import alfia_logo from "/alfia_logo.png"
import brikool_logo from "/brikool_logo.png"
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
    title: "MOOUP",
    company_name: "MOOUP",
    icon: mooup_logo,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built a food delivery super app ecosystem consisting of 3 mobile apps (Customer, Delivery, Restaurant) and 2 web applications (Customer Website & Admin Dashboard).",
      "Designed scalable backend services using Laravel & MySql, ensuring smooth multi-role functionality and performance.",
      "Implemented secure authentication, order tracking, and real-time updates for seamless user experiences.",
      "Collaborated with designers and product teams to deliver an intuitive and efficient food delivery platform.",
    ],
  },
  {
    title: "ALFIA SYSTEM",
    company_name: "ALFIA",
    icon: alfia_logo,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Developed a complete venture builder system, integrating tools for project management, resource allocation, and team collaboration.",
      "Created responsive and scalable web applications using React.js for the frontend and Node.js/Express.js for the backend.",
      "Implemented data-driven dashboards with role-based access to enhance decision-making for stakeholders.",
      "Worked closely with cross-functional teams to optimize workflows and system performance.",
    ],
  },
  {
    title: "BRIKOOL",
    company_name: "BRIKOOL",
    icon: brikool_logo,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed a feature-rich home services platform connecting clients with professional service providers in multiple categories (cleaning, plumbing, electrical, etc.).",
      "Built a modern and responsive UI using React.js and Material-Tailwind, ensuring accessibility and user-friendliness.",
      "Implemented JWT-based secure authentication, multilingual support, dark mode, and real-time chat for seamless communication.",
      "Developed a React Native mobile app for cross-platform access and deployed the system on Vercel for scalability and reliability.",
    ],
  },
  {
    title: "POS & Inventory System",
    company_name: "POS & Inventory System",
    icon: pos_logo,
    iconBg: "#E6DEDD",
    date: "2023 - 2024",
    points: [
      "Designed and developed two web interfaces: an Administrator Dashboard and a Cashier Panel, tailored for retail operations.",
      "Implemented inventory management, sales tracking, and user management with an intuitive admin dashboard.",
      "Developed a mobile app for servers to handle real-time order management, ensuring seamless collaboration across roles.",
      "Optimized system performance for fast transactions and efficient multi-device usage.",
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
];

export { services, technologies, experiences, testimonials, projects };
