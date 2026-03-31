import ExperienceComponent from "./experienceComponent"
import type { Experience } from "./experience";

const leadership: Experience[] = [
    {
        id: 1,
        company: "women in computer science",
        companyLink: "#",
        position: "dev project: lead",
        date: "may 25 - aug 25",
        photoUrl: ["leadership/wics/wics1.jpg","leadership/wics/wics2.jpg","leadership/wics/wics3.jpg","leadership/wics/wics4.jpg","leadership/wics/wics5.jpg",],
        tools: "",
        description: "Lead team of 15 students in semester-long website development projects using React.js, Astro, and Node.js.",
        color: "yellow"
    },
    {
        id: 2,
        company: "sparkhacks",
        companyLink: "#",
        position: "web dev team: lead",
        date: "may 25 - aug 25",
        photoUrl: ["leadership/sparkhacks/sh9.jpg","leadership/sparkhacks/sh3.jpg","leadership/sparkhacks/sh8.jpg","leadership/sparkhacks/sh5.jpg","leadership/sparkhacks/sh2.png","leadership/sparkhacks/sh7.png","leadership/sparkhacks/sh1.jpg",],
        tools: "",
        description: "Lead team of developers. Support 2-day Hackathon event.",
        color: "yellow"
    },
    {
        id: 3,
        company: "association of computing for machinery",
        companyLink: "#",
        position: "sig ios lead + treasurer",
        date: "may 25 - aug 25",
        photoUrl: ["leadership/acm/acm.jpg","leadership/acm/acm2.jpg","leadership/acm/acm3.jpg","leadership/acm/acm4.jpg",],
        tools: "",
        description: "Taught students Swift for one semester. Supported administrative needs, organized events, held educational workshop events, contributed to leadership meetings.",
        color: "yellow"
    },
    {
        id: 4,
        company: "leaf",
        companyLink: "#",
        position: "ios developer",
        date: "may 25 - aug 25",
        photoUrl: ["leadership/leaf/leaf.png","leadership/leaf/leaf2.jpg","leadership/leaf/leaf4.png","leadership/leaf/leaf5.png","leadership/leaf/leaf6.png","leadership/leaf/leaf7.jpg",],
        tools: "",
        description: "Served as education chair and iOS developer. Was part of the iOS development of financial literacy app and hosted several financial literacy events (discussions, speaker events, and fundraisers). ",
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