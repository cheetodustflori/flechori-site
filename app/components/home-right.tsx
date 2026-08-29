// import Polaroid from "../../public/polaroid.png"
import SpotifyWidget from "./SpotifyWidget";
import Image
 from "next/image";
export default function HomeRight() {
    return (
        <div className="flex flex-col w-full max-w-[200px] gap-4 md:m-auto">
            <div>
                <Image width="200" height="300" alt="polaroid" src="/polaroid.png"/>
            </div>
            <div id="currently-listen" className="flex flex-col gap-2 w-full max-w-[200px] text-center">
                {/* <p>🎧 currently listening to...</p> */}
                {/* <div id="song" className="bg-[#21345F] text-white font-bold text-center p-2 rounded-3xl shadow-2xs">song - some artist</div> */}
                {/* <SpotifyWidget/> */}
            </div>
            <div id="links" className="flex flex-row justify-center align-middle items-center gap-5">
                <a href="https://github.com/cheetodustflori" target="_blank"><Image width="200" height="300" alt="polaroid" src="/github.png" className=" w-[30px]"/></a>
                <a href="https://www.linkedin.com/in/florianne-che/" target="_blank"><Image width="200" height="300" alt="polaroid" src="/linkedin.png" className=" w-[25px]"/></a>
                <a href="mailto:florianneche@gmail.com?subject=flechori&body=I visited your personal website and love it!" target="_blank"><Image width="200" height="300" alt="polaroid" src="/mail.svg" className=" w-[25px]"/></a>
                <a href="https://www.youtube.com/@florianneche" target="_blank"><Image width="200" height="300" alt="polaroid" src="/video.svg" className=" w-[25px]"/></a>
            </div>
            <div id="votd" className="border h-[140px] w-[200px] p-[7px] rounded-lg">
                <p>
                    <span className="underline font-bold">a verse for you:</span><br/>
                    “My grace is sufficient for you, for my 
                    power is made perfect in weakness.”<br/>
                    <span className="font-bold">2 Corinthians 12:9</span>
                </p>
            </div>
        </div>
    );
}