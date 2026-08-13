import Header from "../components/header";
import ImageGallery from "../components/photos/photos";
import Image from "next/image";

export default function Photos(){
    return (
        
        <div className="flex flex-col gap-10 m-[15px]">
            <Header>
                <h1 className="text-2xl font-bold italic font-larken">photos</h1>
                {/* <h3>showing 9/9</h3> */}
            </Header>
            {/* <div className="grid-cols-4 grid-rows-3">
                
            </div> */}

            <ImageGallery/>

            <div id="bottom-photos" className="flex flex-col items-center">
                <div className="flex flex-row gap-5">
                    <Image width={50} height={50} alt="sonyzv1" src="sonyzv1.svg"/>
                    <Image width={50} height={50} alt="sonyzv1"  src="sonydigi.svg"/>
                </div>
                <p className="font-bold font-larken">@flechori on instagram</p>
            </div>
            <div>
                
            </div>
        </div>
    );
}