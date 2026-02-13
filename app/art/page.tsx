import Link from "next/link";
export default function Art() {
  return (
    <div className="flex flex-col gap-10 m-[15px]">
      <div>
        <h1 className="text-2xl font-bold italic font-larken">art</h1>
      </div>

      <div className="flex">
        <ul className="w-full flex flex-col gap-4">
          <ul className="w-full flex flex-col gap-4">
            <li className="border flex items-center hover:relative hover:bottom-1 hover:shadow-md">
              <div><img src="app-6.svg"/></div>
              <Link href="/art/doodles" className="font-bold text-2xl">doodles</Link>
            </li>
            <li className="border flex items-center hover:relative hover:bottom-1 hover:shadow-md">
              <div><img src="app-5.svg"/></div>
              <Link href="/art/portraits" className="font-bold text-2xl">digital portraits</Link>
            </li>
            <li className="border flex items-center hover:relative hover:bottom-1 hover:shadow-md">
              <div><img src="app-2.svg" width="75px"/></div>
              <Link href="/art/comics" className="font-bold text-2xl">comics</Link>
            </li>
          </ul>
        </ul>
        

      </div>
      <div className="grid-cols-3 grid-rows-3"></div>
    </div>
  );
}
