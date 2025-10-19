// Data for the portfolio website

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    items: ['Next.js', 'React', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Development Architecture',
    items: ['Component-Based Design', 'Micro Frontends', 'Performance Optimization'],
  },
  {
    category: 'Backend & APIs',
    items: ['REST', 'GraphQL', 'Django', 'Firebase'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'CI/CD', 'Linux', 'Agile'],
  },
];

export const experiences: Experience[] = [
  {
    company: 'EB Pearls',
    position: 'Frontend Developer',
    period: 'May 2024 - Present',
    achievements: [
      'Optimized CI/CD pipelines for faster deployment cycles and improved team productivity',
      'Developed reusable component libraries that reduced development time by 40%',
      'Led architecture adoption for micro frontends across multiple projects',
      'Conducted regular security audits to identify and remediate potential vulnerabilities',
      'Collaborated with UI/UX designers to implement pixel-perfect designs',
    ],
  },
  {
    company: 'Code Rush',
    position: 'Full Stack Developer Intern',
    period: 'Dec 2023 - May 2024',
    achievements: [
      'Learned and implemented Next.js architecture for building modern web applications',
      'Developed full-stack applications with React frontend and Django backend',
      'Implemented authentication systems using JWT tokens and Firebase',
      'Optimized application performance through code splitting and lazy loading',
      'Participated in Agile development processes including daily standups and sprint planning',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Caroo',
    description: 'A car auction web app in Australia that allows users to bid on and purchase vehicles.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1350&q=80', // Luxury car (verified)
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://caroo.com.au/',
  },
  {
    title: 'Beauty Grail',
    description: 'A salon course purchase and subscription platform.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1350&q=80', // Aesthetic salon interior (verified)
    technologies: ['Next.js', 'GraphQL', 'Stripe', 'MaterialUI'],
    link: 'https://beautygrail.co/',
  },
  {
    title: 'Weather App',
    description: 'A realtime weather displaying application.',
    image: 'https://images.unsplash.com/photo-1560258018-c7db7645254e?auto=format&fit=crop&w=1350&q=80', // Stormy weather (verified)
    technologies: ['JavaScript'],
    link: 'https://sebika123.github.io/weatherapp/',
  },
];


export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Information Technology',
    institution: 'Tribhuvan University',
    period: '2019 - 2023',
    location: 'Lalitpur, Nepal',
  },
  {
    degree: 'High School',
    institution: 'Little Angel\'s School',
    period: '2016 - 2018',
    location: 'Lalitpur, Nepal',
  },
];

export const personalInfo = {
  name: 'Sebika Nepal',
  title: 'Frontend Developer',
  phone: '',
  email: 'sebikanepal.dev@gmail.com',
  location: 'Lalitpur, Nepal',
  github: 'https://github.com/sebika123',
  linkedin: 'https://www.linkedin.com/in/sebika-nepal-8876171a0/',
  bio: 'Frontend developer with expertise in Next.js, React, and modern web technologies. Passionate about creating performant, accessible, and beautiful web experiences. Focused on component-based architecture and micro frontends.',
};