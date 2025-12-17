import ProjectComponent from "./projectComponent"
import {projects} from "./projects"
import Header from "../components/header";

export default function Projects(){
    return (
        <div className="flex flex-col gap-10 items-center m-[15px]">
            <Header> 
                <h1 className="text-2xl font-bold italic font-larken ">projects</h1>
                <h3>showing {projects.length}/{projects.length}</h3>
            </Header>
            <div className="grid grid-cols-3 grid-rows-3 gap-10 justify-center align-middle items-center">
                {projects.map(project => (
                    // <li key={project.id}>{project.name}</li>
                    <ProjectComponent key={project.id} project={project}/>
                ))}
            </div>
            <div>pagination</div>
        </div>
    );
}