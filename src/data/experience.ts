import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "2022 - 2024",
    title: "Développeur backend",
    company: "StudioHB",
    companyUrl: "https://www.studio-hb.com/",
    description:
      "Participation à la maintenance et à l'évolution de plateformes web pour assurer leur performance, leur fiabilité en adéquation avec les besoins des utilisateurs. Cela inclut l’identification et la résolution des problèmes techniques, l’implémentation de nouvelles fonctionnalités, et l’optimisation des performances et de l’expérience utilisateur.",
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
    dates: "2021 — 2022",
    title: "Développeur backend",
    company: "CitronMauve",
    companyUrl: "",
    description:
      "Création from scratch d'un scraper de donnée en Ruby. Développement d'une application de gestion et de mise en place de sauvegardes à distance (Avamar), de supervision de divers postes (Zabbix) et de prise en main à distance (ISL). L'architecture est composée d'une API Ruby on Rails et de trois microservices en Ruby le frontend est en VueJS.",
    technologies: [
      "Ruby",
      "Ruby on Rails",
      "Rspec",
      "VuejS",
      "RabbitMQ",
      "Zabbix",
      "Avamar",
      "Sequel",
      "GrPC",
      "Warden",
      "Docker",
    ],
    logo: "/logos/citronmauve.png",
  },
  {
    dates: "2021",
    title: "Développeur frontend",
    company: "",
    companyUrl: "",
    description:
      "Conception et développement d’un site vitrine",
    technologies: ["VueJS"],
    logo: "/logos/default.png",
  },
  {
    dates: "2021",
    title: "Développeur fullstack",
    company: "",
    companyUrl: "",
    description:
      "Conception et développement d’une application de gestion de maintenance d’équipement.",
    technologies: ["Ruby on Rails", "Bootstrap", "PostgreSQL"],
    logo: "/logos/default.png",
  },
];
