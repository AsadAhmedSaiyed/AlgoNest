function Pricing() {
  return (
    <div className="my-16 px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl mb-4 font-semibold">
            Unbeatable pricing
          </h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            See Pricing <i className="fa-solid fa-arrow-right ml-1" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="text-center p-6 border rounded-2xl shadow-sm w-64">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fa-solid fa-indian-rupee-sign"></i> 0
            </h1>
            <p>Free equity delivery and direct mutual funds</p>
          </div>
          <div className="text-center p-6 border rounded-2xl shadow-sm w-64">
            <h1 className="text-4xl font-bold mb-4">
              <i className="fa-solid fa-indian-rupee-sign"></i> 20
            </h1>
            <p>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
