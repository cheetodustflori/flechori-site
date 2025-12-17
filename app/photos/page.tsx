export default function Photos(){
    return (
        <>
        <div className="flex flex-row w-full justify-between ">
            <h1 className="text-2xl font-bold italic font-larken">Photos</h1>
            <h3>showing 9/9</h3>
        </div>
        <div className="grid-cols-3 grid-rows-3"></div>
        </>
    );
}