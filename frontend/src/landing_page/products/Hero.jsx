function Hero() {
  return (
    <div className="text-center px-4 py-12 md:py-20 mb-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Technology
      </h1>
      <h2 className="text-2xl md:text-3xl mb-3 text-white">
        Sleek, modern and intuitive platforms
      </h2>
      <p className="text-white text-base md:text-lg">
        Check out our{" "}
        <a
          href="#"
          className="text-white hover:underline font-medium inline-flex items-center gap-1"
        >
          investment offerings <i className="fa-solid fa-arrow-right"></i>
        </a>
      </p>
    </div>
  );
}

export default Hero;
