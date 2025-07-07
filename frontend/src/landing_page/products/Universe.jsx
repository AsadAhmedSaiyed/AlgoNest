function Universe() {
  return (
    <div className="px-4 md:px-16 py-12">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          The AlgoNest Universe
        </h1>
        <p className="text-2xl md:text-3xl text-white">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-10">
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/smallcaseLogo.png" className="w-full h-24 object-contain" alt="Smallcase" />
          <p className="mt-4 text-center text-xl text-white">Thematic investing platform</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/zerodhaFundhouse.png" className="w-full h-24 object-contain" alt="Zerodha Fund House" />
          <p className="mt-4 text-center text-xl text-white">Asset management</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/sensibullLogo.svg" className="w-full h-24 object-contain" alt="Sensibull" />
          <p className="mt-4 text-center text-xl text-white">Options trading platform</p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-10 mt-16">
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/streakLogo.png" className="w-full h-24 object-contain" alt="Streak" />
          <p className="mt-4 text-center text-xl text-white">Algo & strategy platform</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/goldenpiLogo.png" className="w-full h-24 object-contain" alt="GoldenPi" />
          <p className="mt-4 text-center text-xl text-white">Bonds trading platform</p>
        </div>
        <div className="flex flex-col items-center max-w-xs">
          <img src="images/dittoLogo.png" className="w-full h-24 object-contain" alt="Ditto" />
          <p className="mt-4 text-center text-xl text-white">Insurance</p>
        </div>
      </div>

      <div className="flex justify-center mt-24">
        <button className="bg-slate-100 px-6 py-3 text-xl rounded-2xl text-black hover:bg-slate-200 transition">
          Sign up now
        </button>
      </div>
    </div>
  );
}

export default Universe;

