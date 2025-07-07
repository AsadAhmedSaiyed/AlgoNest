
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";


function HomePage() {
    return ( 
        <div className="text-white w-full overflow-x-hidden bg-gradient-to-br from-[#0f172a] to-[#134e4a]">
            <br />
            <br />
            <Hero></Hero>
            <Awards></Awards>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            <OpenAccount></OpenAccount>
             <br />
            
        </div>
     );
}

export default HomePage;