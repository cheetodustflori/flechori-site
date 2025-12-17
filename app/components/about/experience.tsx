import ExperienceComponent from "./experienceComponent"

export interface Experience {
    id: number,
    company: string,
    companyLink: string,
    position: string,
    date: string,
    photoUrl: string,
    tools: string,
    description: string
}

const experiences: Experience[] = [
    {
        id: 1,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c"
    },
    {
        id: 2,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c"
    },
    {
        id: 3,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c"
    },
    {
        id: 4,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c"
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