import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Play, Youtube } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  youtubeUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A brief description of the project showcasing key features and functionality implemented.",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  demoUrl = "#",
  githubUrl = "#",
  // youtubeUrl = "#",
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label={`Watch ${title} video`}
          >
            <div className="bg-red-600 rounded-full p-3 shadow-lg transform transition-transform group-hover:scale-110">
              <Play fill="white" size={24} className="text-white ml-1" />
            </div>
          </a>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold dark:black">{title}</CardTitle>
        <div className="flex flex-wrap gap-1 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start pt-2 space-x-3 border-t">
        <Button variant="outline" size="sm" asChild>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github size={16} />
            Code
          </a>
        </Button>
{/* 
        {demoUrl && (
          <Button variant="outline" size="sm" className="bg-red-50 hover:bg-red-100 text-red-600 border-red-200" asChild>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Youtube size={16} />
              Watch Video
            </a>
          </Button>
        )} */}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
