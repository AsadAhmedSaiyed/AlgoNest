function Education() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center my-16 px-4 sm:px-12 lg:px-32 gap-12">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-md">
        <img src="images/education.svg" alt="Education" className="p-4 w-full h-auto" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8">
          Free and open market education
        </h1>

        <div className="mb-8">
          <p className="mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Varsity <i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>

        <div>
          <p className="mb-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market-related queries.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            TradingQ&A <i className="fa-solid fa-arrow-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
