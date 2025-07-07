function Hero() {
  return (
    <div className="">
        <br />
      <div className=" text-center mb-24">
        <h1 className="mb-8 text-4xl font-medium">
          Pricing
        </h1>
        <p className="mb-24 text-2xl">Free equity investments and flat <i class="fa-solid fa-indian-rupee-sign"></i> 20 traday and F&O trades</p>
        <hr />
      </div>
      <div className="flex justify-evenly ">
         <div className="m-8 text-center">
             <img src="images/pricing0.svg" className="h-96 w-96" alt="" />
             <h1 className="text-4xl font-medium mb-4">Free equity delivery</h1>
             <p className="text-xl">All equity delivery investments are absolutely free — ₹ 0 brokerage</p>
         </div>
         <div className="m-8 text-center">
             <img src="images/intradayTrades.svg" className="h-96 m-auto w-96" alt="" />
             <h1 className="text-4xl font-medium mb-4">Intraday and F&O trades</h1>
             <p className="text-xl">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
         </div>
         <div className="m-8 text-center">
             <img src="images/pricing0.svg" className="h-96 m-auto w-96" alt="" />
             <h1 className="text-4xl font-medium mb-4">Free direct MF</h1>
             <p className="text-xl">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
         </div>
      </div>
      <br />
    </div>
  );
}

export default Hero;
