import {projects} from "../projects";
import Header from "@/app/components/header";
import Link from "next/link";
import type { Project } from "../projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}


export default async function ProjectPage({ 
    params 
}: { 
    params: Promise<{ id: string }>; 
}) {
    const { id } = await params;
    // Note: params.id comes in as a string from the URL
    
    const project = projects.find((p) => p.id === parseInt(id));
    const photo = project?.photos?.[0] ?? "";
    const linkExists = project?.site;

    if (!project) return <div>Project not found</div>;

    return (
        <div className="flex flex-col gap-10 m-[15px] pb-[50px]">
            <Header>
                <h1 className="text-2xl font-bold italic font-larken">{project.name}</h1>
                <Link href="/projects" className="font-larken">back to projects</Link>
            </Header>
                <img src={photo} className="border rounded-3xl h-[400px]"></img>
            <div id="project-description" className="flex flex-col w-full gap-10">
                <div className="flex">
                    <img src="/github.png" width="30px"/>
                    <p className="font-larken font-bold">
                    <a href={project.link} target="_blank" className="underline">repository</a> | {project.date} | </p>
                    {linkExists && <a href={project.site} target="_blank" className="ml-3 underline">🔗 visit the site</a>}
                </div>
                <ul className="flex flex-col gap-10">
                    <li>
                        <p className="font-bold font-larken">tools:</p>
                        <p>{project.tools}</p>
                    </li>
                    <li>
                        <p className="font-bold font-larken">description:</p>
                        <p>{project.description}</p>
                    </li>
                    <li>
                        <p className="font-bold font-larken">my role:</p>
                        <p>{project.role}</p>
                    </li>
                    
                
                
                </ul>
                
                {/* <div className="border"></div> */}
                {/* <p className="font-bold">about:</p> */}
            </div>
            
        </div>
    );
}