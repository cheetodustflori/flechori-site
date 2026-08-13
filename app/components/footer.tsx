import Link from "next/link"
export default function Footer() {
    return (
        <div className="flex flex-col text-sm w-full justify-center md:w-full items-center md:h-[50px] md:gap-5 md:text-xl md:flex-row">
            <Link href="/about"><h2 className="font-bold hover:underline">about me! aka resume stuff: </h2></Link>
            {/* <div className="hidden md:flex"><Link href="/about#skills" className="hidden md:block hover:underline">skills</Link> | <Link href="/about#experience" className="hidden md:block hover:underline">experience</Link> | <Link href="/about#leadership" className="hidden md:block hover:underline">leadership</Link></div> */}
            <div className="hidden md:flex"><Link href="/about#experience" className="hidden md:block hover:underline">experience</Link>  + <Link href="/about#leadership" className="hidden md:block hover:underline">leadership</Link></div>
        </div>
    )
}