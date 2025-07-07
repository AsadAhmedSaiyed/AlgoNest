function Hero() {
  return (
    <div className="text-black rounded-2xl p-6 md:p-10 mx-4 md:mx-16 my-12 bg-[#e2e8f0] flex flex-col lg:flex-row flex-wrap justify-between gap-8">

      <div className="flex-1 space-y-4">
        <h1 className="text-3xl font-medium">Support Portal</h1>
        <h2 className="text-2xl">
          Search for an answer or browse help topics to create a ticket
        </h2>
        <input
          type="text"
          placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          className="bg-slate-300 w-full p-4 rounded-2xl"
        />
        <div className="space-y-3 pt-4">
          <a href="#" className="underline text-2xl block">
            Track account opening
          </a>
          <a href="#" className="underline text-2xl block">
            Track segment activation
          </a>
          <a href="#" className="underline text-2xl block">
            Intraday margins
          </a>
          <a href="#" className="underline text-2xl block">
            Kite user manual
          </a>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <a href="#" className="block underline text-2xl text-right">
          Track Tickets
        </a>

        <div>
          <h1 className="text-3xl font-medium text-left mt-12 lg:mt-32">Featured</h1>
          <ol className="list-disc mt-4 ml-6 text-xl space-y-2">
            <li>Surveillance measure on scrips - June 2025</li>
            <li>Rights Entitlements listing in June 2025</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
