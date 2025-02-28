import { Badge } from "@/components/ui/badge"

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Go",
  "SQL", "MongoDB", "GraphQL", "Docker", "AWS", "Git"
  // Add more skills as needed
]

export default function Skills() {
  return (
    <section id="skills">
            <div className="flex justify-start items-center">
              <Badge className="text-xl sm:text-2xl md:text-3xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg mb-8 sm:mb-12">
                Skills
              </Badge>
            </div>
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

