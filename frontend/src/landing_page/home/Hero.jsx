import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="mt-24 px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden">
      <div className="text-center mb-24">
        <img
          src="images/homeHero.png"
          alt="hero"
          className="rounded-2xl w-full max-w-4xl mx-auto"
        />
        <h1 className="mt-8 mb-4 font-medium text-3xl md:text-4xl">
          Invest in everything
        </h1>
        <p className="mb-6 text-base md:text-lg">
          Online platform to invest in stocks, derivatives, mutual funds and more
        </p>
         <Link to="/signup">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-xl">
            Signup now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;