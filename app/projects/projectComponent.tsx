// ProjectComponent.tsx
import Link from "next/link";
import type { Project } from "./projects";

type Props = {
    project: Project;
};

export default function ProjectComponent({ project }: Props) {
    return (
        // Navigate to /projects/1, /projects/2, etc.
        <Link href={`/projects/${project.id}`}>
            <div id="project-component" className="hover:shadow-lg transition-shadow cursor-pointer font-larken flex flex-col w-[130px] h-[130px] rounded-2xl p-5 m-auto border text-center justify-center">
                <h3>{project.name}</h3>
                <h3 className="font-bold text-sm">{project.type}</h3>
            </div>
        </Link>
    );
}