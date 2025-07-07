function RightImage({ title, desc, imageURL }) {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-evenly px-4 py-12 gap-8 mt-12 ">
      
      <div className="w-full md:w-1/2">
        <img
          src={imageURL}
          alt={title}
          className="w-full h-auto max-h-[400px] object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold mb-3 text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-4 text-white">{desc}</p>
        <div className="space-x-6 text-white font-medium">
          <a href="#" className="hover:underline inline-flex items-center gap-1">
            Try demo <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href="#" className="hover:underline inline-flex items-center gap-1">
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default RightImage;
