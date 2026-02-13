// app/art/[category]/page.tsx

export default function ArtCategoryPage({ params }: { params: { category: string } }) {
    const { category } = params;

    return (
        <div className="p-10 font-larken">
            <h1 className="text-4xl capitalize">{category}</h1>
            <p className="mt-4">Welcome to the {category} gallery.</p>
            
            {/* You can create a conditional grid here based on the category */}
            <div className="grid grid-cols-3 gap-4 mt-10">
                {/* Logic to map through category-specific images */}
            </div>
        </div>
    );
}