import Link from "next/link"
export default function Footer() {
    return (
        <div className="flex justify-center w-full items-center h-[50px] border gap-5 text-xl">
            <Link href="/about"><h2 className="font-bold hover:underline">about me! aka resume stuff: </h2></Link>
            <Link href="/about#skills" className="hover:underline">skills</Link> | <Link href="/about#experience" className="hover:underline">experience</Link> | <Link href="/about#leadership" className="hover:underline">leadership</Link>
        </div>
    )
}