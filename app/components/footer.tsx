import Link from "next/link"
export default function Footer() {
    return (
        <div className="flex flex-col text-sm justify-center md:w-full items-center md:h-[50px] border md:gap-5 md:text-xl md:flex-row">
            <Link href="/about"><h2 className="font-bold hover:underline">about me! aka resume stuff: </h2></Link>
            <Link href="/about#skills" className="hover:underline">skills</Link> | <Link href="/about#experience" className="hover:underline">experience</Link> | <Link href="/about#leadership" className="hover:underline">leadership</Link>
        </div>
    )
}