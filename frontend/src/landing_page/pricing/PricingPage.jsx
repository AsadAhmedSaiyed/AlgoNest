import OpenAccount from "../OpenAccount.jsx";
import Brokerage from "./Brokerage";
import Hero from "./Hero";


function PricingPage() {
    return ( 
       <div className="text-white max-w-screen overflow-x-hidden pt-32 bg-gradient-to-br from-[#0f172a] to-[#134e4a]">
        
         <Hero></Hero>
         <OpenAccount></OpenAccount>
         <Brokerage></Brokerage>
       
       </div>
     );
}

export default PricingPage;