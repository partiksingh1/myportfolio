import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
  "SQL", "MongoDB", "GraphQL", "Docker", "AWS", "Git"
  // Add more skills as needed
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

