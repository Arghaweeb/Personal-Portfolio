// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    icon: <LinkedinBoxLineIcon />,
    link: 'https://www.linkedin.com/in/arghadeep-biswas/', 
    label: 'LinkedIn'
  },
  {
    icon: <GithubLineIcon />,
    link: 'https://github.com/Arghaweeb', // Replace with your GitHub username
    label: 'GitHub'
  }
  
];

// About Me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 31,
    icon: <GithubFillIcon />,
  },

  {
    title: "Research and Development Projects",
    amount: 5,
    icon: <GroupLineIcon />,
  },

  {
    title: "Awards and Recognition",
    amount: 4,
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  " Hi, I’m Arghadeep — an chemical engineer, researcher, and builder passionate about shaping the future of energy and AI. I am pursuing a 5 year dual degree in Chemical Engineering(B.Tech + M.Tech) at the prestigious Indian Institute of Technology (IIT) Kharagpur. My journey has taken me from simulating bio-reactors in small lab generated data to working in Germany with Ulm University and Mercedes-Benz, designing AI agents for Tokyo Electric Power Company, and now architecting blockchain-powered energy networks at Agile Energy X. I love turning bold ideas into real-world systems, whether it’s autonomous AI, decentralized grids, or sustainable space tech — always with an eye on impact and innovation.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: "Education and Foundation",
    education: "South Point High School, Kolkata",
    experience: [
      "The First Steps. Completed my schooling under the CBSE curriculum, achieving 95.6% in Class X and 95.2% in Class XII.",
    ],
  },
  {
    year: 2,
    title: "Foundations & First Sparks of AI",
    education:
      "Began B.Tech/M.TECH Dual Degree at IIT Kharagpur, completing foundational coursework across all engineering departments to build a broad, interdisciplinary base.",
    experience: [
      "As the AI boom was just beginning, I started exploring its potential by taking on small concept projects with a department professor.",
      "These initial projects focused on integrating fundamental AI principles into core engineering problems, sparking an early interest in the field.",
    ],
  },
  {
    year: 3,
    title: "First Internship and Real World Application",
    education:
      "Completed an intensive Aspen Plus Bootcamp, mastering the simulation of industrial chemical processes and flowsheet designs of complex systems.",
    experience: [
      "Internship: Next Genaro",
      "Applied machine learning to a practical engineering problem by developing a Bio-Reactor Model for Gluconic Acid Fermentation",
    ],
  },
  {
    year: 4,
    title: "Foreign Internship & Industry-Led R&D",
    education: [
      "Awarded the prestigious Baden-Württemberg Stiftung Scholarship for a cross-national research exchange between India and Germany.",
      "Began my B.Tech thesis under Prof Koustuv Ray",
    ],
    experience: [
      "Internship: Ulm University, Germany in collaboration with Mercedes Benz Innovation Center, Ulm",
      "Achieved National Rank 4 in the SUSTAIN-A-THON competition by Indian Oil by simulating a CCUS process",
      "Engaged in R&D with Asian Paints, developing a multi-layer smart coating system and proposing a novel self-healing coating in the ALCHEMY competition",
    ],
  },
  {
    year: 5,
    title: "Global SDE Experience & The Future of Energy Grids",
    education: [
      "Completed intensive bootcamps in Agentic AI with KRISHAI Technologies and Ligency Team, building a portfolio of 8 autonomous agents using frameworks like LangGraph, CrewAI, and AutoGen.",
      "Began my master thesis with the Laboratory of Process Engineering (LCPE) and ISRO, designing a CO2 mitigation system for the Bharatiya Space Station (BSS).",
    ],
    experience: [
      "Internship: Worked as a Software Intern for Tokyo Electric Power Company (the fourth largest electrical utility company in the world), where I engineered a RAG-powered AI agent to analyze over 400 METI energy policy documents",
      'Collaborated with prominent businessman Kenji Tateiwa(CEO of Agile Energy X) and the Tokyo Bitcoin Base to architect "X-PIN," a Decentralized Physical Infrastructure Network (DePIN) for energy assets',
      "Designed the X-PIN marketplace to run on the Bitcoin Lightning Network, developing a simulator for P2P renewable energy trading with dynamic pricing and micropayments(will be released soon",
      "Future Outlook: Currently engineering a blockchain-based device management system for Agile Energy X, automating token rewards and Lightning invoice generation from real-time sensor data",
    ],
  },
];

// Skills
export const skillsData = [
  {
    title: "Programming Languages",
    description: "C, C++, JavaScript, TypeScript, Python, R, SQL",
  },
  {
    title: "Web Design & Development",
    description: "HTML, CSS, Tailwind CSS, JavaScript, TypeScript",
  },
  {
    title: "Frontend JavaScript Frameworks",
    description: "React, Next, Vite",
  },
  {
    title: "Backend Frameworks",
    description: "Node.js, Express.js, Python",
  },
  {
    title: "Database Management System",
    description: "MongoDB, Mongoose, Prisma ORM, Postgres",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "PyTorch, Tensorflow, Keras, OpenCV, OpenAI, LangChain, Hugging Face, YOLO",
  },
  {
    title: "DevOps & Version Control",
    description: "Docker, AWS, Google Cloud, Git, GitHub",
  },
  {
    title: "Core Engineering Softwares",
    description: "LaTeX, COMSOL, Aspen Plus, Origin Labs, Ansys Fluent",
  },
];

// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
// export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Kenji Tateiwa, Founder and CEO, Agile Energy X(TEPCO Japan)",
    comment:
      "Arghadeep’s passion for sustainable energy, technical capability, and curiosity greatly impressed our team. He embraced Japanese work culture with diligence and delivered an outstanding performance.",
  },
  {
    image: "/reviews/client-2.png",
    name: "Prof. Robert Güttel (Ulm University, Germany)",
    comment:
      "Arghadeep showed remarkable proficiency in experimental research and data analysis, consistently delivering insightful results. His enthusiasm, initiative, and teamwork made him a valuable contributor to our research group.",
  },
  {
    image: "/reviews/client-1.png",
    name: "Dr. Koustuv Ray (IIT Kharagpur, India)",
    comment:
      "Arghadeep ranks among the top 10% of students I have taught, with outstanding writing ability and research skills. He combines deep passion for Chemical Engineering with excellent problem-solving and communication skills.",
  },
];

// Projects
export const projectsData = [
  {
    name: "METI AI Assistant",
    desc: "An AI-powered Retrieval-Augmented Generation (RAG) assistant built to streamline policy monitoring and strategic planning for Japan’s energy sector. Developed in collaboration with Agile Energy X and TEPCO, this bilingual system (English & Japanese) enables users to query official Ministry of Economy, Trade and Industry (METI) committee documentation with real-time answers, supporting AEX’s decision-making process.",
    url: "/projects/project-1.png",
    tech: ["Tech", "Artificial Intelligence"],
    githubLink: "https://github.com/Arghaweeb/METI-AI-Assistant-",
    pptLink: null,
    demoLink: "https://aexmeti.streamlit.app/", // optional
  },
  {
    name: "ShibaKraft",
    desc: "A full-stack Next.js + Supabase application that lets users design and manage personal portfolios without writing code. Features include secure authentication, project/experience CRUD operations, image storage, and unique shareable portfolio links, all wrapped in a modern Shadcn UI",
    url: "/projects/project-2.png",
    tech: ["Tech"],
    githubLink: "https://github.com/Arghaweeb/ShibaCraft-Porfolio-Builder",
    pptLink: null,
    demoLink: "shiba-craft-porfolio-builder.vercel.app",
  },
  {
    name: "Bachelor Thesis 1: Techno-Economic Analysis of Sabatier Reaction",
    desc: "Conducted a comprehensive techno-economic analysis (TEA) of the Sabatier reaction for synthetic methane production via CO₂ hydrogenation. Modeled carbon capture (MEA absorption), electrolysis, and catalytic methanation in Aspen Plus, and evaluated cost drivers using sensitivity and uncertainty analysis. Assessed feasibility for large-scale Power-to-Gas implementation under varying electricity, catalyst, and CO₂ supply conditions, contributing to pathways for carbon neutrality in India.",
    url: "/projects/project-4.png",
    tech: ["Chemical Engineering"],
    githubLink: null,
    pptLink: "/presentations/BTP-1.pptx", // or Google Drive link
    demoLink: null,
  },
  {
    name: "Bachelor Thesis 2: Mechanistic Study of CO₂ Methanation over Ru/TiO₂",
    desc: "Investigated the reaction mechanism of CO₂ methanation on Ru/TiO₂ catalysts using in-situ DRIFTS (Diffuse Reflectance Infrared Fourier Transform Spectroscopy). Identified dual mechanistic pathways: formate pathway at lower temperatures (150–250 °C) and CO-mediated pathway at higher temperatures (300–400 °C). Compared catalyst performance with other supports (Ru/ZrO₂, Ru/Al₂O₃), highlighting the role of strong metal–support interactions in activity and selectivity.",
    url: "/projects/project-5.png",
    tech: ["Chemical Engineering"],
    githubLink: null,
    pptLink: "/presentations/BTP-2.pptx", // or Google Drive link
    demoLink: null,
  },

  {
    name: "ArgFolio",
    desc: "You are looking at it, my friend!",
    url: "/projects/project-3.png",
    tech: ["Tech"],
    githubLink: "https://github.com/Arghaweeb/Personal-Portfolio",
    pptLink: null,
    // demoLink: 'shiba-craft-porfolio-builder.vercel.app'
  },

  {
    name: "Samsung Edge 9.0",
    desc: "Smart Living, Made Simple and Truly Indian.",
    url: "/projects/project-8.png",
    tech: ["Case Studies"],
    githubLink: null,
    pptLink: "https://drive.google.com/file/d/1MDd8d5CNZ99BzAPwhQC0p19H_0irS5P3/view?usp=sharing",
    demoLink: null,
  },

  {
    name: "Smart Coatings Development (Asian Paints)",
    desc: "Developed a multi-layer smart coating system integrating a quartz shield, fiberglass reinforcement, TiO₂-based self-healing polyurethane, and epoxy primer. The system combined water resistance, breathability, corrosion protection, and autonomous crack healing, making it suitable for construction, coastal, industrial, and automotive applications. Compared performance with existing commercial coatings, demonstrating 8–10 years durability, superior self-healing efficiency, and reduced VOC impact.",
    url: "/projects/project-6.png",
    tech: ["Research & Development"],
    githubLink: null,
    pptLink: "presentations/AsianPaints.pptx",
    demoLink: null,
  },

  {
    name: "Indian Oil R&D 2025",
    desc: "Proposed an integrated Power-to-Gas (PtG) process for IOCL, coupling MEA-based CO₂ capture, alkaline water electrolysis, and Ru/Al₂O₃ catalytic methanation to produce >96% pure synthetic natural gas (SNG). Conducted techno-economic analysis (CAPEX $22M, OPEX $35M) with sensitivity studies, highlighting electricity pricing as the dominant cost driver.",
    url: "/projects/project-7.png",
    tech: ["Research & Development"],
    githubLink: null,
    pptLink: "presentations/IndianOil.pptx",
    demoLink: null,
  },
];

export const projectsButton = [
  "All",
  "Tech",
  "Chemical Engineering",
  "Computer Vision",
  "Artificial Intelligence",
  "Case Studies",
  "Research & Development",
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "Baden Wurttemberg Stiftung 2024",
    answer:
      "Awarded for excellence in cross-national research exchange between India and Germany.",
    certificateLink: "/certificates/BadenWurttembergAwardArg.pdf",
    hasLink: true,
  },
  {
    question: "IIT KGP Foundation Scholarship, USA (2024)",
    answer:
      "Awarded for academic excellence and research contributions at IIT Kharagpur",
    certificateLink: "/certificates/IITKGPF_ARG.pdf", // Add your PDF path
    hasLink: true,
  },
  {
    question: "1st Place – Annual Chemical Engineering Competition (2025)",
    answer:
      "Represented IIT Kharagpur at the Calcutta Regional Centre, IIChE Quiz Competition (Jadavpur University); won after 4 technical rounds, a rapid-fire, and a tie-breaker among 30 teams from different colleges all over India.",
    certificateLink: "/certificates/Certificate_Arghadeep.pdf", // Add your PDF path
    hasLink: true,
  },
  
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "reviews",
    name: "LOR",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },

  {
    id: "questions",
    name: "Awards",
    icon: <QuestionAnswerLineIcon />,
  },

  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
