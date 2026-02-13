import Link from "next/link";
export default function Art() {
  const artCategories = [
  { slug: 'doodles', title: 'Doodles', icon: 'app-6.svg' },
  { slug: 'portraits', title: 'Digital Portraits', icon: 'app-5.svg' },
  { slug: 'comics', title: 'Comics', icon: 'app-2.svg' },
];
  return (
    <div className="flex flex-col gap-10 m-[15px]">
      <div>
        <h1 className="text-2xl font-bold italic font-larken">art</h1>
      </div>

      <div className="flex">
        <ul className="w-full flex flex-col gap-4">
          {artCategories.map((cat) => (
            <li 
              key={cat.slug} 
              className="border flex items-center hover:relative hover:bottom-1 hover:shadow-md">
              <div>
                <img src={cat.icon}/>
              </div>
              <Link href={`/art/${cat.slug}`} className="font-bold text-2xl">
              {cat.title.toLowerCase()}</Link>
            </li>
          ))}
          </ul>
      </div>
      {/* <div className="grid-cols-3 grid-rows-3"></div> */}
    </div>
  );
}
