// app/art/[category]/page.tsx
import Header from "@/app/components/header";
import Link from "next/link";

// Example data structure for your artwork
const artWork = [
    { id: 1, category: 'doodles', src: '/art/peanut.jpg', title: 'Late Night Thinker' },
    { id: 2, category: 'comics', src: '/art/fish.jpg', title: 'The Kernel Panic' },
    // Add more as you create them!
];

export default async function ArtCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;

    // Filter images that belong to the current category
    const filteredArt = artWork.filter(item => item.category === category);

    return (
        <div className="flex flex-col gap-10 m-[15px]">
            <Header>
                <h1 className="text-2xl font-bold italic font-larken">art</h1>
                <Link href="/art" className="font-larken hover:underline">back to art</Link>
            </Header>

            <div className="font-larken">
                <h1 className="text-4xl capitalize">{category}</h1>
                <p className="mt-4 text-gray-600">Explore my collection of {category}.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {filteredArt.length > 0 ? (
                        filteredArt.map((art) => (
                            <div key={art.id} className="group">
                                <div className="aspect-square border overflow-hidden rounded-xl bg-gray-50">
                                    <img 
                                        src={art.src} 
                                        alt={art.title} 
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform" 
                                    />
                                </div>
                                <p className="mt-2 font-bold">{art.title}</p>
                            </div>
                        ))
                    ) : (
                        <p className="italic text-gray-400">Nothing here yet—stay tuned!</p>
                    )}
                </div>
            </div>
        </div>
    );
}