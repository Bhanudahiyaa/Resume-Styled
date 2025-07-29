import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
  HIDDEN: boolean;
}

export interface IExperienceData {
  WEBSITE: string;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
  LOGO: string;
}

export const DATA = {
  HEADER: {
    NAME: "Bhanu Pratap Singh",
    AGE: "20",
    PRONOUN: "he/him",
    HEADLINE:
      "Full-stack developer who loves building efficient, scalable, and intuitive applications.",
    RESUME:
      "https://drive.google.com/file/d/1m-0VhgvIMA1F-nX1upAT-HbgcDE52LQw/view?usp=sharing",
    EMAIL: "mailto:bhanudahiya8@gmail.com",
    GITHUB: "https://github.com/Bhanudahiyaa",
    LINKEDIN: "https://www.linkedin.com/in/bhanupratap1/",
  },

  ABOUT_ME: {
    EXPERTISE:
      "My expertise lies in Next, React, TypeScript, Postgres, and cloud technologies. I enjoy bringing ideas to life through interactive and accessible software.",
  },

  EXPERIENCE: {
    FirstContact: {
      WEBSITE: "https://firstcontact.lgbt",
      POSITION: "Backend Developer Intern",
      LOCATION: "Remote",
      DURATION: "June, 2025 - August, 2025",
      DESCRIPTION: [
        "Built and maintained backend logic for dynamic CMS content rendering and automated workflows.",
        "Handled server-side bug fixes to ensure stability and performance.",
        "Streamlined CMS data handling and reduced downtime through effective debugging.",
      ],
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Vercel",
        "Git & Github",
      ],
      LOGO: "https://media.licdn.com/dms/image/v2/C4D0BAQHKECKlMF9lJA/company-logo_100_100/company-logo_100_100/0/1674622682688/first_contact_lgbt_logo?e=1756944000&v=beta&t=fEvtYu_sd7KuIF4xunJW9wBc7aH05YTJnoTCmgceURY",
    },
  },

  PROJECTS: {
    "Market Pulse": {
      SLUG: "market-pulse",
      LIVE_PREVIEW: "https://call2-codecore4.vercel.app/",
      GITHUB: "https://github.com/Bhanudahiyaa/Call2Code",
      DESCRIPTION: [
        "Built in 48 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
        "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish), and voice-controlled navigation using Web Speech API.",
        "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
      ],
      TECH_STACK: [
        "React.js",
        "TypeScript",
        "TailwindCSS",
        "Supabase",
        "Web Speech API",
      ],
      IMAGE: {} as StaticImageData, // Placeholder – replace with actual image
      HIDDEN: false,
    },
    "SQL QueryPilot": {
      SLUG: "sql-querypilot",
      LIVE_PREVIEW: "https://sql-querypilot.streamlit.app/",
      GITHUB: "https://github.com/Bhanudahiyaa/SQL-QueryPilot",
      DESCRIPTION: [
        "Converts natural language into SQL, reducing query time by 90x and improving accessibility for 250+ non-tech users.",
        "Integrated editable SQL previews with live execution on 20+ databases.",
        "Deployed on Streamlit Cloud with zero-downtime CI/CD, sub-2s results.",
      ],
      TECH_STACK: ["Python", "Streamlit", "SQLite", "Google Gemini Pro"],
      IMAGE: {} as StaticImageData,
      HIDDEN: false,
    },
    "Personal Finance Tracker": {
      SLUG: "finance-tracker",
      LIVE_PREVIEW: "https://ledger-uwu-znsd.vercel.app/",
      GITHUB: "https://github.com/Bhanudahiyaa/Ledger-uwu",
      DESCRIPTION: [
        "Real-time income/expense tracking used by 30+ users.",
        "CSV import/export for 1000+ records using custom parsing.",
        "Responsive Recharts for visualizations.",
      ],
      TECH_STACK: [
        "React.js",
        "Firebase",
        "Firestore",
        "Recharts",
        "PapaParse",
      ],
      IMAGE: {} as StaticImageData,
      HIDDEN: false,
    },
  },

  ALL_PROJECTS: "https://github.com/Bhanudahiyaa",

  BLOGS: {
    "Finalist – Call2Code Hackathon, MUJ": {
      DATE: "April 2025",
      TIME: "",

      DESCRIPTION:
        "Built an AI-powered stock market dashboard with multilingual voice command support, real-time analytics, and sentiment analysis. Selected as a finalist among 100+ teams.",
      LINK: "https://call2-codecore4.vercel.app/",
    },
    "Semi-Finalist – BitBash Hackathon, NIT Kurukshetra": {
      DATE: "March 2025",
      TIME: "",
      DESCRIPTION:
        "Developed a real-world solution under 24-hour time constraints; recognized as one of the top-performing teams.",
      LINK: "",
    },
  },

  SKILLS: {
    Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
    Frameworks: ["React.js", "Next.js", "Node.js", "Express.js"],
    Libraries: ["Tailwind CSS", "Framer Motion"],
    "Database & Backend": ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
    "Cloud & Deployment": ["Streamlit Cloud", "Vercel"],
    "Tools & Platforms": ["Git", "GitHub"],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
