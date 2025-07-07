import Menu from "./Menu";

const TopBar = ({ id }) => {
  return (
    <div className="w-full bg-slate-100 text-black px-4 py-2 flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-6 items-center mb-2 md:mb-0">
        <div className="flex items-center gap-1 text-sm">
          <p className="font-semibold text-blue-700">NIFTY 50</p>
          <span className="font-semibold text-green-700">$100.20</span>
          <span className="text-green-700 text-xs">+0.85%</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <p className="font-semibold text-blue-700">SENSEX</p>
          <span className="font-semibold text-green-700">$100.20</span>
          <span className="text-green-700 text-xs">+0.75%</span>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <Menu id={id} />
      </div>
    </div>
  );
};

export default TopBar;
