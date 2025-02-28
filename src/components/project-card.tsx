import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';
interface ProjectCardProps {
  title: string;
  description: string;
  previewUrl: string;
  liveUrl: string;
  githubUrl: string;
  skills: string[]
}

const ProjectCard = ({ title, description, previewUrl, liveUrl, githubUrl, skills }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={previewUrl}
          alt={title}
          className="w-full max-h-80 p-4 object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
      <div className='p-4'>
      <h2 className="text-lg font-semibold mb-2">Skills</h2>
      <div className="p-4 ">
        {skills.map((skill, index) => (
          <Badge key={index} className="m-1">
            {skill}
          </Badge>
        ))}
      </div>
      </div>
      <CardFooter className="flex gap-2">
        <Button variant="outline" asChild className="flex-1">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button variant="outline" asChild className="flex-1">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;