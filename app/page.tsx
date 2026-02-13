import HomeLeft from "./components/home-left";
import HomeRight from "./components/home-right";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center pb-[30px]">
      
      <div className="grid grid-cols-2 tablet:grid-cols-1">
        <HomeLeft/>
        <HomeRight/>
      </div>
      <Footer/>
      
    </div>
  );
}
