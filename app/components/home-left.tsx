import Link from "next/link";

export default function HomeLeft() {
    return (
        <div className="flex flex-col gap-4 m-auto">
            <div className="w-full m-auto">
                <Link href="/projects"><img className="hover:shadow-sm rounded-2xl hover:shadow-sm rounded-2xl" src="projects.svg"/></Link>
            </div>
            <div id="homeLeftBlurb">
                <p className="max-w-[300px]">
                    welcome to my page! this site is a digital
                    record of all my projects, hobbies, and 
                    interests. i'm a computer science major
                    studying at the university of illinois at 
                    chicago 💻 i love to design and build new 
                    things, find some of them <Link href="/projects" className="underline">here</Link>. in my free
                    time, i like to <Link href="/writing" className="underline">write</Link> and film <Link href="#" className="underline">videos</Link>, i also
                    post my <Link href="/art" className="font-bold underline">doodles</Link> sometimes from lecture.
                    one day i will publish a web comic.
                </p>
            </div>
            <div id="creative spaces" className=" w-fit">
                <h1 className="mb-3">explore my creative <b>spaces</b> here:</h1>
                <div className="grid grid-cols-2 gap-7 p-0 w-fit m-auto">
                    <Link href="/books" className=" m-auto w-[50px] text-center"><img className="hover:shadow-sm rounded-2xl" src="app-1.svg"/>books</Link>
                    <Link href="/writing" className=" m-auto w-[50px] text-center"><img className="hover:shadow-sm rounded-2xl" src="app-2.svg"/>writing</Link>
                    <Link href="/photos" className=" m-auto w-[50px] text-center"><img className="hover:shadow-sm rounded-2xl" src="app-3.svg"/>photos</Link>
                    <Link href="/art" className=" m-auto w-[50px] text-center"><img className="hover:shadow-sm rounded-2xl" src="app-4.svg"/>art</Link>
                </div>
            </div>
        </div>
    );
}