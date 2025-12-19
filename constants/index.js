import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/unity.svg";
import ArVr from "./../public/assets/icons/unity.png";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "achievements",
    title: "Acheivements",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Software Developer",
    icon: <FreelancerIcon />,
  },

  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Unity Developer",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    { name: "HTML5", icon: "/assets/tech/html5.svg", link: "https://html.spec.whatwg.org/multipage/" },
    { name: "CSS3", icon: "/assets/tech/css3.svg", link: "https://www.w3.org/Style/CSS/Overview.en.html" },
    { name: "JavaScript", icon: "/assets/tech/javascript.svg", link: "https://262.ecma-international.org/" },
    { name: "TypeScript", icon: "/assets/tech/typescript.svg", link: "https://www.typescriptlang.org/" },
    { name: "C", icon: "/assets/tech/c.svg", link: "https://en.cppreference.com/w/c" },
    { name: "Java", icon: "/assets/tech/java.svg", link: "https://www.java.com/en/" },
    { name: "Python", icon: "/assets/tech/python.svg", link: "https://www.python.org/" },
  ],

  frameworks: [
    // --- AR/VR / Game Dev Frameworks ---
    { name: "Unity", icon: "/assets/icons/unity.png", link: "https://unity.com/" },
    { name: "Unreal Engine", icon: "/assets/icons/un.png", link: "https://unrealengine.com/" }, // optional
    { name: "WebXR", icon: "/assets/icons/webxr.jpg", link: "https://immersiveweb.dev/" },
    { name: "Next.js", icon: "/assets/tech/nextjs.svg", link: "https://nextjs.org/" },
    { name: "TailwindCSS", icon: "/assets/tech/tailwindcss.svg", link: "https://tailwindcss.com/" },
    { name: "Express.js", icon: "/assets/tech/expressjs.png", link: "https://expressjs.com/" },
    { name: "Flutter", icon: "/assets/tech/flutter.svg", link: "https://flutter.dev/" },

    
    
  ],

  libraries: [
    { name: "React", icon: "/assets/tech/react.svg", link: "https://react.dev/" },
    { name: "Three.js", icon: "/assets/tech/threejs.svg", link: "https://threejs.org/" },
    { name: "Styled-Components", icon: "/assets/tech/styled-components.png", link: "https://styled-components.com/" },
    { name: "Framer-motion", icon: "/assets/tech/framer.svg", link: "https://www.framer.com/motion/" },
    { name: "Zustand", icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg", link: "https://zustand-demo.pmnd.rs" },
    { name: "Redux/Redux-toolkit", icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", link: "https://redux.js.org" },
    { name: "NextAuth.js", icon: "/assets/tech/nextauthjs.png", link: "https://next-auth.js.org/" },
    { name: "Prisma", icon: "/assets/tech/prisma.svg", link: "https://www.prisma.io/" },

    // --- AR/VR / Game Dev Libraries ---
    { name: "AR Foundation", icon: "/assets/tech/ar.webp", link: "https://unity.com/features/ar" },
    { name: "Vuforia", icon: "/assets/tech/vf.webp", link: "https://developer.vuforia.com/" },
    { name: "Oculus SDK", icon: "/assets/tech/oculus.png", link: "https://developer.oculus.com/" },
    { name: "OpenXR", icon: "/assets/tech/ox.webp", link: "https://www.khronos.org/openxr/" },
  ],

  tools: [
    { name: "Git", icon: "/assets/tech/git.svg", link: "https://git-scm.com/" },
    { name: "Github", icon: "/assets/icons/github.svg", link: "https://github.com/" },
    { name: "Postman", icon: "/assets/tech/postman.svg", link: "https://www.postman.com/" },
    { name: "Figma", icon: "/assets/tech/figma.svg", link: "https://www.figma.com/" },

    // --- Game/AR/VR Tools ---
    { name: "Blender", icon: "/assets/tech/br.webp", link: "https://www.blender.org/" },
    { name: "Mixamo", icon: "/assets/tech/m.webp", link: "https://www.mixamo.com/" },
    { name: "Unity Asset Store", icon: "/assets/icons/unity.png", link: "https://assetstore.unity.com/" },
  ],

  environments: [
    { name: "Node.js", icon: "/assets/tech/nodejs.svg", link: "https://nodejs.org/en" },

    // --- AR/VR Runtime Environments ---
    { name: "Android (AR/VR Builds)", icon: "/assets/tech/Qp.webp", link: "https://developer.android.com/" },
    { name: "Quest Runtime", icon: "/assets/tech/ox.webp", link: "https://developer.oculus.com/" },
  ],

  databases: [
    { name: "MySQL", icon: "/assets/tech/my-sql.png", link: "https://www.mysql.com/" },
    { name: "PostgreSQL", icon: "/assets/tech/postgresql.png", link: "https://www.postgresql.org" },
    { name: "MongoDB", icon: "/assets/tech/mongodb.svg", link: "https://www.mongodb.com/" },
    { name: "Firebase", icon: "/assets/tech/fb.webp", link: "https://firebase.google.com/" },
  ],
};



const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },
  {
    title: "Unity Developer",
    company_name: "Worked at Codegres OPC PVT Ltd",
    icon: "/assets/company/OIP.svg",
    iconBg: "#E6DEDD",
    date: "Nov 2024 - May 2025",
    points: [
      "Developed Shuruka Boxing, a full-fledged industry-level 3D game with advanced combat systems, AI opponents, polished animations, and optimized performance.",
      "Built UtilSens Traffic Sense, a full-stack Unity simulation with AI-driven vehicles, traffic logic, backend API integration, and real-time analytics.",
      "Designed complete UI/UX, level flow, and cinematic interactions to deliver polished, production-quality experiences.",
      "Delivered end-to-end solutions with strong expertise in Unity, C#, optimization, AI systems, and full-stack communication.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Worked at Codegres OPC PVT Ltd",
    icon: "/assets/company/OIP.svg",
    iconBg: "#E6DEDD",
    date: "May 2025 - sept 2025",
    points: [
      "Developed the complete Flutter frontend for a job seeker–job provider application with clean UI, smooth navigation, and responsive layouts.",
      "Integrated REST APIs, authentication, and real-time data flows, ensuring seamless communication between frontend and backend services.",
      "Built reusable widgets, components, and state-management architecture for scalable and maintainable code.",
      "Delivered a production-ready app with optimized performance, tested flows, and consistent UX for both job seekers and employers.",
    ],
  },
  {
    title: "Backend and Database (AI)",
    company_name: "ONGC ",
    icon: "/assets/company/on.png",
    iconBg: "#E6DEDD",
    date: "February 2022 - July 2023",
    points: [
      "Developed an immersive VR simulation for ONGC, creating realistic training and operational environments.",
      "Designed and integrated the backend and database systems, enabling secure data flow and real-time interactions inside the simulation.",
      "Implemented AI-driven behaviors and simulation logic to enhance realism and improve training accuracy for industrial use cases.",
     
    ],
  },
  {
    title: "FREELANCING",
    company_name: "Codegres OPC PVT Ltd || UtilSens Technologies Pvt Ltd || OBRIVE Technologies Pvt Ltd || Nist University Vr Simulation|| CMM Web Portals || ",
    icon: "/assets/company/on.png",
    iconBg: "#E6DEDD",
    date: "from 2023 till date",
    points: [
      "Codegres and Utilsens are Our Repeated Clients for Unity Game Development and Simulations.",
      "We Believe in Developing the Product till the Customer is Satisfied and Happy with the Product.",
      "Implemented Simulations like Game development and AR/VR for Industrial Training and Educational Purposes, Real State, Businesses and Others.",
     
    ],
  },
];
const Acheivements = [

 {
    title: "FOCCI BAF Award Winner 2025",
    description:
      "Honored with the prestigious FOCCI BAF Award 2025 for outstanding innovation, leadership, and contributions in immersive technology and software development.",
    tags: [
      { name: "Award", color: "blue-text-gradient" },
      { name: "Innovation", color: "green-text-gradient" },
      { name: "Technology", color: "pink-text-gradient" },
    ],
    image: "/assets/achievements/focci.png", // put your image path
    proof_link: "https://your-proof-link.com", // optional
  },
  {
    title: "Infosys Global Hackathon Winner 2025",
    description:
      "Achieved 1st place in the Infosys Global Hackathon 2025 for developing an AI-driven XR training system combining immersive AR, VR, and adaptive learning intelligence.",
    tags: [
      { name: "Hackathon", color: "yellow-text-gradient" },
      { name: "AI", color: "orange-text-gradient" },
      { name: "XR", color: "green-text-gradient" },
    ],
    image: "/assets/achievements/infosys.png", 
    proof_link: "https://your-proof-link.com",
  },
  {
    title: "6× Hackathon Winner",
    description:
      "Won 6 major hackathons across different domains including AI, XR, game development, full-stack engineering, and robotics. Recognized for creative problem-solving and rapid prototyping.",
    tags: [
      { name: "Hackathon", color: "pink-text-gradient" },
      { name: "Full Stack", color: "blue-text-gradient" },
      { name: "Game Dev", color: "green-text-gradient" },
    ],
    image: "/assets/achievements/hackathon.png",
    proof_link: "https://your-proof-link.com",
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
    name: "SHURUKA BOXING ",
    description:
      "Experience the most realistic first-person boxing game ever! Dodge, block, and throw powerful punches in intense fights against dynamic AI or real players. Train, rise through the ranks, and become the undisputed champion.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "URP SCENES",
        color: "orange-text-gradient",
      },
      {
        name: "Codegres",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/shu.jpg",
    source_code_link: "https://store.steampowered.com/app/2448900/Shuruka_Boxing/",
    deployed_link: "https://store.steampowered.com/app/2448900/Shuruka_Boxing/",
  },
  {
    name: "Skill Bridge Adaptive Learning Platform ",
    description:
      "About SkillBridge offers immersive AR/VR labs for practical, risk-free training. Our AR features machinery simulations with a Meta Human guide. The VR component includes real-time feedback interview simulations, server room training, and detailed modules for assembling and disassembling various engines, including V8, and several pneumatic engine types.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "Unity",
        color: "orange-text-gradient",
      },
      {
        name: "XR",
        color: "yellow-text-gradient",
      },
      {
        name: "AI (NLPS)",
        color: "green-text-gradient",
      },
      {
        name: "AI npm",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "Postgres",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/sk.png",
    source_code_link: "https://github.com/Arvindsahu66/MetaAchievers_Team339",
    deployed_link: "https://github.com/Arvindsahu66/MetaAchievers_Team339",
  },
  {
    name: "PARAKRAM",
    description:
      "A 2D game to tackle the Huddles and Achieve the levels, Movements include forward, backword, left and right and jump help to cross the huddles and the levels  ",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "URP SCENES",
        color: "orange-text-gradient",
      },
      {
        name: "Unity Play Store",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/para.png",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "SATTVA",
    description:
      "An Therapy Application for College Student, Your personal emotional support platform. Start your journey to mindfulness and emotional wellness today. \n(AR/VR integrated IOT hardwares, with WEB and Ai ",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "IOT Sensors ",
        color: "yellow-text-gradient",
      },
      {
        name: "AR and VR ",
        color: "blue-text-gradient",
      },
      {
        name: "Ai npn ",
        color: "green-text-gradient",
      },
      {
        name: "Hardware + Software",
        color: "pink-text-gradient",
      },
      {
        name: "Meta Human Ai",
        color: "orange-text-gradient",
      },
      
    ],
    image: "/assets/projects/sat.png",
    source_code_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System",
    deployed_link:
      "https://sattava-gray.vercel.app/",
  },
  {
    name: "India Bharat Bhraman ",
    description:
      "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "Unity",
        color: "orange-text-gradient",
      },
      {
        name: "XR",
        color: "yellow-text-gradient",
      },
      {
        name: "AI (NLPS)",
        color: "green-text-gradient",
      },
      {
        name: "AI npm",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "orange-text-gradient",
      },
      {
        name: "Postgres",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/bha.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
    deployed_link: "https://bharat-bhraman-two.vercel.app/",
  },
  {
    name: "Ar VR in Real state",
    description:
      "Developed an AR/ VR integrated solution for real state businesses using AI npm and real time MEta Human Character and customization in real time for smooth and Good Feedback in Real state businesses",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mirage.js",
        color: "green-text-gradient",
      },
      {
        name: "firebase-firestore",
        color: "pink-text-gradient",
      },
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: "URP SCENES",
        color: "orange-text-gradient",
      },
      {
        name: "Unity Play Store",
        color: "yellow-text-gradient",
      },
      
    ],
    image: "/assets/projects/gm.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
    deployed_link: "https://myvanlife.netlify.app",
  },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Arvindsahu66?tab=following",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/arvind-kumar-sahu-380498257/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/Arvind_sahu",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/arvindsahu3175?utm_source=qr&igsh=Mmk0eTFheWxtZDc2",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "WebXR Developer",
  500,
  "Unity Developer",
  500,
  "Ar & VR Developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  Acheivements,
  testimonials,
  projects,
  socials,
  heroTexts,
};
