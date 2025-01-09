import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [

  {
    title: "Full Stack Developer",
    company: "Needibay",
    period: "Apr 2024 - Jan 2025",
    description: "Developed and maintained full-stack web applications using various technologies including JavaScript, Java, and SQL databases."
  },
  // Add more experiences as needed
]

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>{exp.company} | {exp.period}</CardDescription>
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

