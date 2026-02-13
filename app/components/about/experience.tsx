import ExperienceComponent from "./experienceComponent"

export interface Experience {
    id: number,
    company: string,
    companyLink: string,
    position: string,
    date: string,
    photoUrl: string[],
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
        photoUrl: ["#"],
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
        photoUrl: ["#"],
        tools: "a,b,c",
        description: "Built a collaborative commenting extension for an enterprise web application, adding threaded replies, resolve/edit/delete actions, and Microsoft Office Word integration with React. Implemented REST API endpoints to store comments in Microsoft Azure Table NoSQL Storage. Authored and deployed 10+ automated UI tests using Selenium in PyCharm, utilized Jenkins. Worked in two-week Agile sprints in Jira to deliver 3 production-ready pull requests into codebase.",
        color: "blue"
    },
    {
        id: 3,
        company: "machine organization course: cs 261",
        companyLink: "#",
        position: "teaching assistant",
        date: "jan 25 - present",
        photoUrl: ["#"],
        tools: "assembly, gdb, c",
        description: "Publish weekly walkthrough videos breaking down assembly, data representation, and memory concepts. Support 200+ students in office hours and facilitate weekly labs for 30 students.",
        color: "blue"
    },
    {
        id: 4,
        company: "uic lit lab",
        companyLink: "#",
        position: "research assistant + web dev",
        date: "may 24 - aug 25",
        photoUrl: ["#"],
        tools: "html, css, jquery, Figma",
        description: "Developed re-design of website interface in HTML, CSS, JS, and jQuery for a teacher authoring tool, increasing navigation efficiency and usability. Implemented visual summary of teacher comment types and filtering mechanism to sort comment types. Led in-person research at Forest Park Middle School, collecting feedback from 20+ students.",
        color: "blue"
    },
    {
        id: 5,
        company: "uic innovation center",
        companyLink: "#",
        position: "front end swe developer",
        date: "may 24",
        photoUrl: ["#"],
        tools: "Figma",
        description: "Led ideation and UI/UX design in Figma of healthcare app interface collecting health-needs assessments to improve rural clinic services. Conducted demographic research to tailor features for underserved rural populations.",
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