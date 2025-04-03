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
      title: "California Pizza Clone Backend",
      description:
        "A robust backend system for a pizza delivery service with features for order processing, inventory management, and user authentication.",
      imageUrl: "/images/backendcalifornia.JPG",
      // "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      technologies: ["Node.js", "MongoDB", "Express JS"],
      demoUrl: "#",
      githubUrl: "https://github.com/ahsanadil9/CaliforniaPizza-Clone-Backend",
    },
    {
      id: 2,
      title: "California Pizza Clone Client",
      description:
        "A responsive frontend client for a pizza delivery service that allows users to browse menu items, customize orders, and track deliveries.",
      imageUrl: "/images/california.JPG",
      // "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&q=80",
      technologies: ["React", "Next JS", "CSS", "Tailwind CSS"],
      demoUrl: "https://california-pizza-clone.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/CaliforniaPizza-Clone",
    },
    {
      id: 3,
      title: "California Pizza Clone Admin",
      description:
        "Administrative dashboard for managing the pizza delivery platform with tools for inventory management, order tracking, and user management.",
      imageUrl: "/images/californiaadmin.JPG",
      // "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      technologies: ["React", "Next JS", "CSS", "Tailwind CSS"],
      demoUrl: "https://california-clone-admin-panel.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/CaliforniaPizza-Clone-Admin",
    },
    {
      id: 4,
      title: "Leaflet And Chart",
      description:
        "Interactive web application combining Leaflet maps and Chart.js visualizations for geographical data analysis and representation.",
      imageUrl: "/images/leafletchart.JPG",
      // "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
      technologies: ["React", "CSS", "MUI"],
      demoUrl: "http://reactleaflet-chart.surge.sh/",
      githubUrl: "https://github.com/ahsanadil9/LeafletandChart",
    },
    {
      id: 5,
      title: "Todo List",
      description:
        "Simple and intuitive task management application that helps users organize their daily activities with features for adding, editing, and marking tasks as complete.",
      imageUrl: "/images/todoList.JPG",
      // "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
      technologies: ["React", "Bootstrap", "CSS"],
      demoUrl: "https://the-todo-list-webapp.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/Todo-List",
    },
    {
      id: 6,
      title: "Tic Tac Toe Game",
      description:
        "Classic two-player Tic Tac Toe game implemented with React, featuring a clean interface and game state management.",
      imageUrl: "/images/tictactoe.JPG",
      // "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["React", "CSS"],
      demoUrl: "https://a-tic-tac-toe-game.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/Game-Tic-Tac-Toe",
    },
    {
      id: 7,
      title: "IU GPA Calculator",
      description:
        "A utility tool for Indiana University students to calculate their GPA based on course credits and grades, with a user-friendly interface.",
      imageUrl: "/images/gpacalc.JPG",
      // "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["HTML", "CSS", "JS"],
      demoUrl: "https://www.iugpacalculator.live/",
      githubUrl: "https://github.com/ahsanadil9/GPACalculator",
    },
    {
      id: 8,
      title: "T-shirt Price Calculator",
      description:
        "An interactive tool for calculating custom t-shirt pricing based on quantity, design complexity, and material options.",
      imageUrl: "/images/tshirt.JPG",
      // "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["HTML", "CSS", "JS"],
      demoUrl: "https://t-shirt-price-calculator.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/T-shirt-Price-Calculator",
    },
    {
      id: 9,
      title: "Responsive Blog Post Page",
      description:
        "A fully responsive blog template with optimized layouts for desktop, tablet, and mobile viewing experiences.",
      imageUrl: "/images/homepage.JPG",
      // "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["HTML", "CSS", "JS"],
      demoUrl: "https://blog-post-page.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/Blog-Post-Page",
    },
    {
      id: 10,
      title: "Responsive PlayStation DualShock",
      description:
        "An interactive product page for the PlayStation DualShock controller featuring responsive design and product showcase elements.",
      imageUrl: "/images/playstation.JPG",
      // "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      technologies: ["HTML", "CSS", "JS"],
      demoUrl: "https://ps-4-dual-shock-controller-product-page.vercel.app/",
      githubUrl: "https://github.com/ahsanadil9/PS4-DualShock-Controller-Product-Page",
    },
  ],
}: ProjectsSectionProps) => {
  console.table(projects);

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
