import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Needibay",
    period: "Apr 2024 - Jan 2025",
    description: "Developed and maintained full-stack web applications using various technologies including JavaScript, Java, and SQL databases.",
    logo: "/needibay_logo.jpeg",
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <section id="experience">
            <div className="flex justify-start items-center">
              <Badge className="text-xl sm:text-2xl md:text-3xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-8 sm:mb-12">
                Work Experiance
              </Badge>
            </div>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>{exp.company} | {exp.period}</CardDescription>
                </div>
                <Image src={exp.logo} alt={`${exp.company} logo`} width={40} height={40} className="rounded-3xl" />
              </div>
            </CardHeader>
            <CardContent>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
