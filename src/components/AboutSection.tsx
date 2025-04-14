import { Card, CardContent } from "./ui/card";

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
  interests?: {
    fieldsOfInterest: string[];
    learningTools: string[];
    activelyLearning: string[];
  };
}

const AboutSection = ({
  title = "About Me",
  subtitle = "Professional Background",
  description = "My journey began during my university years, where I built projects and learned from seniors, constantly improving my skills in writing clean and scalable code. As I gained expertise in various technologies, I took every opportunity to apply what I had learned professionally. I’ve always focused on creating clean, maintainable, and scalable codebases, ensuring my solutions solve real-world problems efficiently and effectively.",
  experience = [
    {
      title: "Backend Developer",
      company: "Improdata I Karachi, Pakistan",
      period: "May 2024 - Present (1 year)",
      description: "At Improdata, I have gained extensive experience in various roles as both a Backend and Full-stack Developer, with a strong focus on building scalable and efficient applications. During my apprenticeship, I developed RESTful APIs and API endpoints using TypeScript and Express, while managing MySQL databases on Azure. \n As a Full-stack Developer, I contributed to backend services with TypeScript, Express, and PostgreSQL, and deployed applications on both AWS and Azure. I also developed Python-based data scraping scripts, maintained Django projects, and created a web application using React and Next.js. Additionally, I built high-performance mobile applications for iOS and Android with React Native. In my current role as a Backend Developer since November, I focus on writing clean, maintainable, and scalable code with TypeScript, primarily using the Express framework and PostgreSQL. My responsibilities include designing and developing RESTful APIs, creating secure API endpoints, and implementing robust authentication and authorization mechanisms. I also ensure thorough data validation and sanitization. \n I have significant experience working with WebSockets for real-time communication, developing caching strategies, and optimizing application performance through load balancing on AWS. Furthermore, I have successfully integrated Stripe payment gateways, ensuring secure and seamless transactions on the platform."

    },
    // {
    //   title: "Full-stack Developer",
    //   company: "PAKSOFT GLOBAL (PVT) LIMITED, Karachi, Pakistan",
    //   period: "Aug 2024 - Oct 2024",
    //   description:
    //     "Built scalable backend services with TypeScript, Express, MySQL, and PostgreSQL. Deployed backend services on AWS and Azure for efficient hosting. Developed Python data scraping scripts and integrated with Node.js.",
    // },
    // {
    //   title: "Backend Developer (Apprenticeship)",
    //   company: "Improdata I Karachi, Pakistan",
    //   period: "May 2024 - July 2024",
    //   description:
    //     "Designed and developed RESTful APIs using TypeScript and Express. Managed MySQL databases on Azure and worked on backend development with Node.js and TypeScript.",
    // },
    {
      title: "Frontend & Android Application Developer",
      company: "PAKSOFT GLOBAL (PVT) LIMITED I Karachi, Pakistan",
      period: "July 2022 - Nov 2023",
      description:
        "Developed a driving application using Kotlin and XML, focusing on user-friendly navigation and ride management features. Optimized the app and contributed to feature implementation. Additionally, developed a data analytics product using React.js and API integrations, leading deployment and testing to ensure functionality. Worked on multiple screens, state management using Redux, and styling with Material-UI.",
    },
    // {
    //   title: "Android Application Developer (Internship)",
    //   company: "Innovative Solutions Technologies Inc I Karachi, Pakistan",
    //   period: "July 2022 - Nov 2022",
    //   description:
    //     "Developed a driving application using Kotlin and XML, focusing on user-friendly navigation and ride management features. Optimized the app and contributed to feature implementation.",
    // },
  ],
  education = [
    {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      institution: "Iqra University, Karachi, Pakistan",
      year: "2020-2024",
      cgpa: "3.32/4.00",
    },
    {
      degree: "Pre engineering",
      institution: "Government Dehli College, Karachi, Pakistan",
      year: "2018-2020",
    },
    {
      degree: "Computer Science",
      institution: "ACE School, Karachi, Pakistan",
      year: "2016-2018",
    },
  ],
  interests = {
    fieldsOfInterest: [
      "DevOps",
      "Data Science",
      "Data Engineering",
      "Machine Learning",
      "Artificial Intelligence",
      "Web Development",
    ],
    learningTools: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD pipelines",
      "Machine Learning frameworks",
    ],
    activelyLearning: ["Docker", "CI/CD", "Github Actions"],
  },
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
                    {edu.cgpa && (
                      <p className="text-gray-700">CGPA: {edu.cgpa}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Interests & Learning
              </h3>
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-medium text-gray-800 mt-0 mb-4">
                    Actively Learning:
                  </h4>
                  <ul className="space-y-2">
                    {interests.activelyLearning.map((learning, index) => (
                      <li key={index} className="text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 inline-block"></div>
                        {learning}
                      </li>
                    ))}
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
