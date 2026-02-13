// app/projects/[id]/page.tsx
import { projects } from "./projects"; // Adjust path as needed
import Header from "../components/header";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
    // Find the project that matches the ID in the URL
    const project = projects.find((p) => p.id === parseInt(params.id));

    // If the project doesn't exist, show a 404
    if (!project) {
        notFound();
    }

    return ( 
        <div>
            <Header>
                <h1 className="text-2xl font-bold italic font-larken">projects</h1>
                <Link href="/projects" className="font-larken text-blue-500">← back to projects</Link>
            </Header>

            <div id="project-gallery" className="w-full border h-[400px] flex items-center justify-center bg-gray-50">
                <p>Gallery for {project.name} coming soon</p>
            </div>

            <div id="project-info" className="p-5">
                <h2 className="text-3xl font-bold">{project.name}</h2>
                <div className="flex gap-4 my-2">
                    <a href={project.link} className="underline">github repo</a>
                    <p className="text-gray-500">{project.date}</p>
                </div>
            </div>

            <div id="project-about" className="p-5 border-t">
                <p><strong>Type:</strong> {project.type}</p>
                <p><strong>Description:</strong> This is a deep dive into {project.name}.</p>
            </div>
        </div>
    );
}