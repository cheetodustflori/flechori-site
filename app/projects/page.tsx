"use client"; // Required for useState
import { useState } from "react";
import ProjectComponent from "./projectComponent";
import { projects } from "./projects";
import Header from "../components/header";

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Calculate indices
    const indexOfLastProject = currentPage * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;
    
    // Slice the array to only show 9 projects
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Calculate total pages
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    return (
        <div className="flex flex-col gap-10 items-center m-[15px] pb-[50px]">
            <Header> 
                <h1 className="text-2xl font-bold italic font-larken">projects</h1>
                <h3>showing {currentProjects.length}/{projects.length}</h3>
            </Header>

            {/* Grid showing only the sliced projects */}
            <div className="grid grid-cols-3 grid-rows-3 gap-10 justify-center items-center min-h-[450px]">
                {currentProjects.map(project => (
                    <ProjectComponent key={project.id} project={project} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="w-full mt-4 flex items-center justify-between">
                <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    className="font-larken disabled:opacity-40 cursor-pointer"
                >
                    previous
                </button>

                {/* <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-8 h-8 rounded-full border ${currentPage === i + 1 ? 'bg-black text-white' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div> */}

                <div className="font-larken">
                page {currentPage} / {totalPages}
                </div>

                

                <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    className="font-larken disabled:opacity-40 cursor-pointer"
                >
                    next
                </button>
            </div>

            {/* <div className="mt-4 flex items-center justify-between">
                <button
                className="font-larken disabled:opacity-40 cursor-pointer"
                // CHANGED: goToPage for smooth transition
                onClick={() => goToPage(Math.max(1, page - 1))}
                disabled={page === 1}
                >
                prev
                </button>

                <div className="font-larken">
                page {page} / {totalPages}
                </div>

                <button
                className="font-larken disabled:opacity-40 cursor-pointer"
                // CHANGED: goToPage for smooth transition
                onClick={() => goToPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
                >
                next
                </button>
            </div> */}
        </div>
    );
}