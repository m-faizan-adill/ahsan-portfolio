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
  }[];
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Professional Background",
  description = "I am a passionate developer with over 5 years of experience building web applications using modern technologies. My focus is on creating clean, efficient, and user-friendly solutions that solve real-world problems.",
  experience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the development of responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with design and backend teams to implement new features and improve user experience.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description:
        "Developed and maintained client websites and web applications. Implemented responsive designs and ensured cross-browser compatibility.",
    },
  ],
  education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018",
    },
    {
      degree: "Bachelor of Science in Web Development",
      institution: "State University",
      year: "2016",
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
