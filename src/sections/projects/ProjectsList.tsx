import { ProjectData } from "../../models/ProjectData";

import powerforge1 from "../../images/powerforge-fitness/1.png";
import powerforge2 from "../../images/powerforge-fitness/2.png";
import powerforge3 from "../../images/powerforge-fitness/3.png";
import powerforge4 from "../../images/powerforge-fitness/4.png";

import travel1 from "../../images/travel-memories/1.png";
import travel2 from "../../images/travel-memories/2.png";
import travel3 from "../../images/travel-memories/3.png";
import travel4 from "../../images/travel-memories/4.png";
import travel5 from "../../images/travel-memories/5.png";

import finance1 from "../../images//finance-manager/1.png";
import finance2 from "../../images//finance-manager/2.png";
import finance3 from "../../images//finance-manager/3.png";

export const ProjectsList: ProjectData[] = [
  {
    name: "Powerforge Fitness",
    description:
      "MERN stack web application designed to assist individuals in their fitness journey. Website consists of workout routines, progress tracker with charts for data analysis and a BMI calculator. Backend REST service is responsible for saving user progress to MongoDB database.",
    technologies: "React, Node.js, TypeScript, MongoDB, Express, TaiwlindCSS",
    githubLink: "https://github.com/Fijalkowskim/Powerforge-Fitness",
    websiteLink: "https://fijalkowskim.github.io/Powerforge-Fitness/",
    images: [powerforge1, powerforge2, powerforge3, powerforge4],
  },
  {
    name: "Travel Memories",
    description:
      "Spring boot, React web app designed to publish and share photos from travels. Users can create travels, add images, browse public photos and create slideshows from their journeys. Connection to Google Maps API enables precise location picking and Spring backend service takes care of user authentication and preserves data in MySQL database.",
    technologies:
      "Spring Boot, Hibernate, React, TypeScript, MySQL, Google Maps API, TailwindCSS",
    githubLink: "https://github.com/Fijalkowskim/TravelMemories",
    images: [travel1, travel2, travel3, travel4, travel5],
  },
  {
    name: "Finance Manager",
    description:
      "Sping boot, React application developed to help users manage their finances efficiently. After adding their expenses, users can analize data through various charts, view and sort the history and plan their future expenses.",
    technologies:
      "Spring Boot, Hibernate, React, TypeScript, MySQL, TailwindCSS",
    githubLink: "https://github.com/Fijalkowskim/FinanceManager",
    images: [finance1, finance2, finance3],
  },
];
