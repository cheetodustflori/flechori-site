// import Polaroid from "../../public/polaroid.png"

export default function HomeRight() {
    return (
        <div className="flex flex-col gap-4 m-auto">
            <div>
                <img width="200px" src="/polaroid.png"/>
            </div>
            <div id="currently-listen" className="flex flex-col gap-2 text-center">
                <p>🎧 currently listening to...</p>
                <div id="song" className="bg-[#21345F] text-white font-bold text-center p-2 rounded-3xl shadow-2xs">song - some artist</div>
            </div>
            <div id="links" className="flex flex-row justify-center align-middle items-center gap-5">
                <a href="https://github.com/cheetodustflori" target="_blank"><img src="github.svg" className=" w-[25px]"/></a>
                <a href="https://www.linkedin.com/in/florianne-che/" target="_blank"><img src="in.svg" className=" w-[25px]"/></a>
                <a href="mailto:florianneche@gmail.com?subject=flechori&body=I visited your personal website and love it!" target="_blank"><img src="mail.svg" className=" w-[25px]"/></a>
                <a href="https://www.youtube.com/@florianneche" target="_blank"><img src="video.svg" className=" w-[25px]"/></a>
            </div>
            <div id="votd" className="border h-[140px] w-[200px] p-[7px] rounded-lg">
                <p>
                    <span className="underline font-bold">verse of the day:</span><br/>
                    “My grace is sufficient for you, for my 
                    power is made perfect in weakness.”<br/>
                    <span className="font-bold">2 Corinthians 12:9</span>
                </p>
            </div>
        </div>
    );
}