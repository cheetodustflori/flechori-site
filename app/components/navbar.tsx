import Link from "next/link"

export default function NavBar() {
    return (
        <div className="flex flex-row ml-[15px] mr-[15px] items-center align-middle relative justify-between  h-[30px] ">
            <Link href="/" className="text-2xl font-bold font-larken">flechori 🧸  🚏 📎 🪪 📷</Link>
            <h1 className="text-2xl font-pecita">__ my portfolio</h1>
        </div>
    )
}