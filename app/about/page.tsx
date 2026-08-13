import Footer from "../components/footer"
import Skills from "../components/about/skills";
import Experience from "../components/about/experience";
import Leadership from "../components/about/leadership";
import Image from "next/image";


export default function About() {
    return (
        <div id="#about" className="flex flex-col gap-10 pb-[15px]">
            <Footer/>
            <div id="top-about" className="md:grid md:grid-cols-2 font-larken mt-[15px] mb-[15px]">
                <div className="hidden md:block">
                        <Image alt="polaroid2" width="300" height="300" src="/polaroid2.png" className=""/>
                </div>
                <div className="md:text-right w-full">
                    <p>
                        {/* <pre> */}
                        i’ve always been the type of person who 
                        was very much type “s” (if you’re into 
                        mbti). i’m loyal to what i know and i don’t 
                        tend to test the unknown. entering college, 
                        to be honest, I chose computer science 
                        because my dad recommended it to me. cs 
                        seemed the most stable in terms of job 
                        security. prior to that, i never had personal 
                        any interest in computers, games, or the 
                        workings of technology. 
                        <br/>
                        <br/>
                        but regardless of my ever-changing-
                        interests, there is one thing about me 
                        that’s been true since high school. once I 
                        set my mind to something, i put in my all.
                        <br/>
                        <br/>
                        if I was going to be a computer science 
                        student, I wouldn’t leave with any regrets. 
                        from freshman year, I threw myself into as 
                        many extracurriculars as I could to get 
                        connected and improve my leadership 
                        skills. I would not remain idle.
                    {/* </pre> */}
                    </p>
                </div>
            </div>
            <div id="bottom-about" className="font-larken">
                <p>
                    I was promoted to leadership positions in three CS clubs by the end of my
                    freshman year. I learned how to communicate my strengths and develop my
                    technical skills on my own.
                    <br/>
                    <br/>
                    In addition to the soft skills, the tech skills matter just as much. CS is a tough field to excel in. As important as it is to network and get 
                    involved in clubs, you also just need to be good at programming and, to a 
                    certain extend, enjoy it. I struggled initially in my sophomore year.  As I got 
                    exposed to more of the CS field, I felt more like a fish-out-of-water. There was a 
                    lot of uncertainty about my capabilities.
                    <br/>
                    <br/>
                    I had many mentors and classmates who encouraged me to keep pushing. YouTube creators served as points of inspiration. I endured. I expanded my skills and challenged myself 
                    to keep learning. I developed a love for designing fun interfaces and web 
                    development. In my free time, I watched tutorial videos to build my skills.
                    <br/>
                    <br/>
                    By the time I entered summer 2025, i realized how much I <b>love</b> designing, 
                    building, and telling stories with the things I create. I truly have a God-given 
                    passion for teaching people and using my blessings to help others in return.
                    <br/>
                    <br/>
                    What’s my goal in life? To honor and glorify God and enjoy Him forever.
                    <br/>
                    <br/>
                    In everything I do, I seek to honor Him with my discipline, integrity, and commitment to serving people.
                    <br/>
                    <br/>
                    If God wills it, I will continue to do so as a teacher,  programmer, and lifelong student.
                
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