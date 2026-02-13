import ExperienceComponent from "./experienceComponent"

export interface Experience {
    id: number,
    company: string,
    companyLink: string,
    position: string,
    date: string,
    photoUrl: string,
    tools: string,
    description: string,
    color: string | "blue"
}

const experiences: Experience[] = [
    {
        id: 1,
        company: "mcdonald's",
        companyLink: "#",
        position: "software developer intern",
        date: "jun 26 - aug 26",
        photoUrl: "#",
        tools: "a,b,c",
        description: "upcoming!!",
        color: "blue"
    },
    {
        id: 2,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer intern",
        date: "jun 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "blue"
    },
    {
        id: 3,
        company: "machine organization course: cs 261",
        companyLink: "#",
        position: "teaching assistant",
        date: "jan 25 - present",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "blue"
    },
    {
        id: 4,
        company: "uic lit lab",
        companyLink: "#",
        position: "research assistant + web dev",
        date: "may 24 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "blue"
    },
    {
        id: 5,
        company: "uic innovation center",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 24",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "blue"
    },
];

export default function Experience() {
    return (
        <div className="flex flex-col gap-5">
            {experiences.map(experience => (
                <ExperienceComponent key={experience.id} experience={experience}/>
            ))}
        </div>
    )
}