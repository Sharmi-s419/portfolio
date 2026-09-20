import {
  FaPython,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaDatabase,
  FaServer,
  FaCode,
  FaCss3Alt,
  FaBrain,
  FaLaptopCode,
} from 'react-icons/fa'
import {
  SiDjango,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiPostman,
} from 'react-icons/si'

const publicAsset = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

export const navigation = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

export const skills = [
  {
    title: 'Programming',
    icon: FaCode,
    items: [
      { name: 'Python', icon: FaPython },
      { name: 'Core Java', icon: FaJava },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: FaReact },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    items: [
      { name: 'Django', icon: SiDjango },
      { name: 'Django REST Framework', icon: SiDjango },
      { name: 'REST APIs', icon: FaServer },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'Core Concepts',
    icon: FaBrain,
    items: [
      { name: 'OOP', icon: FaCode },
      { name: 'Data Structures', icon: FaCode },
      { name: 'Algorithms', icon: FaCode },
    ],
  },
  {
    title: 'Tools',
    icon: FaLaptopCode,
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Postman', icon: SiPostman },
      { name: 'VS Code', icon: FaLaptopCode },
    ],
  },
]

export const projects = [
  {
    name: 'Blockchain-Based Exam Management System',
    category: 'Full Stack',
    description: 'Full-stack examination management system built using React, Django, and MongoDB with blockchain-based record storage.',
    tech: ['React', 'Django', 'MongoDB', 'Blockchain'],
    liveDemo: '',
    github: 'https://github.com/Sharmi-s419/blockchain_exam_management',
    image: publicAsset('block.png'),
  },
  {
    name: 'Smart Assistive Alert and Monitoring System',
    category: 'Python Application',
    description: 'Python-based application developed for real-time visitor monitoring, alert management, and accessibility support.',
    tech: ['Python', 'Tkinter', 'SQLite', 'OpenCV', 'PySerial'],
    liveDemo: '',
    github: '',
    image: publicAsset('smart.png'),
  },
  {
    name: 'Subi Makeover',
    category: 'Business Website',
    description: 'Responsive business website developed for a freelance client.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveDemo: 'https://subi-makeover.vercel.app',
    github: '',
    image: publicAsset('subi makeover.png'),
  },
  {
    name: 'Damaroosri Natyakshetra',
    category: 'Academy Website',
    description: 'Responsive website developed for a freelance client to showcase academy information, classes, achievements, gallery, and contact details.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    liveDemo: 'https://damaroosri-natyakshetra.vercel.app',
    github: '',
    image: publicAsset('damoosri.png'),
  },
]

export const experiences = [
  {
    role: 'Python Full Stack Development Trainee',
    company: 'Tap Academy',
    date: 'July 2026 – Present',
    description: 'Training in Python, Django, REST APIs, frontend development, and project-based implementation for full-stack web development.',
  },
  {
    role: 'Python Full Stack Developer Intern',
    company: 'Code Wild Tech',
    date: 'Jan 2026 – May 2026',
    description: 'Worked on practical full-stack development tasks and gained experience building web application features using modern technologies.',
  },
  {
    role: 'Web Development Intern',
    company: 'Micro Technics',
    date: 'Aug 2025',
    description: 'Supported web development work and developed hands-on experience in responsive interfaces and application building.',
  },
  {
    role: 'Inplant Training',
    company: 'ISRO Propulsion Complex',
    date: 'July 2025',
    description: 'Completed technical training and gained practical exposure to engineering and technology environments.',
  },
  {
    role: 'Frontend Development Intern',
    company: 'AK Info Park',
    date: '2025',
    description: 'Worked on frontend development tasks and gained experience creating responsive user interfaces.',
  },
]

export const education = [
  {
    title: 'B.E. Computer Science Engineering',
    school: 'Amrita College of Engineering and Technology',
    meta: '2022 – 2026',
    detail: 'CGPA: 8.9 / 10',
  },
  {
    title: 'Higher Secondary Education',
    school: 'Sree Ram Matric Higher Secondary School',
    meta: '95.6%',
    detail: '',
  },
  {
    title: 'Secondary School Leaving Certificate',
    school: 'Sree Ram Matric Higher Secondary School',
    meta: '90.33%',
    detail: '',
  },
]

export const certifications = [
  { title: 'Python Full Stack Development', provider: 'Tap Academy', period: 'July 2026 – Present' },
  { title: 'Machine Learning', provider: 'Code Wild Learning Hub', period: 'Feb 2026 – Apr 2026' },
  { title: 'Web Development', provider: 'Simplilearn SkillUp', period: '' },
]

export const contactDetails = [
  { label: 'Location', value: 'Nagercoil, Tamil Nadu, India', icon: FaMapMarkerAlt },
  { label: 'Phone', value: '+91 9488645480', icon: FaPhoneAlt, href: 'tel:+919488645480' },
  { label: 'Email', value: 'sharmilingam79@gmail.com', icon: FaEnvelope, href: 'mailto:sharmilingam79@gmail.com' },
  { label: 'GitHub', value: 'github.com/Sharmi-s419', icon: FaGithub, href: 'https://github.com/Sharmi-s419' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sharmis1901', icon: FaLinkedinIn, href: 'https://linkedin.com/in/sharmis1901' },
]

export const profileImage = publicAsset('image.png')
export const resumePath = publicAsset('resume.pdf')

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Sharmi-s419', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sharmis1901', icon: FaLinkedinIn },
  { label: 'Email', href: 'mailto:sharmilingam79@gmail.com', icon: FaEnvelope },
]

export const brandStats = [
  { label: 'Education', value: 'B.E. Computer Science Engineering' },
  { label: 'CGPA', value: '8.9 / 10' },
  { label: 'Focus', value: 'Python Full Stack Development' },
  { label: 'Domain', value: 'Web Development & Backend Development' },
]
