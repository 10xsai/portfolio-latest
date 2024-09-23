import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import InstagramIcon from "public/assets/icons/social/instagram.svg";
import GithubIcon from "public/assets/icons/social/github.svg";
import XIcon from "public/assets/icons/social/x.svg";
import LinkedInIcon from "public/assets/icons/social/linkedin.svg";

export const DATA = {
  name: "Sai Krishna",
  initials: "DV",
  url: "https://10xsai.com",
  location: "Andhra Pradesh, India",
  locationLink: "https://g.co/kgs/fAyX7iU",
  description:
    "A versatile problem-solver with deep expertise across AI, Data Science, Web Development, and DevOps, I craft innovative solutions by choosing the best technologies for the challenge at hand. From development to deployment, I bring ideas to life with precision and impact.",
  summaryPart1:
    "Hi! I’m **Sai Krishna**, a passionate technologist from *Andhra Pradesh, India* 🇮🇳. My journey in the world of tech started with a simple curiosity about how things work, which soon grew into a deep passion for building impactful solutions. With over **4 years of experience** as a **Full Stack Developer** and **AI Consultant**, I’ve had the privilege of working on diverse projects—from **AI-powered chatbots** to **scalable cloud architectures**.",
  summaryPart2: `
🌍 **Languages I Speak**:  
- *Telugu* (Mother Tongue)  
- *Hindi*  
- *English*

What sets me apart is my philosophy: *I choose technology based on the problem, not my comfort zone*. Whether it's **Python**, **JavaScript**, **TypeScript**, or platforms like **Django**, **React**, and **AWS**, I always strive to use the best tools for the job to deliver the most effective solutions.

Beyond the code, I’m a firm believer in continuous learning and sharing knowledge. I’ve taught many people through web development courses, and nothing motivates me more than helping others grow and succeed. Every day, I push myself to be better—whether it’s leading teams, solving complex technical problems, or learning something new.

💡 **My Mission**: To build products that *don’t just work* but *make a difference*. From **development to deployment**, I’m here to bring your vision to life, tackling challenges with creativity, precision, and a love for the craft.

Let’s build the future together! 🌟

  `,
  avatarUrl: "/me.JPG",
  skills: {
    // Array of domains and corresponding technologies
    domains: [
      "Languages",
      "Frontend",
      "Backend",
      "Databases",
      "DevOps",
      "AI & Data",
      "Testing",
      // "Concepts",
    ],
    // Example technologies (replace these with actual Icons or badges)
    technologies: [
      [
        {
          src: "/assets/icons/languages/python.png",
          alt: "python logo",
          tooltip: "python",
        },
        {
          src: "/assets/icons/languages/javascript.png",
          alt: "javascript logo",
          tooltip: "javascript",
        },
        {
          src: "/assets/icons/languages/typescript.png",
          alt: "typescript logo",
          tooltip: "typescript",
        },
        {
          src: "/assets/icons/languages/java.png",
          alt: "java logo",
          tooltip: "java",
        },
      ], // Languages
      [
        {
          src: "/assets/icons/frontend/react.png",
          alt: "react logo",
          tooltip: "react",
        },
        {
          src: "/assets/icons/frontend/redux.png",
          alt: "redux logo",
          tooltip: "redux",
        },
        {
          src: "/assets/icons/frontend/nextjs.png",
          alt: "nextjs logo",
          tooltip: "nextjs",
        },
        {
          src: "/assets/icons/frontend/angular.png",
          alt: "angular logo",
          tooltip: "angular",
        },
        {
          src: "/assets/icons/frontend/mui.png",
          alt: "mui logo",
          tooltip: "mui",
        },
        {
          src: "/assets/icons/frontend/tailwindcss.png",
          alt: "tailwindcss logo",
          tooltip: "tailwindcss",
        },
        {
          src: "/assets/icons/frontend/figma.png",
          alt: "figma logo",
          tooltip: "figma",
        },
      ], // Frontend
      [
        {
          src: "/assets/icons/backend/django.png",
          alt: "django logo",
          tooltip: "django",
        },
        {
          src: "/assets/icons/backend/drf.png",
          alt: "drf logo",
          tooltip: "drf",
        },
        {
          src: "/assets/icons/backend/fastapi.png",
          alt: "fastapi logo",
          tooltip: "fastapi",
        },
        {
          src: "/assets/icons/backend/nodejs.png",
          alt: "nodejs logo",
          tooltip: "nodejs",
        },
        {
          src: "/assets/icons/backend/molecularjs.png",
          alt: "molecularjs logo",
          tooltip: "molecularjs",
        },
        {
          src: "/assets/icons/backend/springboot.png",
          alt: "springboot logo",
          tooltip: "springboot",
        },
        {
          src: "/assets/icons/backend/graphql.png",
          alt: "graphql logo",
          tooltip: "graphql",
        },
      ], // Backend
      [
        {
          src: "/assets/icons/databases/mysql.png",
          alt: "mysql logo",
          tooltip: "mysql",
        },
        {
          src: "/assets/icons/databases/postgres.png",
          alt: "postgres logo",
          tooltip: "postgres",
        },
        {
          src: "/assets/icons/databases/mongodb.png",
          alt: "mongodb logo",
          tooltip: "mongodb",
        },
        {
          src: "/assets/icons/databases/redis.png",
          alt: "redis logo",
          tooltip: "redis",
        },
      ], // Databases
      [
        {
          src: "/assets/icons/cloud/aws.png",
          alt: "aws logo",
          tooltip: "aws",
        },
        {
          src: "/assets/icons/cloud/digital_ocean.png",
          alt: "digital_ocean logo",
          tooltip: "digital_ocean",
        },
        {
          src: "/assets/icons/cloud/ovh.png",
          alt: "ovh logo",
          tooltip: "ovh",
        },
        {
          src: "/assets/icons/cloud/nginx.png",
          alt: "nginx logo",
          tooltip: "nginx",
        },
        {
          src: "/assets/icons/cloud/docker.png",
          alt: "docker logo",
          tooltip: "docker",
        },
        {
          src: "/assets/icons/cloud/kubernetes.png",
          alt: "kubernetes logo",
          tooltip: "kubernetes",
        },
      ], // Cloud & DevOps
      [
        {
          src: "/assets/icons/ai/airflow.png",
          alt: "airflow logo",
          tooltip: "airflow",
        },
        {
          src: "/assets/icons/ai/langchain.png",
          alt: "langchain logo",
          tooltip: "langchain",
        },
        {
          src: "/assets/icons/ai/llama.png",
          alt: "llama logo",
          tooltip: "llama",
        },
        {
          src: "/assets/icons/ai/chroma.png",
          alt: "chroma logo",
          tooltip: "chroma",
        },
      ], // AI & Data
      [
        {
          src: "/assets/icons/testing/selenium.png",
          alt: "selenium logo",
          tooltip: "selenium",
        },
        {
          src: "/assets/icons/testing/jest.png",
          alt: "jest logo",
          tooltip: "jest",
        },
        {
          src: "/assets/icons/testing/pytest.png",
          alt: "pytest logo",
          tooltip: "pytest",
        },
        {
          src: "/assets/icons/testing/sonarqube.png",
          alt: "sonarqube logo",
          tooltip: "sonarqube",
        },
      ], // Testing
    ],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "https://blog.10xsai.com/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "10xsai.official@gmail.com",
    // tel: "+123456789",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/10xsai/",
        navbar: true,
        icon: LinkedInIcon,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/10xsai.official/",
        navbar: true,
        icon: InstagramIcon,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/10xsai",
        navbar: true,
        icon: GithubIcon,
      },
      X: {
        name: "X",
        url: "https://x.com/10xsai",
        navbar: true,
        icon: XIcon,
      },
      // // Youtube: {
      // //   name: "Youtube",
      // //   url: "https://dub.sh/dillion-youtube",
      // //   icon: Icons.youtube,
      // //   navbar: true,
      // // },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Guidizy",
      href: "https://guidizy.com/",
      badges: ["Full Time", "Remote", "United Kingdom"],
      location: "Remote",
      title: "Full Stack Engineer & AI Consultant",
      logoUrl: "/guidizy_logo.png",
      start: "Sep 2023",
      end: "Present",
      description:
        "Guidizy is an AI-powered platform where I pioneered the development of key features, including an advanced chatbot using Django, React, and Langchain. I led a team to implement a Role-Based Access Control system, optimize performance with Redis caching, and introduced AI-driven features like Retrieval-Augmented Generation for PDF document interrogation.",
    },
    {
      company: "LTI Mindtree",
      href: "https://www.ltimindtree.com/",
      badges: ["Full Time", "OnSite", "Hyderabad"],
      location: "Hyderabad, India",
      title: "Full Stack Engineer",
      logoUrl: "/LTIM_logo.png",
      start: "Jun 2021",
      end: "Mar 2023",
      description:
        "At LTI Mindtree, I was responsible for building scalable internal tools such as a Resource Management System using Django and React. I also engineered a robust ETL pipeline using AWS and Apache Airflow, automating data flows across services and enhancing overall application stability through comprehensive bug detection and resolution with SonarQube.",
    },
    {
      company: "CardTap",
      href: "https://cardtap.net/",
      badges: ["Part Time", "Remote", "United States"],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/cardtap_logo.png",
      start: "Mar 2021",
      end: "Oct 2022",
      description:
        "At CardTap, I led the end-to-end development of a lab resource management portal deployed for use at Oregon State University. Using Django and AWS, I implemented a secure authentication system for over 500 users and developed a CI/CD pipeline that significantly reduced deployment time.",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Raipur",
      href: "https://nitrr.ac.in/",
      degree: "Bachelor of Technology",
      logoUrl: "/nitrr.gif",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Portfolio 2023",
      href: "https://magicui.design",
      dates: "Apr 2023 - May 2023",
      active: true,
      description:
        "Personal portfolio and a personal blog is always a nice thing to have, so I handcrafted one for myself to showcase my blogs and projects",
      technologies: [
        "Next.js",
        "Typescript",
        "Sass",
        "Prism",
        "MDX",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://2023.10xsai.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/10xsai/portfolio-2023",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://10xsai-portfolio.s3.eu-north-1.amazonaws.com/projects/videos/porfolio_2023.mp4",
    },
    {
      title: "CardTap Portal",
      href: "https://cardtap.net/",
      dates: "Mar 2021 - Oct 2022",
      active: true,
      description:
        "CardTap is a lab equipment access control and management solution. Ideveloped a web portal from the ground up. Also I developed a backend formanaging IOT devices.Cardtap portal is a dashboard app, used to interact with IOT hardware andlab equipment. Currently cardtap is used by OSU(Oregon state university).",
      technologies: [
        "Python",
        "Django",
        "Django Rest Framework",
        "MySQL",
        "Bootstrap",
        "Docker",
        "Github Actions",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cardtap.net/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://10xsai-portfolio.s3.eu-north-1.amazonaws.com/projects/videos/cardtap_video.mov",
    },
    {
      title: "WorkBud Portal",
      href: "https://llm.report",
      dates: "Dec 2021 - Jan 2022",
      active: true,
      description:
        "Worked as backend developer at Workbud. Workbud was an early stagestartup with a 14 member team when I joined. Worked on marketplacefeatures for managing rfp’s and proposals from manufacturing companiesand staffing companies.",
      technologies: ["Django", "Django Rest Framework"],
      links: [
        {
          type: "Website",
          href: "https://www.workbud.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://10xsai-portfolio.s3.eu-north-1.amazonaws.com/projects/videos/workbud_video.mp4",
    },
    {
      title: "Resource Management Tool",
      href: "https://automatic.chat",
      dates: "Jun 2021 - Mar 2023",
      active: true,
      description:
        "Led the development of an internal tool RMS (Resource Management System) using Django, and React. Engineered an ETL pipeline using Apache Airflow, integrating various AWS services such as S3, S3 Select, MWAA, and ECS, ensuring seamless data flow and transformation for large-scale datasets",
      technologies: [
        "Springboot",
        "Angular",
        "Apache Airflow",
        "AWS",
        "Material UI",
      ],
      links: [],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
