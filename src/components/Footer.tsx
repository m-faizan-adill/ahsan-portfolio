import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  name?: string;
  email?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  copyrightYear?: number;
}

const Footer = ({
  name = "John Doe",
  email = "contact@johndoe.com",
  socialLinks = {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <footer className="w-full bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-slate-300">
              I'm a passionate developer focused on creating seamless web
              experiences and robust backend systems using modern technologies.
              I specialize in building scalable applications, designing
              efficient APIs, and optimizing performance to deliver
              high-quality, functional solutions.
            </p>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-slate-300 mb-2">{email}</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              <a
                href={`mailto:${email}`}
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="text-center text-slate-400">
          <p>
            &copy; {copyrightYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
