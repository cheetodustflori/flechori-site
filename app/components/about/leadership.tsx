import ExperienceComponent from "./experienceComponent"
import type { Experience } from "./experience";

const leadership: Experience[] = [
    {
        id: 1,
        company: "women in computer science",
        companyLink: "#",
        position: "dev project: lead",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "yellow"
    },
    {
        id: 2,
        company: "sparkhacks",
        companyLink: "#",
        position: "web dev team: lead",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "yellow"
    },
    {
        id: 3,
        company: "association of computing for machinery",
        companyLink: "#",
        position: "sig ios lead + treasurer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "yellow"
    },
    {
        id: 4,
        company: "leaf",
        companyLink: "#",
        position: "ios developer",
        date: "may 25 - aug 25",
        photoUrl: "#",
        tools: "a,b,c",
        description: "a,b,c",
        color: "yellow"
    },
];

export default function Leadership() {
    return (
        <div className="flex flex-col gap-5">
            {leadership.map(item => (
                <ExperienceComponent key={item.id} experience={item}/>
            ))}
        </div>
    )
}