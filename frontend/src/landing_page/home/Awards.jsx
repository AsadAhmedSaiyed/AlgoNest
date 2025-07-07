function Awards() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-16 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="bg-white p-2 rounded-2xl mb-6 lg:mb-0">
          <img src="images/largestBroker.svg" alt="" className="w-full max-w-xs mx-auto" />
        </div>
        <div className="lg:ml-16 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Largest stock broker in India
          </h1>
          <p className="text-base mb-2">
            2+ million AlgoNest clients contribute to over 15% of all retail order volumes in India
            daily by trading and investing in:
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start my-4">
            <ul className="list-disc ml-6 mr-8 text-sm">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="list-disc ml-6 text-sm">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          <img src="images/pressLogos.png" alt="logos" className="w-full max-w-md rounded bg-white mx-auto lg:mx-0" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
