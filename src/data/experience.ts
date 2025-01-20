import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Septembre 2022 - Août 2024",
    title: "Développeur backend",
    company: "StudioHB",
    companyUrl: "https://www.studio-hb.com/",
    description:
      "Designed and architected dutch.com, utilizing technologies such as Shopify Storefront API, Admin API, Vue.JS, Node.JS, Liquid, Alpine.js, and Tailwind. Worked on integrating with the ReCharge subscription system and collaborated closely with designers to implement pixel-perfect layouts and user flows.",
    technologies: [
      "Ruby on Rails",
      "Stimulus JS",
      "Tailwind",
      "Bootstrap",
      "Docker",
    ],
    logo: "/logos/shb.jpeg",
  },
  {
    dates: "March 2021 — November 2021",
    title: "Développeur backend",
    company: "CitronMauve",
    companyUrl: "",
    description:
      "Developed and maintained e-commerce solutions on Shopify (Storefront API, Admin API), BigCommerce, and Magento using React JS, Vue JS, Node JS, Liquid, SASS/PostCSS. Worked on integrating with the ReCharge subscription system and collaborated closely with designers to implement pixel-perfect layouts and user flows.",
    technologies: [
      "Ruby",
      "RabbitMQ",
      "Sequel",
      "GrPC",
      "Warden",
      "Docker",
    ],
    logo: "/logos/citronmauve.png",
  },
  {
    dates: "December 2019 — January 2021",
    title: "Développeur frontend",
    company: "",
    companyUrl: "",
    description:
      "Created a Design System for the internal system using Figma. Developed a plugin for Figma to populate prototypes with real data to enhance the prototyping and testing experience. Conducted user research and testing, and created user flows, wireframes, and Hi-Fi prototypes.",
    technologies: ["VueJS"],
    logo: "/logos/miinto.jpeg",
  },
  {
    dates: "January 2019 — September 2019",
    title: "Développeur fullstack",
    company: "",
    companyUrl: "",
    description:
      "Création from scratch d'une application de gestion de maintenance",
    technologies: ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
    logo: "/logos/efigence.jpeg",
  },
];
