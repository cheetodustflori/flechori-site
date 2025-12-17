import ExperienceComponent from "./experienceComponent"
import type { Experience } from "./experience";

const leadership: Experience[] = [
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

export default function Leadership() {
    return (
        <div className="flex flex-col gap-5">
            {leadership.map(item => (
                <ExperienceComponent key={item.id} experience={item}/>
            ))}
        </div>
    )
}