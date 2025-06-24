"use client"

import ProjectCard from "@/components/project-card"
import { FixedNavbar } from "@/components/fixed-navbar"
import Skills from "@/components/skills"
import Experience from "@/components/experiance"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "TopicTalk - Anonymous real-time chat application",
    description: "An open, ephemeral, anonymous real-time chat application where users can create topic-based chat rooms and chat anonymously with auto-generated usernames. Messages are automatically deleted after 24 hours",
    liveUrl: "https://topictalk-vdbgrq.fly.dev/",
    githubUrl: "https://github.com/partiksingh1/TopicTalk",
    skills: ["Websockets (ws)", "node-cron", "NodeJs", "Prisma", "Docker"]
  },
  {
    title: "BlogZone - Manages your Blogs & Articles using AI",
    description: "BlogZone lets you save blogs and articles by link,summarize it using AI, add titles, mark them as read or unread, and organize them with tags for easy access.",
    liveUrl: "https://blogzone-8chd.onrender.com/",
    githubUrl: "https://github.com/partiksingh1/Blogs-Tracker",
    skills: ["React", "NodeJs", "Postgres", "Prisma", "Docker","Gemeni AI"]
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-6 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Cover Image Section */}
      <div className="relative w-full h-40 sm:h-64 lg:h-60">
        <Image
          width={1000}
          height={1000}
          src="/cover.png"
          alt="Cover"
          className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
        />
      </div>

      {/* Profile Image Section */}
      <div className="relative -mt-24 sm:-mt-20 mb-6">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto sm:mx-20">
          <Image
            height={1000}
            width={1000}
            src="/profile1.jpeg"
            alt="Profile"
            className="w-full h-full rounded-full border-2 border-background bg-background"
          />
        </div>
      </div>

      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto px-4">
          {/* Header Section */}
          <section className="-mt-32 md:mb-20 text-end">
            <h1 className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 dark:text-white">
              What&apos;s up.. I&apos;m Partik! 👋😎💻
            </h1>

          </section>

          {/* About Section */}
          <section className="mb-12 md:mb-16">
            <div className="flex justify-start items-center mb-6">
              <Badge className="text-xl sm:text-2xl md:text-3xl px-4 py-2 rounded-lg">
                About
              </Badge>
            </div>
            <p className="mb-4 sm:mb-6 md:text-xl">My name is Partik Singh Tanwar.I’m a Software Engineer who builds scalable apps and user-friendly products that make a real impact.</p>
          </section>

          {/* Experience Section */}
          <section className="mb-12 md:mb-16">
            <Experience />
          </section>
          {/* Projects Section */}
          <section className="mb-12 md:mb-16">
            <div className="flex mb-8 sm:mb-12">
              <Badge className="text-xl sm:text-2xl md:text-3xl px-4 py-2 rounded-lg">
                Projects
              </Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>


          {/* Skills Section */}
          <section className="mb-12 md:mb-16">
            <Skills />
          </section>

          
          {/* Contact Section */}
          <section className="mb-12 md:mb-16 text-center">
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
              , and I&apos;ll get back to you as soon as I can.
            </p>

          </section>
        </main>

        <FixedNavbar />
      </div>
    </div>
  )
}
