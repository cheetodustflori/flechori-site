import Footer from "../components/footer"
import Skills from "../components/about/skills";
import Experience from "../components/about/experience";
import Leadership from "../components/about/leadership";
import Image from "next/image";


export default function About() {
    return (
        <div id="#about" className="flex flex-col gap-10 pb-[15px] overflow-clip ">
            <Footer/>
            <div>
                <div className="text-center font-bold">FLORIANNE CHE... FLORI CHE... <i>FLECHORI..?</i></div>
                <div className="text-center">COMPUTER SCIENCE @ UNIVERSITY OF IL. CHICAGO</div>
                <div className="text-center">GRAD. MAY 2027</div>
                <div className="text-center">likes: walking, purple rice from hey yogurt, jjk </div>
            </div>
            
            <div id="top-about" className="md:grid md:grid-cols-2 font-larken mt-[15px] mb-[15px]">
                <div className="hidden md:block">
                        <Image alt="polaroid2" width="300" height="300" src="/polaroid2.png" className=""/>
                </div>
                <div className="md:text-right w-full">
                    <p>
                        {/* <pre> */}
                        to be honest, I chose computer science 
                        because my dad recommended it to me. cs 
                        seemed the most stable in terms of job 
                        security. prior to that, i never had  
                        any personal interest in computers, games, or the 
                        workings of technology. 
                        <br/>
                        <br/>
                        but regardless of my fast-changing-
                        interests, there is one thing about me 
                        that’s been true since high school. <b>once I 
                        set my mind to something, i put in my all.</b>
                        <br/>
                        <br/>
                        if I was going to be a computer science 
                        student, I wouldn’t leave with any regrets. 
                        from freshman year, I threw myself into as 
                        many extracurriculars as I could to get 
                        connected and improve my leadership 
                        skills. <b>I was going to speed-run my way out 
                        of my noob rank.</b>
                    {/* </pre> */}
                    </p>
                </div>
            </div>
            <div id="bottom-about" className="font-larken">
                <p>
                    The best part of being completely clueless is you become more open
                    to asking all sorts of questions and requesting help from everyone.
                    <br/>
                    <br/>
                    I had many mentors and classmates who encouraged me to keep pushing. YouTube creators served as points of inspiration. I expanded my skills and challenged myself 
                    to keep learning. I developed a love for designing fun interfaces and web 
                    development. In my free time, I watched tutorial videos to build my skills.
                    <br/>
                    <br/>
                    By the time Summer 2025 came around, i realized how much I <b>love designing, 
                    building, and telling stories with the things I create.</b> I am so blessed to have a God-given 
                    passion for teaching others and being a part of community.
                    <br/>
                    <br/>
                    So.... What’s my goal in life? To honor and glorify God and enjoy Him forever.
                    <br/>
                    <br/>
                    In everything I do, I seek to glorify Him with my discipline, integrity, and commitment to serving people.
                    <br/>
                    <br/>
                    If God wills it, I will continue to do so as a teacher,  programmer, and lifelong student.
                    <br/>
                    <br/>

                    <b>"So whether you eat or drink or whatever you do, do it all for the glory of God."</b><br/>
                    <b>1 Corinthians 10:31</b>
                </p>
            </div>

            {/* SKILLS */}

            <div id="about-bottom-section" className="flex flex-col gap-10">

            
                {/* <div id="skills" className="">
                    <h1 className="font-bold text-2xl">✏️ SKILLS</h1>
                    <Skills/>
                </div> */}

                {/* EXPERIENCE */}

                <div id="experience" className=" ">
                    <h1 className="font-bold text-2xl">💼 EXPERIENCE</h1>
                    <Experience/>
                </div>

                {/* LEADERSHIP */}

                <div id="leadership" className="">
                    <h1 className="font-bold text-2xl ">👤 LEADERSHIP</h1>
                    <Leadership/>
                </div>
            </div>
        </div>
    )
}