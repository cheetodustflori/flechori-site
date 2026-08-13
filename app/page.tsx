import HomeLeft from "./components/home-left";
import HomeRight from "./components/home-right";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" flex flex-col gap-5  max-w-7xl mx-auto items-start md:items-center pb-[30px]">

     
      <div className="grid md:grid-cols-2 grid-cols-1">
        <HomeLeft/>
        <HomeRight/>
      </div>

      <div className="w-full">
        <Footer/>
      </div>
      
      
    </div>
  );
}
