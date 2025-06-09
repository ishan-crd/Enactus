import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectsSection = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      name: "Project Kalakari",
      image: "/image-4.png",
    },
    {
      id: 2,
      name: "Project Srijan",
      image: "/image-3.png",
    },
    {
      id: 3,
      name: "Project Samvedna",
      image: "/image.png",
    },
    {
      id: 4,
      name: "Project Avni",
      image: "/image-2.png",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="relative">
            <Card className="w-full h-80 overflow-hidden border-0">
              <CardContent className="p-0 h-full">
                <div
                  className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="text-center [font-family:'Tilt_Warp',Helvetica] font-normal text-white text-2xl md:text-3xl tracking-[0] leading-[normal] px-4">
                    {project.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
