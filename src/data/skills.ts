import { SkillCategory } from '../types';

// Note: For production use, you should use actual SVG components or images
// This is a simple representation using emoji-like characters for demo purposes
export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        proficiency: 5
      },
      {
        name: "React Native",
        icon: "📱",
        proficiency: 5
      },
      {
        name: "JavaScript",
        icon: "𝗝𝗦",
        proficiency: 5
      },
      {
        name: "TypeScript",
        icon: "𝗧𝗦",
        proficiency: 4
      },
      {
        name: "HTML5",
        icon: "🌐",
        proficiency: 5
      },
      {
        name: "CSS3",
        icon: "🎨",
        proficiency: 5
      },
      {
        name: "Tailwind CSS",
        icon: "🌊",
        proficiency: 5
      },
      {
        name: "Expo",
        icon: "📲",
        proficiency: 4
      }
    ]
  },
  {
    name: "Backend & Databases",
    skills: [
      {
        name: "Firebase",
        icon: "🔥",
        proficiency: 5
      },
      {
        name: "Node.js",
        icon: "🟢",
        proficiency: 4
      },
      {
        name: "Firestore",
        icon: "🗄️",
        proficiency: 5
      },
      {
        name: "Firebase Auth",
        icon: "🔐",
        proficiency: 5
      },
      {
        name: "Cloud Functions",
        icon: "☁️",
        proficiency: 4
      },
      {
        name: "RESTful APIs",
        icon: "🔄",
        proficiency: 4
      }
    ]
  },
  {
    name: "Mobile & DevOps",
    skills: [
      {
        name: "Xcode",
        icon: "🍎",
        proficiency: 4
      },
      {
        name: "Android Studio",
        icon: "🤖",
        proficiency: 4
      },
      {
        name: "App Store Connect",
        icon: "📱",
        proficiency: 4
      },
      {
        name: "Google Play Console",
        icon: "🎮",
        proficiency: 4
      },
      {
        name: "OneSignal",
        icon: "🔔",
        proficiency: 4
      },
      {
        name: "Git",
        icon: "📂",
        proficiency: 4
      }
    ]
  }
];