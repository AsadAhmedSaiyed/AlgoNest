function Stats() {
  return (
    <div className="mt-32 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-center gap-12 items-start">
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-8">
            Trust with confidence
          </h1>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium mb-1">
              Customer-first always
            </h2>
            <p className="text-slate-600">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium mb-1">
              No spam or gimmicks
            </h2>
            <p className="text-slate-600">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium mb-1">
              The AlgoNest Universe
            </h2>
            <p className="text-slate-600">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-medium mb-1">
              Do better with money
            </h2>
            <p className="text-slate-600">
              With initiatives like Nudge and Kill Switch, we don’t just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="images/ecosystem.png"
            alt="Ecosystem"
            className="rounded-2xl w-full h-auto mb-6"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right ml-1" />
            </a>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Try Kite demo <i className="fa-solid fa-arrow-right ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
