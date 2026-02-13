import {projects} from "../projects";
import Header from "@/app/components/header";
import Link from "next/link";

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

    if (!project) return <div>Project not found</div>;

    return (
        <div className="flex flex-col gap-10 m-[15px] pb-[50px]">
            <Header>
                <h1 className="text-2xl font-bold italic font-larken">{project.name}</h1>
                <Link href="/projects" className="font-larken">back to projects</Link>
            </Header>
            <div className="border rounded-3xl h-[400px]"></div>
            <div id="project-description" className="flex flex-col w-full gap-10">
                
                <p className="font-larken font-bold"> <a href="#" className="underline">repository</a> | {project.date}</p>
                <ul className="flex flex-col gap-10">
                    <li>
                        <p className="font-bold font-larken">tools:</p>
                    </li>
                    <li>
                        <p className="font-bold font-larken">description:</p>
                    </li>
                    <li>
                        <p className="font-bold font-larken">my role:</p>
                    </li>
                    
                
                
                </ul>
                
                {/* <div className="border"></div> */}
                {/* <p className="font-bold">about:</p> */}
            </div>
            
        </div>
    );
}