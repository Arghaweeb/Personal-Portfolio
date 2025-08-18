// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  // <InstagramLineIcon />,
  // <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <LinkedinBoxLineIcon />,
  <GithubLineIcon />,
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 29,
    icon: <GithubFillIcon />,
  },

  {
    title: 'Happy Clients',
    amount: 10,
    icon: <GroupLineIcon />,
  },

  {
    title: 'Awards and Recognition',
    amount: 6,
    icon: <AwardFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " Hi, I'm Arghadeep, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites, while also using design tools like Photoshop and Figma to create visually appealing and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience."
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Foundation and Basics',
    education:
      'High School Diploma: Focus on computer science, mathematics, and art/design courses.',
    experience: [
      'Basic HTML/CSS: Learn through online tutorials and courses.',
      'Personal Projects: Create simple personal websites or blogs.',
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education:
      'Associate’s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.',
    experience: [
      'Freelance Work: Take on small freelance projects to build a portfolio.',
      'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
    ],
  },
  {
    year: 3,
    title: 'Specialized Education and Real-World Application',
    education:
      'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).',
    experience: [
      'Internships: Secure internships with tech companies or design agencies.',
      'Contribute to Open Source: Collaborate on open-source projects.',
    ],
  },
  {
    year: 4,
    title: 'Building Expertise and Expanding Skills',
    education: 'Certifications: Obtain certifications in advanced web technologies.',
    experience: [
      'Full-Time Position: Work as a junior web developer or designer.',
      'Portfolio Development: Continuously update your portfolio with professional and personal projects.',
    ],
  },
  {
    year: 5,
    title: 'Mastery and Leadership',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
      'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
    ],
  },
]

// Skills
export const skillsData = [
  {
    title: 'Programming Languages',
    description: '(C, C++, JavaScript, TypeScript, Python, R, SQL)'
  },
  {
    title: 'Web Design & Development',
    description: '(HTML, CSS, Tailwind CSS, JavaScript, TypeScript)'
  },
  {
    title: 'Frontend JavaScript Frameworks',
    description: '(React, Next, Vite)'
  },
  {
    title: 'Backend Frameworks',
    description: '(Node.js, Express.js, Python)'
  },
  {
    title: 'Database Management System',
    description: '(MongoDB, Mongoose, Prisma ORM, Postgres)'
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: '(PyTorch, Tensorflow, Keras, OpenCV, OpenAI, LangChain, Hugging Face, YOLO)'
  },
  {
    title: 'DevOps & Version Control',
    description: '(Docker, AWS, Google Cloud, Git, GitHub)'
  },
  {
    title: 'Miscellaneous',
    description: '(LaTeX, Canva, SmartPLS, Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop)'
  }
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
// export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Kenji Tateiwa, Founder and CEO, Agile Energy X(TEPCO Japan)',
    comment:
    "Arghadeep’s passion for sustainable energy, technical capability, and curiosity greatly impressed our team. He embraced Japanese work culture with diligence and delivered an outstanding performance."

  },
  {
    image: '/reviews/client-2.png',
    name: 'Prof. Robert Güttel (Ulm University, Germany)',
    comment:
      "Arghadeep showed remarkable proficiency in experimental research and data analysis, consistently delivering insightful results. His enthusiasm, initiative, and teamwork made him a valuable contributor to our research group."

  },
  {
    image: '/reviews/client-1.png',
    name: 'Dr. Koustuv Ray (IIT Kharagpur, India)',
    comment:
      "Arghadeep ranks among the top 10% of students I have taught, with outstanding writing ability and research skills. He combines deep passion for Chemical Engineering with excellent problem-solving and communication skills."
  }
]

// Projects
export const projectsData = [
  {
    name: 'SparkleGrove.com',
    desc: 'A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.',
    url: '/projects/image-1.jpg',
    tech: ['Tech', 'Research & Development']
  },
  {
    name: 'TechTrekker.net',
    desc: 'A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.',
    url: '/projects/image-2.jpg',
    tech: ['Figma', 'Photoshop'],
  },
  {
    name: 'CozyNestHomes.org',
    desc: 'A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.',
    url: '/projects/image-3.jpg',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'WanderLuxeTravels.co',
    desc: 'A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.',
    url: '/projects/image-4.jpg',
    tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
  },
  {
    name: 'ByteBoosters.io',
    desc: 'A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.',
    url: '/projects/image-5.jpg',
    tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
  },
  {
    name: 'GreenLeafGardens.biz',
    desc: 'An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.',
    url: '/projects/image-6.jpg',
    tech: ['ReactJS', 'TailwindCSS', , 'CSS', 'FramerMotion'],
  },
  {
    name: 'PixelPerfectDesigns.info',
    desc: 'A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.',
    url: '/projects/image-7.jpg',
    tech: ['NextJS', 'FramerMotion'],
  },
  {
    name: 'HarmonyHealthHub.com',
    desc: ' A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.',
    url: '/projects/image-8.jpg',
    tech: ['NextJS', 'ReactJS', 'FramerMotion'],
  },
  {
    name: 'StellarSkiesAstronomy.org',
    desc: 'An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.',
    url: '/projects/image-9.jpg',
    tech: ['ReactJS', 'JavaScript', 'ThreeJS'],
  },
  {
    name: 'UrbanEatsDelights.com',
    desc: 'An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.',
    url: '/projects/image-10.jpg',
    tech: ['NextJS', 'ThreeJS'],
  },
]

export const projectsButton = [
  'All',
  'Tech',
  'Chemical Engineering',
  'Computer Vision',
  'Artificial Intelligence',
  'Case Studies',
  'Research & Development'
]



import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A
export const questions = [
  {
    question: 'Baden Wurttemberg Stiftung 2024',
    answer: 'Awarded for excellence in cross-national research exchange between India and Germany.',
    certificateLink: '/certificates/BadenWurttembergAwardArg.pdf',
    hasLink: true
  },
  {
    question: 'IIT KGP Foundation Scholarship, USA (2024)',
    answer: 'Awarded for academic excellence and research contributions at IIT Kharagpur',
    certificateLink: '/certificates/IITKGPF_ARG.pdf', // Add your PDF path
    hasLink: true
  },
  {
    question: '1st Place – Annual Chemical Engineering Competition (2025)',
    answer: 'Represented IIT Kharagpur at the Calcutta Regional Centre, IIChE Quiz Competition (Jadavpur University); won after 4 technical rounds, a rapid-fire, and a tie-breaker among 30 teams from different colleges all over India.',
    certificateLink: '/certificates/Certificate_Arghadeep.pdf', // Add your PDF path
    hasLink: true
  }
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'about',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'reviews',
    name: 'LOR',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <ProjectorLineIcon />,
  },

   {
    id: 'questions',
    name: 'Awards',
    icon: <QuestionAnswerLineIcon />,
  },
  
  {
    id: 'contact',
    name: 'Contact',
    icon: <ContactsBook2LineIcon />,
  }
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
