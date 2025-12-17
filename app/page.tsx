import HomeLeft from "./components/home-left";
import HomeRight from "./components/home-right";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center">
      
      <div className="grid grid-cols-2">
        <HomeLeft/>
        <HomeRight/>
      </div>
      <Footer/>
    </div>
  );
}
