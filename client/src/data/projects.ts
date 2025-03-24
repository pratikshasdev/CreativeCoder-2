interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  categoryLabel: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A complete redesign of an e-commerce platform focusing on improving the user journey and increasing conversion rates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["ux-design", "ui-design"],
    categoryLabel: "UX/UI Design",
    technologies: ["Figma", "Shopify", "User Testing"],
    link: "https://example.com/project1"
  },
  {
    id: 2,
    title: "Banking Dashboard",
    description: "A responsive dashboard for a financial institution with real-time data visualization and secure authentication.",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["development"],
    categoryLabel: "Development",
    technologies: ["React", "D3.js", "Firebase"],
    link: "https://example.com/project2"
  },
  {
    id: 3,
    title: "Fitness Tracker App",
    description: "A mobile application for tracking workouts, nutrition, and progress with customizable goals and social features.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["ui-design", "development"],
    categoryLabel: "UI Design & Dev",
    technologies: ["React Native", "Redux", "Node.js"],
    link: "https://example.com/project3"
  },
  {
    id: 4,
    title: "Travel Planner",
    description: "A comprehensive UX research and design project for a travel planning platform that simplifies trip organization.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["ux-design"],
    categoryLabel: "UX Design",
    technologies: ["User Research", "Wireframing", "Prototyping"],
    link: "https://example.com/project4"
  },
  {
    id: 5,
    title: "Weather App",
    description: "A beautifully designed weather application with location-based forecasts, animated weather conditions, and alerts.",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["development"],
    categoryLabel: "Development",
    technologies: ["JavaScript", "SVG Animation", "API Integration"],
    link: "https://example.com/project5"
  },
  {
    id: 6,
    title: "Music Streaming App",
    description: "A modern music streaming platform with personalized recommendations, dynamic playlists, and social sharing.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    categories: ["ui-design", "development"],
    categoryLabel: "UI Design & Dev",
    technologies: ["Vue.js", "Web Audio API", "Scss"],
    link: "https://example.com/project6"
  }
];
