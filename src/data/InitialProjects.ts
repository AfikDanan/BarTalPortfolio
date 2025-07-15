import { Project } from '../types';

export const initialProjects: Project[] = [
  {
    id: '1',
    title: 'CyberInt Security Dashboard',
    client: 'CyberInt',
    description: 'Comprehensive cybersecurity threat intelligence platform with real-time monitoring and analytics',
    overview: 'Redesigned the threat intelligence dashboard to improve analyst workflow efficiency and reduce time-to-action for critical security events.',
    role: 'Lead UX/UI Designer',
    process: 'User research, information architecture, wireframing, prototyping, usability testing',
    tools: ['Figma', 'Photoshop', 'User Testing'],
    impact: 'Reduced analyst response time by 40% and increased user satisfaction scores by 65%',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailImages: [
      'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'complex-systems',
    year: '2024',
    featured: true
  },
  {
    id: '2',
    title: 'Engineer Sandbox Platform',
    client: 'Israel Electric Corporation',
    description: 'Interactive testing environment for electrical engineers with advanced simulation capabilities',
    overview: 'Created an intuitive interface for engineers to test and simulate electrical systems safely before implementation.',
    role: 'Senior UX/UI Designer',
    process: 'Stakeholder interviews, task analysis, iterative design, prototype validation',
    tools: ['Figma', 'Illustrator', 'Principle'],
    impact: 'Improved testing efficiency by 50% and reduced system implementation errors by 30%',
    imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailImages: [
      'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'complex-systems',
    year: '2023',
    featured: true
  },
  {
    id: '3',
    title: 'Bulwarx Internal Portal',
    client: 'Bulwarx Security',
    description: 'Complete redesign of internal management portal with enhanced user experience and workflow optimization',
    overview: 'Transformed a complex internal system into an intuitive platform that streamlined daily operations for security personnel.',
    role: 'UX/UI Designer',
    process: 'User journey mapping, interface redesign, component library creation, user acceptance testing',
    tools: ['Figma', 'Photoshop', 'Zeplin'],
    impact: 'Led to contract renewal and 45% reduction in training time for new users',
    imageUrl: 'https://images.pexels.com/photos/586062/pexels-photo-586062.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailImages: [
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/586062/pexels-photo-586062.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'web',
    year: '2023',
    featured: false
  },
  {
    id: '4',
    title: 'SecureChat Mobile App',
    client: 'CyberTech Solutions',
    description: 'End-to-end encrypted messaging app with advanced security features and intuitive user interface',
    overview: 'Designed a secure messaging application that balances high-level security with user-friendly interactions for both technical and non-technical users.',
    role: 'Lead Mobile UX/UI Designer',
    process: 'User research, competitive analysis, wireframing, prototyping, usability testing, design system creation',
    tools: ['Figma', 'Principle', 'Sketch', 'InVision'],
    impact: 'Achieved 4.8/5 app store rating and 200% increase in user engagement within first quarter',
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    detailImages: [
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'mobile',
    year: '2024',
    featured: false
  }
];