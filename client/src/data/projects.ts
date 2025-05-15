interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Main image (kept for backwards compatibility)
  images: string[]; // Array of additional images
  categories: string[];
  categoryLabel: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DQS Direct Mobile App",
    description:
      "Led the development of a job-seeking app enabling users to swipe through job listings, upload resumes, and apply for positions, resulting in 50% increase in engagement and 30% faster application process.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746813349/Screenshot_2025-05-09_at_1.55.16_PM_wesrgh.png",
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746813483/Screenshot_2025-05-09_at_1.55.32_PM_h7pyps.png",
    ],
    categories: ["mobile-dev", "ui-design"],
    categoryLabel: "Mobile Development",
    technologies: [
      "React Native",
      "Redux",
      "TypeScript",
      "NestJS",
      "Azure",
      "Axios",
    ],
    link: "https://apps.apple.com/us/app/dqs-direct/id6446716583",
  },
  {
    id: 2,
    title: "Collaborative Care Android App",
    description:
      "Created an app revolutionizing behavioral and mental health care, featuring AES-256 encrypted messaging, WebSockets for real-time updates, and Firebase Cloud Messaging for medication reminders.",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746819414/Screenshot_2025-05-09_at_3.36.30_PM_ybp5ck.png",
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746819415/Screenshot_2025-05-09_at_3.36.43_PM_rfdjgm.png",
    ],
    categories: ["mobile-dev"],
    categoryLabel: "Mobile Development",
    technologies: [
      "Flutter",
      "Dart",
      "Android",
      "Java",
      "Firebase",
      "WebSockets",
    ],
    link: "https://apps.apple.com/us/app/collaborative-care/id1580802619",
  },
  {
    id: 3,
    title: "AI Institute Web App",
    description:
      "Led the design of a React.js frontend for The National AI Institute for Exceptional Education, improving accessibility by 40% for users with speech disabilities through enhanced phoneme support.",
    image:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746819650/Screenshot_2025-05-09_at_3.40.13_PM_h6kjc4.png",
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1746819651/Screenshot_2025-05-09_at_3.40.34_PM_w82ks3.png",
    ],
    categories: ["ui-design", "development"],
    categoryLabel: "Frontend Development",
    technologies: [
      "React.js",
      "Next.js",
      "FastAPI",
      "Python",
      "Solr",
      "Docker",
      "Kubernetes",
    ],
    link: "https://github.com/xlab-classes/cse611-fall-2023-team-WordsAndPhonemes",
  },
  {
    id: 4,
    title: "Personalized Travel Itinerary Planner",
    description:
      "Built an iOS app using AI to generate personalized travel itineraries based on user preferences, enhancing trip planning efficiency with a user-friendly interface.",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    images: [
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1747258486/Screenshot_2025-05-14_at_5.34.25_PM_vqe7pu.png",
    ],
    categories: ["mobile-dev", "ui-design"],
    categoryLabel: "iOS Development",
    technologies: ["Swift", "UIKit", "MongoDB", "AI Integration"],
    link: "https://github.com/Pratiksha234",
  },
  // {
  //   id: 5,
  //   title: "Fitness Tracker App",
  //   description:
  //     "Developed a mobile app to track workouts, set fitness goals, and analyze progress, improving user engagement in achieving health goals with a clean, intuitive interface.",
  //   image:
  //     "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   images: [
  //     "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   ],
  //   categories: ["mobile-dev", "development"],
  //   categoryLabel: "Android Development",
  //   technologies: ["Kotlin", "MongoDB", "Dagger", "Hilt", "Coroutines"],
  //   link: "https://github.com/pratiksha-shirsath",
  // },
  // {
  //   id: 6,
  //   title: "Slice of Heaven Loyalty App",
  //   description:
  //     "Developed a loyalty app for a food chain, increasing customer retention by 35% through a points-based rewards system and integrated Google's Messaging API for in-app chat features.",
  //   image:
  //     "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   images: [
  //     "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //     "https://images.unsplash.com/photo-1576107232684-1279f390378d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
  //   ],
  //   categories: ["mobile-dev", "ui-design"],
  //   categoryLabel: "Mobile Development",
  //   technologies: ["Flutter", "Dart", "Firebase", "Provider", "Figma"],
  //   link: "https://github.com/pratiksha-shirsath",
  // },
  {
    id: 6,
    title: "Affiliate Product Link Website",
    description:
      "Built an Angular-based affiliate product link platform that showcases curated tech and lifestyle products. Integrated with Amazon Associates API and optimized for SEO, the site achieved a 40% boost in referral traffic and increased affiliate revenue by 25%.",
    image:
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1747317881/Screenshot_2025-05-14_at_5.40.55_PM_aenxey.png",
    images: [
      "https://res.cloudinary.com/dsthkuuxz/image/upload/v1747317881/Screenshot_2025-05-14_at_5.40.55_PM_aenxey.png",
    ],
    categories: ["web-dev", "seo"],
    categoryLabel: "Frontend Development",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Amazon Associates API",
    ],
    link: "https://miss-deals.netlify.app/",
  },
];
