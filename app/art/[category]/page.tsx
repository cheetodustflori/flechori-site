// app/art/[category]/page.tsx
"use client";
import Header from "@/app/components/header";
import { useState, use } from "react";
import Link from "next/link";
import { artWork } from "../art";
import type { Art } from "../art";
import Image from "next/image";

export default function ArtCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const [selectedArt, setSelectedArt] = useState<Art | null>(null);
    const { category } = use(params);

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
                            <div 
                                key={art.id} 
                                className="group"
                                onClick={() => setSelectedArt(art)}>
                                <div className="aspect-square border overflow-hidden rounded-xl bg-gray-50">
                                    <Image 
                                        width="300"
                                        height="300"
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

            {selectedArt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedArt(null)}>
          <div className="bg-white p-8 rounded-2xl max-w-md w-full font-larken shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image  width="300" height="300"
                                        src={selectedArt.src} 
                                        alt={selectedArt.title} 
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                                        
                                    />
            <button 
              className="mt-6 w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setSelectedArt(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    );
}