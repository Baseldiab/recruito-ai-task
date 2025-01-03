// assets-testimonials
import testimonial1 from "@/assets/testominials/user-1.png";
import testimonial2 from "@/assets/testominials/user-2.png";
import moSalah from "@/assets/testominials/moSalah.webp";

// types
import { TestimonialsItem } from "@/components/types/testiminials.types";
import { FaqsItemType } from "@/components/types/faqs.types";
import { ChecklistItem, TeamMember } from "@/components/types/features";


export const testimonialsItems: TestimonialsItem[] = [
  {
    name: "Leo Messi",
    description:
        "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
    image: testimonial1,
    job: "CEO, Company Name",
    },
    {
      name: "John Doe",
      description:
        "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
      image: moSalah,
      job: "HR, Company Name",
    },
    {
      name: "Ronaldo",
      description:
        "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
      image: testimonial1,
      job: "football player",
    },
    {
      name: "Neymar",
      description:
        "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
      image: moSalah,
      job: "football player",
    },
    {
      name: "Mbappe",
      description:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
      image: testimonial2,
      job: "frontend developer",
    },
    {
      name: "Mohamed Salah",
      description:
        "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
      image: moSalah,
      job: "football player",
    },
];
  

export const faqsArray: FaqsItemType[] = [
  {
    value: "item-1",
    title: "What is an AI Agent?",
    content: `An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
  },
  {
    value: "item-2",
    title: "What are the Benefits of Using Recruito’s AI Agent?",
    content: `  Yes. It's animated by default, but you can disable it if you
            prefer.. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
  },
  {
    value: "item-3",
    title: "Next Steps?",
    content: `Yes. It comes with default styles that matches the other
            components&apos; aesthetic. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
  },
];


export  const teamMembers: TeamMember[] = [
  {
    id: 2,
    name: "Alex Martin",
    role: "Senior Graphic Designer",
    image: testimonial2,
    skills: ["Adobe Creative Suite", "Typography", "After Effects", "Figma"]
  },
  {
    id: 1,
    name: "Mohamed Salah",
    role: "Football Player",
    image: moSalah,
    skills: ["Creative Suite", "Marketing", "Canva"]
  },
  {
    id: 3,
    name: "Maria Rivera",
    role: "Senior Graphic Designer",
    image: testimonial1,
    skills: ["Creative Suite", "Typography", "Illustrator", "Canva"]
  }
]


export   const ChecklistItemArray: ChecklistItem[] = [
  {
    id: 1,
    label: "Creative Design Skills Test",
    completed: true,
  },
  {
    id: 2,
    label: "UX/UI Design Challenge",
    completed: true,
  },
  {
    id: 3,
    label: "Problem-Solving Task",
    completed: true,
  },
  {
    id: 4,
    label: "Trends Awareness Quiz Test",
    completed: false,
  },
]