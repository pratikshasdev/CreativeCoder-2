export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  dates: string;
  points: { label?: string; text: string }[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Senior Software Engineer",
    company: "Sumitomo Corporate Automotive Engineering (SCAE)",
    location: "Novi, MI",
    dates: "July 2025 to Present",
    points: [
      {
        label: "Yamaha (January 2026 to Present)",
        text: "Python test automation framework running 150 to 300 automated tests on embedded display systems, cutting regression time by 30 to 50%. OpenCV vision checks and hardware-in-the-loop testing over CAN bus.",
      },
      {
        label: "North American Subaru (July 2025 to January 2026)",
        text: "Modular Android infotainment apps in Kotlin and Jetpack Compose with 99.5% crash-free sessions, plus a Samsung Galaxy Watch integration in Kotlin and Wear OS.",
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Detroit Quality Staffing and Solutions",
    location: "Detroit, MI",
    dates: "May 2024 to July 2025",
    points: [
      {
        text: "Native iOS apps in Swift and SwiftUI and cross-platform apps in React Native, with 6+ App Store and Google Play releases and Node.js APIs on AWS and Azure.",
      },
    ],
  },
  {
    title: "Software Developer",
    company: "The Research Foundation SUNY",
    location: "Buffalo, NY",
    dates: "June 2023 to June 2024",
    points: [
      {
        text: "HIPAA-compliant behavioral health app in Flutter for iOS and Android. A UX redesign cut patient onboarding time by 40%.",
      },
    ],
  },
  {
    title: "Frontend Developer",
    company: "University at Buffalo",
    location: "Buffalo, NY",
    dates: "January 2023 to December 2023",
    points: [
      {
        text: "Accessible React.js interfaces for users with speech and motor disabilities.",
      },
    ],
  },
  {
    title: "Software Developer, Frontend",
    company: "Persistent Systems, Inc.",
    location: "Pune, India",
    dates: "January 2021 to June 2022",
    points: [
      {
        text: "Customer loyalty Android app in Java that improved customer retention by 35%.",
      },
    ],
  },
];

export const certifications = [
  {
    name: "Google Android Certificate",
    issuer: "Coursera",
    year: "2024",
  },
];
