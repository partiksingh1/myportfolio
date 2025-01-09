"use client"
import ProjectCard from "@/components/project-card"
import { FixedNavbar } from "@/components/fixed-navbar"
import { ThemeToggle } from "@/components/theme.toggle"
import Skills from "@/components/skills"
import Experience from "@/components/experiance"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration.",
    previewUrl: "/api/placeholder/400/300",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration features.",
    previewUrl: "/api/placeholder/400/300",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with real-time updates and location-based forecasts.",
    previewUrl: "/api/placeholder/400/300",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Cover Image Section */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96">
        <img
          src="/cover.jpg"
          alt="Cover"
          className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
        />
      </div>

      {/* Profile Image Section */}
      <div className="relative -mt-16 sm:-mt-20 mb-6">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-52 lg:h-52 mx-auto sm:ml-8 md:ml-12 lg:ml-20">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full rounded-full border-4 border-background bg-background"
          />
        </div>
      </div>

      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto px-4">
          {/* Header Section */}
          <section className="mb-12 md:mb-16">
            <h1 className="text-gray-800 text-3xl sm:text-6xl font-semibold mb-2">
            What’s up! I'm Partik! 👋😎💻
            </h1>
          </section>

          {/* About Section */}
          <section className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">About</h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base">
              Software engineer focused on building scalable applications and shipping reliable, user-centric products.
              I'm also known for having an impressive Pokémon card collection.
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-12 md:mb-16">
            <Experience />
          </section>

          {/* Skills Section */}
          <section className="mb-12 md:mb-16">
            <Skills />
          </section>

          {/* Projects Section */}
          <section className="mb-12 md:mb-16">
            <div className="flex justify-center items-center">
              <Badge className="text-xl sm:text-2xl md:text-3xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-8 sm:mb-12">
                Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12 md:mb-16 text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Get in touch</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Want to chat?{' '}
              <a
                href="https://www.linkedin.com/in/partik-singh-473805206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Send me a direct message on LinkedIn
              </a>
              , and I'll get back to you as soon as I can.
            </p>
          </section>
        </main>

        <FixedNavbar />
      </div>
    </div>
  )
}