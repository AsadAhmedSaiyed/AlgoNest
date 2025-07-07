
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
    return ( 
        <div className="pt-32 max-w-screen overflow-x-hidden text-white bg-gradient-to-br from-[#0f172a] to-[#134e4a]">
           
            <Hero></Hero>
            <LeftImage imageURL="images/kite.png" title="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices" ></LeftImage>
            <RightImage title="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." imageURL="images/console.png"></RightImage>
            <LeftImage imageURL="images/coin.png" title="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices" ></LeftImage>
            <RightImage title="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." imageURL="images/kiteconnect.png"></RightImage>
            <LeftImage imageURL="images/varsity.png" title="Varsity mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." ></LeftImage>
            <p className="text-2xl p-4 my-28  text-center">Want to know more about our technology stack? Check out the AlgoNest.tech blog.</p>
            <Universe></Universe>
          
        </div>
     );
}

export default ProductPage;