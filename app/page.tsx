import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "TailwindCSS", "GraphQL", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Java", "Django", "MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps",
      skills: ["AWS", "CI/CD", "Git", "Linux", "Docker"],
    },
    {
      category: "Tools",
      skills: ["VS Code", "Postman", "GitHub", "PyCharm", "IntelliJ", "WebStorm"],
    },
    {
      category: "Mobile",
      skills: ["React Native", "Swift", "SwiftUI"],
    },
  ]

  const languages = [
    { language: "English", level: "Fluent" },
    { language: "Spanish", level: "Fluent" },
    { language: "Italian", level: "Fluent" },
    { language: "Japanese", level: "Beginner" },
    { language: "Portuguese", level: "Beginner" },
  ]

  const workExperience = [
    {
      role: "Software Engineer Intern",
      company: "Maplink Global",
      period: "June 2024 - August 2024",
      accomplishments: [
        "Rebuilt Maplink's legacy Java SDK into a Python 3.6-based SDK to enable seamless integration for Python-centric clients.",
        "Developed a Core Module from scratch, handling environment configuration, authentication, and asynchronous operations to support robust API interactions.",
        "Documented processes and code extensively, facilitating knowledge transfer and efficient collaboration within a multilingual team environment.",
        "Overcame challenges in translating Java-specific libraries to Python by researching alternatives and leveraging frameworks like PyGeohash and asyncio, ensuring feature parity and performance.",
        "Collaborated autonomously with a remote team of 9 Portuguese-speaking developers and effectively participating in daily sprints.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Hi, I'm Jose Leal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A Software Engineer Specializing in Back-end Services
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/JoseFr0yo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-leal-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/jlealdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <Card className="bg-gray-700 border-gray-600 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-600 flex items-center justify-center">
                    <img
                      src="/jose-leal-photo.jpeg"
                      alt="Jose Leal - Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Available for work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                <p>
                  I'm a passionate software engineer and recent graduate with a Bachelor of Science in Information
                  Technology from Fisher College, specializing in Software Engineering. I have hands-on experience
                  building robust back-end services and working with modern development technologies.
                </p>
                <p>
                  During my internship at Maplink Global, I successfully rebuilt their legacy Java SDK into a
                  Python-based solution, collaborating with an international team and gaining valuable experience in
                  cross-cultural communication and remote development practices.
                </p>
                <p>
                  I'm proficient in multiple programming languages and frameworks, with a strong foundation in Python,
                  JavaScript, React, and cloud technologies. I'm always eager to learn new technologies and contribute
                  to innovative projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Name</p>
                  <p className="text-white font-medium">Jose Leal</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">jlealt.dev@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-medium">Pembroke, MA</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Availability</p>
                  <p className="text-green-400 font-medium">Open to opportunities</p>
                </div>
              </div>

              <a href="/jose-leal-resume.pdf" download="Jose_Leal_Resume.pdf">
                <Button className="mt-6 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-600 p-6">
                    <CardContent className="p-0">
                      <h4 className="text-lg font-semibold text-white mb-4">{category.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-gray-700 text-gray-200 px-3 py-1 text-sm hover:bg-gray-600 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Languages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {languages.map((lang, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4 text-center">
                      <p className="font-medium text-white">{lang.language}</p>
                      <p className="text-sm text-gray-400">{lang.level}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                    <p className="text-gray-300">
                      {job.company} | {job.period}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {job.accomplishments.map((accomplishment, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {accomplishment}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:jlealt.dev@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                    jlealt.dev@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/jose-leal-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Connect with me
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                <CardContent className="p-6 text-center">
                  <Github className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <a
                    href="https://github.com/JoseFr0yo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    View my work
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 Jose Leal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
