import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
 
function SupportPage() {
    return ( 
        <div className="text-white max-w-screen overflow-x-hidden pt-40 bg-gradient-to-br from-[#0f172a] to-[#134e4a]">   
            
            <Hero></Hero>
            <CreateTicket></CreateTicket>
        </div>
     );
}

export default SupportPage;