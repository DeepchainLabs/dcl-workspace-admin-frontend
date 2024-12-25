import { organizationAdminProjectData } from "@/contents/Dashboard/OrganizationAdminProjectData";
import Projects from "./Projects";
import ProjectTab from "./ProjectTab";
import ProjectTable from "./ProjectTable";
import { useEffect, useState } from "react";

interface TaskDetail {
    id: string;
    name: string;
    estimatedTime: string;
    workedTime: string;
    type: string;
    status: string;
}
  
interface Project {
    id: string;
    name: string;
    status: string;
    manager: {
        name: string;
        avatar: string;
    };
    teamMembers: {
        name: string;
        avatar: string;
    }[];
    tasks: number;
    type: string;
    completionPercentage: number;
    taskDetails: TaskDetail[];
}

export default function CurrentlyRunningProjects() {
    const [activeTab, setActiveTab] = useState("to do");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const data = organizationAdminProjectData;

    const getFilteredTasks = () => {
        if (!selectedProject) return [];
        return selectedProject.taskDetails.filter(
            (task) => task.status.toLowerCase() === activeTab.toLowerCase()
        );
    };

    useEffect(() => {
        if (data.projects.length > 0) {
            setSelectedProject(data.projects[0]);
        }
    }, [data.projects]);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            <div className="col-span-1">
                <Projects
                    data={data}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                />
            </div>
            <div className="xl:col-span-2 flex flex-col mt-6 xl:mt-0">
                <ProjectTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="mt-8">
                    <ProjectTable tasks={getFilteredTasks()} />
                </div>
            </div>
        </div>
    );
}

