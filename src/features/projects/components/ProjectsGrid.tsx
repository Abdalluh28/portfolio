import { useApp } from "@/context/AppContext";
import type { Project } from "@/features/projects/data/projects";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    const { lang } = useApp();
    const navigate = useNavigate();

    if (projects.length === 0) {
        return (
            <div className="py-20 text-center text-sm text-muted-fg">
                {lang === "ar"
                    ? "لا توجد مشاريع في هذه الفئة."
                    : "No projects in this category yet."}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onViewDetails={() => navigate(`${project.id}`)}
                />
            ))}
        </div>
    );
}
