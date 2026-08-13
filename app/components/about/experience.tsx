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
        company: "uic innovation center",
        companyLink: "#",
        position: "ui design intern",
        date: "may 24",
        photoUrl: ["/experiences/innovation/inov1.jpg","/experiences/innovation/inov2.jpg","/experiences/innovation/inov3.jpg","/experiences/innovation/inov4.jpg","/experiences/innovation/inov5.jpg",],
        tools: "Figma",
        description: "Led ideation and UI/UX design in Figma of healthcare app interface collecting health-needs assessments to improve rural clinic services. Conducted demographic research to tailor features for underserved rural populations.",
        color: "blue"
    },
    {
        id: 2,
        company: "uic lit lab",
        companyLink: "#",
        position: "research assistant + web dev",
        date: "may 24 - aug 25",
        photoUrl: [],
        tools: "html, css, jquery, Figma",
        description: "❗Gained a lot of experience working independently in a feedback loop with a mentor and professor. Developed re-design of website interface in HTML, CSS, JS, and jQuery for a teacher authoring tool, increasing navigation efficiency and usability. Implemented visual summary of teacher comment types and filtering mechanism to sort comment types. Led in-person research at Forest Park Middle School, collecting feedback from 20+ students.",
        color: "blue"
    },
    {
        id: 3,
        company: "machine organization course: cs 261",
        companyLink: "#",
        position: "teaching assistant",
        date: "jan 25 - may 26",
        photoUrl: ["#"],
        tools: "Assembly, GDB, C",
        description: "Worked with the best professor ever. Published weekly walkthrough videos breaking down assembly, data representation, and memory concepts (felt like my calling for a while... should I build the next Khan Academy?). Supported 150+ students in office hours and facilitated weekly labs for 30+ students.",
        color: "blue"
    },
    {
        id: 4,
        company: "imanage",
        companyLink: "#",
        position: "front end swe developer intern",
        date: "jun 25 - aug 25",
        photoUrl: ["/experiences/imanage/iman2.jpg","/experiences/imanage/iman3.jpg","/experiences/imanage/iman4.jpg","/experiences/imanage/iman5.jpg","/experiences/imanage/iman6.jpg",],
        tools: "React, Python, Jenkins, Microsoft Azure Storage, Selenium, PyTorch",
        description: "Built a collaborative commenting extension for an enterprise web application, adding threaded replies, resolve/edit/delete actions, and Microsoft Office Word integration with React. Implemented REST API endpoints to store comments in Microsoft Azure Table NoSQL Storage. Authored and deployed 10+ automated UI tests using Selenium in PyCharm, utilized Jenkins. Worked in two-week Agile sprints in Jira to deliver 3 production-ready pull requests into codebase.",
        color: "blue"
    },
    {
        id: 5,
        company: "peak6",
        companyLink: "#",
        position: "software developer intern",
        date: "jun 26 - aug 26",
        photoUrl: ["#"],
        tools: "Python, Claude Code, secret trader tools...",
        description: "Had a blast! Spent 4 weeks in options trading, learned poker, got practice asking questions about things I'm curious about. developed an app for engineers to test their development changes within execution system using Claude Code and Python. Integrated an AI summary of post-run performance with a dashboard of performance metrics. Improved productivity by 100%.",
        color: "blue"
    },
    
    
    
    
];

export default function Experience() {
    
    return (
        <div className="flex flex-col gap-5">
            {[...experiences].sort((a,b) => b.id - a.id).map(experience => (
                <ExperienceComponent key={experience.id} experience={experience}/>
            ))}
        </div>
    )
}