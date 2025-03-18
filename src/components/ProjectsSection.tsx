import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const ProjectsSection = ({
  title = "My Projects",
  subtitle = "Check out some of my recent work",
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with shopping cart, user authentication, and payment processing.",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
      imageUrl:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&q=80",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
      imageUrl:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics platform for tracking engagement across multiple social media channels with customizable reports.",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      technologies: ["React", "Redux", "Node.js", "D3.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description:
        "Culinary application that helps users discover recipes based on available ingredients with filtering options.",
      imageUrl:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
      technologies: ["React", "Spoonacular API", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Health application for tracking workouts, nutrition, and progress with data visualization and goal setting.",
      imageUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ],
}: ProjectsSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
