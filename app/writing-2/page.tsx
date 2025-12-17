import Header from "../components/header";
export default function Writing(){
    return (
        <div className="flex flex-col gap-10 items-center m-[15px]">
        <Header> 
            <h1 className="text-2xl font-bold italic font-larken ">writing</h1>
        </Header>
        <div className="grid-cols-3 grid-rows-3"></div>
        </div>
    );
}