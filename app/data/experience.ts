type ExperienceItem = {
  role: string
  company: string
  date: string
  description: string[]
  tools: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'System Developer',
    company: 'Brigham Young University - Idaho',
    date: 'January 2025 – Present',
    description: [
      "Built dynamic reporting systems using Genesys Cloud CX and TeamDynamix APIs to automate evaluation processes and generate real-time performance insights.",
      "Developed and deployed RESTful APIs with Java, Node.js, and AWS services to streamline operations across departments, saving over 5,000 staff hours annually.",
      "Integrated cross-platform systems to support 15,000+ users, ensuring scalability, reliability, and security across university infrastructure.",
      "Collaborated with IT and leadership teams to design backend solutions, enhance data accuracy, and modernize workflow automation."
    ],
    tools: [
      "TeamDynamix",
      "iPaaS",
      "Spring Boot",
      "HTML",
      "CSS",
      "Java",
      "Java Script"
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Rizzlr',
    date: 'October 2024 – January 2025',
    description: [
      "Designed and implemented the onboarding flow for an AI-powered mobile app, improving new-user activation and engagement.",
      "Built personalized data input and recommendation features to enhance AI accuracy and user experience.",
      "Collaborated with designers and backend engineers to create seamless cross-platform functionality across iOS and Android.",
      "Conducted quality assurance testing and debugging to ensure app stability, performance, and scalability."
    ],
    tools: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "ContentStack",
      "Figma",
      "Type Script"
    ]
  },
  {
    role: 'Sales Development Team Lead',
    company: 'Engagex',
    date: 'October 2021 – May 2022',
    description: [
      "Managed and mentored a 30-person sales team, improving efficiency through data-driven performance tracking and workflow optimization.",
      "Implemented new CRM and KPI tracking processes that increased overall sales by 20% in Q1 2022.",
      "Collaborated with leadership to develop team training materials, onboarding programs, and accountability systems.",
      "Analyzed call performance metrics to identify trends and improve conversion rates through targeted coaching and strategy refinement."
    ],
    tools: [
      "Jira",
      "Excel",
      "Salesforce"
    ]
  },
]

export default experiences
