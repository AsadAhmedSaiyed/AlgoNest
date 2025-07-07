import { Tooltip, Grow } from "@mui/material";
import { useEffect, useState } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";
import { getLiveStocks } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const WatchList = ({
  id,
  setAllOrders,
  allOrders,
  setAllHoldings,
  user,
  setUser,
  summary,
  setSummary,
}) => {
  const [watchlist, setWatchList] = useState([]);
  const [formMode, setFormMode] = useState("");

  useEffect(() => {
    const fetchStock = async () => {
      const data = await getLiveStocks(id);
      setWatchList(data);
    };
    fetchStock();
    const interval = setInterval(fetchStock, 30000);
    return () => clearInterval(interval);
  }, [id]);

  const labels = watchlist.map((stock) => stock?.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock?.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [showForm, setShowForm] = useState(false);
  const [selectStock, setSelectStock] = useState();

  const handleSelectStock = (stock, mode) => {
    setShowForm(true);
    setFormMode(mode);
    setSelectStock(stock);
  };

  return (
    <div className="flex w-full mb-140 flex-col lg:flex-row gap-6 h-[100vh] pl-16">
      <div className="rounded-2xl p-4 w-full lg:w-[300px] shadow-md bg-transparent flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Watchlist</h2>
          <span className="text-sm text-gray-500">{watchlist.length} / 50</span>
        </div>

        <ul className="space-y-3 mb-6">
          {watchlist.map((stock, index) => (
            <WatchListItem
              stock={stock}
              handleSelectStock={handleSelectStock}
              key={index}
            />
          ))}
        </ul>

        <div className="mt-6 mb-8 aspect-square max-w-[250px] mx-auto bg-white p-4 rounded-2xl">
          <DoughnutChart data={data} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      {showForm && formMode === "Buy" && (
        <BuyForm
          open={showForm}
          user={user}
          setUser={setUser}
          summary={summary}
          setSummary={setSummary}
          setAllHoldings={setAllHoldings}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          id={id}
          stock={selectStock}
          onClose={() => setShowForm(false)}
        />
      )}

      {showForm && formMode === "Sell" && (
        <SellForm
          open={showForm}
          user={user}
          setUser={setUser}
          summary={summary}
          setSummary={setSummary}
          setAllHoldings={setAllHoldings}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          id={id}
          stock={selectStock}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, handleSelectStock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  return (
    <li
      className="bg-white p-3 rounded-xl shadow hover:shadow-sm transition relative"
      onMouseEnter={() => setShowWatchListActions(true)}
      onMouseLeave={() => setShowWatchListActions(false)}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <p
          className={
            stock.isDown
              ? "text-red-500 font-semibold"
              : "text-green-600 font-semibold"
          }
        >
          {stock.name}
        </p>

        {showWatchListActions && (
          <div className="flex space-x-2">
            <Tooltip
              title="Buy"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => handleSelectStock(stock, "Buy")}
              >
                B
              </button>
            </Tooltip>
            <Tooltip
              title="Sell"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleSelectStock(stock, "Sell")}
              >
                S
              </button>
            </Tooltip>
          </div>
        )}

        <div className="flex items-center space-x-1">
          <span className="text-sm text-gray-700">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500" />
          ) : (
            <KeyboardArrowUp className="text-green-600" />
          )}
        </div>
      </div>

      <p className="text-gray-800 font-bold text-lg">${stock.price}</p>
    </li>
  );
};
