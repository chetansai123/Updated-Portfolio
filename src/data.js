// ══════════════════════════════════════════
//   EDIT ONLY THIS FILE TO UPDATE CONTENT
// ══════════════════════════════════════════
import {
  VirtualAssistant,
  YoutubeClone,
  GfgCert,
  GuessGame,
  AccentureCert,
  JPCert,
  KareerGuru,
} from "./images/index";
export const meta = {
  name: "Chetan Sai",
  email: "chetansai.official@gmail.com",
  phone: "+919381827307",
  location: "Hyderabad, India",
  github: "https://github.com/chetansai123",
  linkedin: "https://www.linkedin.com/in/chetan-sai-96445a227/",
  resume:
    "https://drive.google.com/file/d/1O9ChYqnTmdTdiBLDS2peXemW4AYIHoz1/view",
  bio: "A Full Stack Developer passionate about building responsive and interactive applications. I thrive on MERN stack adventures — crafting efficient back-end APIs with Node.js and Express while building clean front-end interfaces with React. Ready to explore any techstacks and wear multiple hats in a role. Currently deepening my understanding of Data Structures and Algorithms using Java. ",
};

export const experience = [
  {
    company: "Oracle",
    location: "Hyderabad, India",
    roles: [
      {
        id: "oracle-se",
        title: "Software Engineer",
        period: "1 YEAR · PROFESSIONAL",
        highlights: [
          "Worked on Oracle NetSuite, contributing to enterprise manufacturing and inventory management features.",
          "Built the Manufacturing Task Scheduler SPA using Oracle UIF (React-based framework), enabling real-time Gantt chart visualization and drag-and-drop scheduling of work orders.",
          "Developed responsive UI components and front-end pages using SuiteScript (JavaScript API) to enhance usability and cross-browser compatibility.",
          "Diagnosed and fixed critical backend issues in NetSuite’s Java-based Item Fulfillment and Inventory Detail modules through systematic debugging.",
          "Tech: React · JavaScript · Oracle UIF · SuiteScript · Java · NetSuite",
        ],
      },
    ],
  },
  {
    company: "Ten20 Infomedia",
    location: "Hyderabad, India",
    roles: [
      {
        id: "ten20-se",
        title: "Software Engineer",
        period: "1+ YEAR · PROFESSIONAL",
        highlights: [
          "Worked as a MERN Full-Stack Developer on Alohaa, a telecom communication platform for automated calling and secure call routing.",
          "Built the VoiceBroadcast feature, enabling automated IVR campaigns with React dashboards for campaign management and call analytics.",
          "Developed the NumberMasking feature for secure call routing, protecting users’ personal phone numbers during customer-agent interactions.",
          "Implemented webhook pipelines to capture call completion events (DTMF inputs, call duration, call status) and update campaign metrics on dashboards.",
          "Designed RabbitMQ retry queues to manage dropped calls and enable controlled retries during large outbound campaigns.",
          "Tech: React · JavaScript · Node.js · Express · MongoDB · RabbitMQ · MERN Stack",
        ],
      },
      {
        id: "ten20-in",
        title: "Software Engineer Intern",
        period: "4 MONTHS · INTERNSHIP",
        highlights: [
          "Contributed to backend APIs for the NumberMasking feature, implementing core logic and handling edge cases.",
          "Developed React UI components to improve usability across the feature workflow.",
          "Participated in agile sprint development, collaborating on MERN-based feature releases and peer code reviews.",
        ],
      },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    school: "Guru Nanak Institue of Technology",
    location: " Hyderabad, India",
    period: "JUNE 2019 – JULY 2023",
    icon: "🎓",
  },
];

export const skills = [
  {
    label: "Frontend",
    tags: ["React", "JavaScript", "HTML5", "CSS3", "Material UI", "Redux"],
  },
  {
    label: "Backend",
    tags: ["Node.js", "Express.js", "SQL", "MongoDB", "RESTful APIs"],
  },
  { label: "Languages", tags: ["JavaScript", "Java"] },
  { label: "Tools", tags: ["Git", "GitHub", "Docker", "VS Code", "Postman"] },
];

// To add project images: put screenshots in public/images/ and set img field
// e.g. img: '/images/virtual-assistant.jpg'
export const projects = [
  {
    title: "KareerGuru",
    desc: "An AI-powered career assistant that generates resumes, cover letters, interview quizzes, and industry insights using Next.js and the Gemini API.",
    stack: [
      "ReactJS",
      "NextJS",
      "Shadcn UI",
      "Gemini API",
      "Clerk",
      "Prisma",
      "NeonDB",
      "Inngest",
    ],
    img: KareerGuru,
    fallback:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=75&fit=crop",
    link: "https://kareer-guru.vercel.app/",
  },
  {
    title: "YouTube Clone",
    desc: "A YouTube Clone developed using ReactJS and Material UI with real video feed and search integration.",
    stack: ["ReactJS", "Material UI"],
    img: YoutubeClone,
    fallback:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=75&fit=crop",
    link: "https://youtube-clone-standard.netlify.app/",
  },
  {
    title: "Virtual Assistant Using Python",
    desc: "A voice-command assistant that helps you access and open pages and applications from your running program using voice commands.",
    stack: ["Python"],
    img: VirtualAssistant,
    fallback:
      "https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&q=75&fit=crop",
    link: "https://github.com/chetansai123/VirtualAssistant",
  },
  {
    title: "Guess The Number Game",
    desc: "A program to guess the number generated by a computer. The number of attempts taken will be counted.",
    stack: ["Java"],
    img: GuessGame,
    fallback:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=75&fit=crop",
    link: "https://github.com/chetansai123/GuessingGame",
  },
];

// Update link to your actual Forage completion certificate PDF
export const certifications = [
  {
    name: "Software Engineering Virtual Experience",
    org: "JP Morgan Chase & Co. · Forage",
    date: "Aug 19, 2022",
    link: "https://drive.google.com/file/d/1k3a7ZmkIYhJfS8dz5tibHWzsbHbb3dZL/view",
    // img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/J.P._Morgan_Logo_2008_1.svg/320px-J.P._Morgan_Logo_2008_1.svg.png',
    img: JPCert,
  },
  {
    name: "Developer & Technology Program",
    org: "Accenture · Forage",
    date: "Aug 13, 2022",
    link: "https://drive.google.com/file/d/1dAk56vou348owRRz_X4oiXvYhVf9p-F8/view",
    // img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png',
    img: AccentureCert,
  },
  {
    name: "DSA Bootcamp Certificate",
    org: "GeeksforGeeks",
    date: "Oct 4–15, 2022",
    link: "https://drive.google.com/file/d/1w_ux0QE2wC1ZXuRmSgneQJHpfNefdsUU/view",
    // img: 'https://media.geeksforgeeks.org/gfg-gg-logo.svg',
    img: GfgCert,
  },
];
