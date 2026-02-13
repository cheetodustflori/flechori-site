export default function Skills() {
    return (
        <div className="grid grid-cols-2 gap-5 mt-[15px]">
            <div id="languages" className="border w-[300px] h-[400px]">
                <div className="border-b h-10 bg-[#6C89C4]"><p className="font-bold text-center text-white">LANGUAGES</p></div>
                <ul className="p-5">
                    <li>html/css</li>
                    <li>javascript</li>
                    <li>python</li>
                    <li>c/c++</li>
                    <li>assembly. ish</li>
                </ul>
            </div>
            <div id="skills-right" className="grid grid-rows-2 ">
                <div id="tools" className="border w-[300px] h-[175px]">
                    <div className="border-b h-10 bg-[#21345F]"><p className="font-bold text-center text-white">TOOLS</p></div>
                    <ul className="p-5">
                    <li>tailwind</li>
                    <li>react</li>
                    <li>astro</li>
                    <li>firebase</li>
                    {/* <li>jenkins</li> */}
                </ul>
                </div>
                <div id="extra" className="border w-[300px] h-[200px]">
                    <div className="border-b h-10 bg-[#E4615A]"><p className="font-bold text-center text-white">EXTRA</p></div>
                    <ul className="p-5">
                    <li>jenkins</li>
                    <li>skill</li>
                    <li>skill</li>
                    <li>skill</li>
                    <li>skill</li>
                </ul>
                </div>
            </div>
        </div>
    )
}