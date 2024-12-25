import BackIcon from "@/svg/Dashboard/BackIcon";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import ForwardIcon from "@/svg/Dashboard/ForwardIcon";

function Projects({ data, selectedProject, setSelectedProject }: any) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  
    const scrollLeft = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: -200,
          behavior: "smooth",
        });
      }
    };
  
    const scrollRight = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <div className="flex items-center mt-6 relative">
        <div className="absolute left-0 cursor-pointer z-20" onClick={scrollLeft}>
          <BackIcon />
        </div>
        <div className="absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10"></div>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide px-[75px] relative"
        >
          <div className="flex gap-5 flex-nowrap">
            {data.projects.map((project: any, index: number) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectCard project={project} isSelected={selectedProject?.id === project.id} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 cursor-pointer z-20" onClick={scrollRight}>
          <ForwardIcon />
        </div>
      </div>
    );
  }
  
  export default Projects;
  