import React from "react";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number;
  icon?: React.ReactNode;
}

interface SkillsSectionProps {
  categories?: SkillCategory[];
  title?: string;
  description?: string;
}

const SkillsSection = ({
  categories = [
    {
      name: "Frontend",
      skills: [
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 80 },
        { name: "JavaScript", proficiency: 75 },
        { name: "React", proficiency: 85 },
        { name: "Next JS", proficiency: 88 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 85 },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node JS", proficiency: 75 },
        { name: "Nest JS", proficiency: 50 },
        { name: "Express JS", proficiency: 75 },
        { name: "Python", proficiency: 70 },
        { name: "Java", proficiency: 65 },
        { name: "Golang", proficiency: 60 },
        { name: "MongoDB", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 80 },
        { name: "MySQL", proficiency: 80 },
        { name: "MSSQL", proficiency: 80 },

      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Github", proficiency: 95 },
        { name: "Firebase", proficiency: 50 },
        { name: "Git", proficiency: 90 },
        { name: "Postman", proficiency: 95 },
        { name: "Docker", proficiency: 60 },
        { name: "AWS", proficiency: 70 },
        { name: "Azure", proficiency: 75 },
        { name: "Figma", proficiency: 80 },
      ],
    },
  ],
  title = "My Skills",
  description = "Here are some of the technologies and tools I've worked with over the years.",
}: SkillsSectionProps) => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">
                {category.name}
              </h3>
              <Separator className="mb-6" />
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
