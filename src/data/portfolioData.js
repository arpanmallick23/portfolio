export const PERSONAL_INFO = {
  name: "Arpan Mallick",
  shortIntro: "Hello, I'm",
  title: "Full-Stack Developer | Aspiring Software Engineer",
  tagline: "I build scalable web applications, solve real-world problems, and turn ideas into functional digital experiences.",
  email: "arpan.23mallick@gmail.com",
  github: "https://github.com/arpanmallick23",
  linkedin: "https://www.linkedin.com/in/arpan-mallick",
  leetcode: "https://leetcode.com/u/lVQGpQBMRE/",
  resumePath: "/Arpan-Mallick-Resume.pdf",
  aboutText: "I am a Computer Science and Engineering student passionate about software development, full-stack engineering, and problem-solving. I enjoy building practical applications, exploring new technologies, and developing solutions that solve real-world challenges.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Future Institute of Engineering & Management",
    cgpa: "8.40 / 10",
    period: "Up to 6th semester"
  }
};

export const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "TypeScript", "C"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs"]
  },
  {
    category: "Databases & ORM/ODM",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Mongoose"]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Cloudinary", "Multer"]
  },
  {
    category: "Core CS Concepts",
    icon: "Cpu",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems"]
  }
];

export const EXPERIENCES = [
  {
    company: "Beas Consultancy and Services Private Limited",
    role: "Software Development Intern",
    duration: "August 2026 – Present",
    badge: "Current",
    highlights: [
      "Contributed to a full-stack Restaurant ERP platform, developing inventory management, Bill of Materials (BOM), and production planning features using React, NestJS, PostgreSQL, and Prisma.",
      "Developed features for a Durga Puja Management Platform, implementing category-based nominations, voting workflows, fraud logging, and leaderboard aggregation.",
      "Worked on REST APIs, database schema design, Prisma migrations, and backend validation to support reliable application workflows."
    ],
    technologies: ["React", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "REST APIs"]
  }
];

// Curated priority order for Featured Projects
export const FEATURED_PROJECT_NAMES = [
  'mygpt',
  'wanderlust',
  'campustrack'
];

// Internship & Company Projects showcase (kept strictly separate from personal public GitHub repos)
export const INTERNSHIP_PROJECTS = [
  {
    id: "foodyply",
    title: "Foodyply – Restaurant ERP System",
    type: "Internship Work",
    isInternship: true,
    company: "Beas Consultancy and Services Pvt. Ltd.",
    description: "Contributed to inventory management, Bill of Materials (BOM), and production planning modules for enterprise restaurant management.",
    bullets: [
      "Contributed to inventory management, Bill of Materials (BOM), and production planning modules.",
      "Worked on REST APIs, database schema design, and Prisma migrations.",
      "Built robust backend validations and data pipelines for high reliability in operations."
    ],
    technologies: ["React", "NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    githubUrl: null,
    liveUrl: null
  },
  {
    id: "sharad-samman",
    title: "Durga Puja Management – Sharad Samman Voting Module",
    type: "Internship Work",
    isInternship: true,
    company: "Beas Consultancy and Services Pvt. Ltd.",
    description: "Implemented category-based nomination workflows, fair voting mechanisms, fraud logging, and real-time leaderboard aggregation.",
    bullets: [
      "Implemented category-based nomination workflows and committee evaluation flows.",
      "Worked on voting workflows, fraud logging mechanisms, and leaderboard aggregation.",
      "Contributed to database constraints, migrations, and robust backend validation."
    ],
    technologies: ["React", "NestJS", "PostgreSQL", "Prisma"],
    githubUrl: null,
    liveUrl: null
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Top 10 YGPA Holder",
    subtitle: "2nd Year B.Tech – Computer Science & Engineering",
    description: "Recognized among the top 10 academic achievers across the department for exemplary academic performance and consistent technical excellence.",
    year: "Academic Merit",
    icon: "Award",
    primaryLabel: "Academic Excellence",
    secondaryLabel: "Medal + Certificate"
  },
  {
    title: "3rd Place – Innovate & Present 2026",
    subtitle: "Departmental Project Competition",
    description: "Awarded 3rd place for designing and presenting an innovative software engineering solution demonstrating architectural soundness and practical applicability.",
    year: "2026",
    icon: "Trophy",
    primaryLabel: "Departmental Competition",
    secondaryLabel: "3rd Place Certificate"
  }
];
