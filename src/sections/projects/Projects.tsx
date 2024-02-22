import React from "react";
import SectionBase from "../SectionBase";
import { ProjectsList } from "./ProjectsList";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <SectionBase name="Projects">
      <div className="flex flex-col items-center justify-start pt-28 gap-32 pb-10">
        {ProjectsList.map((proj, idx) => (
          <ProjectCard key={idx} data={proj} inverted={idx % 2 === 1} />
        ))}
      </div>
    </SectionBase>
  );
}

export default Projects;
