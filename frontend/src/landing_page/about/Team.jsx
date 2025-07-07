function Team() {
  return (
    <div className="pt-24 pb-8 px-4 sm:px-8 md:px-16">
      <div className="text-3xl sm:text-4xl font-medium text-center mb-16">
        <h1 className="mb-8">People</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-16">
        {/* Image Section */}
        <div className="text-center">
          <img
            src="images/asad.jpg"
            className="h-64 w-64 sm:h-80 sm:w-80 object-cover rounded-full mx-auto"
            alt="Asad Ahmed Saiyed"
          />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold">Founder, CEO</h2>
        </div>

        {/* Description Section */}
        <div className="lg:w-1/2 text-sm sm:text-base">
          <p>
            Asad Ahmed Saiyed is a passionate and driven individual with a
            strong foundation in full-stack web development and a sharp interest
            in technology and finance. Known for building efficient, modern web
            applications without relying on frameworks like React, Asad combines
            practicality with performance in his work.
          </p>
          <br />
          <p>
            He is the founder of Algonest, a new online stock trading platform
            designed to simplify investing for everyone. With Algonest, Asad
            aims to create a seamless, user-friendly experience that empowers
            users to invest in stocks, commodities, and more — all in one place.
          </p>
          <br />
          <p>
            His vision blends clean UI design, strong backend logic, and an
            understanding of real-world trading needs to bring innovative
            solutions to the fintech space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
