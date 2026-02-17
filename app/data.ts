type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PERRO Agency',
    title: 'Co-Founder - Product Design Director',
    start: '2023',
    end: 'Present',
    link: 'https://www.linkedin.com/company/perroagency/',
    id: 'work1',
  },
  {
    company: 'Adcap Securities',
    title: 'Lead Product Designer',
    start: '2022',
    end: '2023',
    link: 'https://www.linkedin.com/company/adcap-securities/',
    id: 'work2',
  },
  {
    company: 'Coderhouse',
    title: 'Web Development Teacher',
    start: '2021',
    end: '2022',
    link: 'https://www.linkedin.com/school/coderhouse/',
    id: 'work3',
  },
  {
    company: 'Flinco',
    title: 'Sr. Product Designer',
    start: '2022',
    end: '2022',
    link: 'https://www.linkedin.com/company/planhopper/',
    id: 'work4',
  },
  {
    company: 'PhinxLab',
    title: 'Sr. UX/UI Designer',
    start: '2021',
    end: '2022',
    link: 'https://www.linkedin.com/company/phinx/',
    id: 'work5',
  },
  {
    company: 'Rocketbot RPA Suite',
    title: 'UI Designer, Web developer',
    start: '2020',
    end: '2021',
    link: 'https://www.linkedin.com/company/rocketrobot/',
    id: 'work6',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/fedegilles',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/FedGilles',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/fedegilles',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/fedegilles/',
  },
]

export const EMAIL = 'fedegilles@gmail.com'
