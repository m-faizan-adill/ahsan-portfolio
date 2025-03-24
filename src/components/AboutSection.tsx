import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  experience?: {
    title: string;
    company: string;
    period: string;
    description: string;
  }[];
  education?: {
    degree: string;
    institution: string;
    year: string;
    cgpa?: string;
  }[];
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Professional Background",
  description = "I am a passionate developer with over 5 years of experience building web applications using modern technologies. My focus is on creating clean, efficient, and user-friendly solutions that solve real-world problems.",
  experience = [
    {
      title: "Backend Developer",
      company: "Improdata I Karachi, Pakistan",
      period: "Nov 2024 - Present",
      description:
        "Managed deployment of backend services to AWS EC2 instances for enhanced control over server environments, ensuring high availability and scalability. Implemented real-time communication using WebSockets and configured load balancers to improve performance.",
    },
    {
      title: "Full-stack Developer",
      company: "Improdata I Karachi, Pakistan",
      period: "Aug 2024 - Oct 2024",
      description:
        "Built scalable backend services with TypeScript, Express, MySQL, and PostgreSQL. Deployed backend services on AWS and Azure for efficient hosting. Developed Python data scraping scripts and integrated with Node.js.",
    },
    {
      title: "Backend Developer (Apprenticeship)",
      company: "Improdata I Karachi, Pakistan",
      period: "May 2024 - July 2024",
      description:
        "Designed and developed RESTful APIs using TypeScript and Express. Managed MySQL databases on Azure and worked on backend development with Node.js and TypeScript.",
    },
    {
      title: "Frontend Web Developer (Internship)",
      company: "Innovative Solutions Technologies Inc I Karachi, Pakistan",
      period: "Sep 2023 - Nov 2023",
      description:
        "Developed a data analytics product using React.js and API integrations. Led the deployment and testing to ensure functionality. Worked on multiple screens, state management using Redux, and styled using Material-UI.",
    },
    {
      title: "Android Application Developer (Internship)",
      company: "Innovative Solutions Technologies Inc I Karachi, Pakistan",
      period: "July 2022 - Nov 2022",
      description:
        "Developed a driving application using Kotlin and XML, focusing on user-friendly navigation and ride management features. Optimized the app and contributed to feature implementation.",
    },
  ],
  education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Iqra University, Karachi, Pakistan",
      year: "2020-2025",
      cgpa: "3.32/4.00",
    },
    {
      degree: "Pre engineering",
      institution: "Dehli College, Karachi, Pakistan",
      year: "2018-2020",
    },
    {
      degree: "Computer Science",
      institution: "ACE School, Karachi, Pakistan",
      year: "2016-2018",
    },
  ],
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-slate-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium text-gray-900">
                        {job.title}
                      </h4>
                      <span className="text-sm font-medium text-gray-500">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.company}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-medium text-gray-900">
                        {edu.degree}
                      </h4>
                      <span className="text-sm font-medium text-gray-500">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{edu.institution}</p>
                    {edu.cgpa && <p className="text-gray-700">CGPA: {edu.cgpa}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Personal Interests
              </h3>
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700">
                        Open source contribution
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700">
                        Hiking and outdoor activities
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700">Photography</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="text-gray-700">Reading tech blogs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
