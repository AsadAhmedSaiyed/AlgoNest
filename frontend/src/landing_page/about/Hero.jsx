function Hero() {
  return (
    <div className="pt-20 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="text-center mb-16">
        <h1 className="text-xl sm:text-2xl font-medium mb-8">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
        <hr className="border-gray-300" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center text-sm sm:text-base gap-8 lg:gap-16 mb-16">
        <div className="lg:w-1/2">
          <p>
            We kick-started operations on the 17th of June, 2025 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology.
          </p>
          <br />
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <br />
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="lg:w-1/2">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <br />
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets. And yet, we are always up to something new every day.
          </p>
          <br />
          <p>
            Catch up on the latest updates on our blog or see what the media is
            saying about us or learn more about our business and product
            philosophies.
          </p>
        </div>
      </div>

      <hr className="border-gray-300" />
    </div>
  );
}

export default Hero;
