import type { Experience } from "./experience";

type Props = {
    experience: Experience;
};

export default function ExperienceComponent({experience}:Props) {
    return (
        <div className="flex flex-col gap-4 mt-[15px] font-larken">
            <div id="exp-header" className="flex flex-row  items-center gap-5 justify-between">
                <div id="exp-left-header" className="flex flex-row gap-5 items-center">
                    <p className="text-white font-larken bg-[#809FDF] w-fit p-2.5 rounded-4xl border-black border">{experience.company}</p>
                    <p><b>{experience.position}</b></p>
                </div>
                <div id="exp-right-header">
                    <p>{experience.date}</p>
                </div>
            </div>
            <div id="exp-photos" className="m-auto">
                <ul className="flex flex-row gap-3">
                    <li className="w-[150px] h-[150px] border"></li>
                    <li className="w-[150px] h-[150px] border"></li>
                    <li className="w-[150px] h-[150px] border"></li>
                    <li className="w-[150px] h-[150px] border"></li>
                </ul>
            </div>
            <div id="exp-body">
                <p><b>tools:</b> {experience.tools}</p>
                <p><b>description:</b> {experience.description}</p>
            </div>
        </div>
    );
}