import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useState, useEffect } from "react";
import "../index.css";

const Holdings = ({ id, allHoldings, setAllHoldings, summary }) => {
  useEffect(() => {
    axios
      .get(`https://algonest.onrender.com/dashboard/${id}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data);
      });
  }, [id]);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="min-h-screen mb-28  px-4 py-10 text-white">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Holdings ({allHoldings.length})
      </h3>

      <div className="overflow-x-auto mb-8 bg-white text-black rounded-lg shadow-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-center">
          <thead className="bg-slate-200">
            <tr>
              <th className="px-4 py-2">Instrument</th>
              <th className="px-4 py-2">Qty.</th>
              <th className="px-4 py-2">Avg. cost</th>
              <th className="px-4 py-2">LTP</th>
              <th className="px-4 py-2">Cur. val</th>
              <th className="px-4 py-2">P&L</th>
              <th className="px-4 py-2">Net chg.</th>
              <th className="px-4 py-2">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-600" : "text-red-600";
              const dayClass = stock.isLoss ? "text-red-600" : "text-green-600";

              return (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2">{stock.qty}</td>
                  <td className="px-4 py-2">{stock.avg.toFixed(2)}</td>
                  <td className="px-4 py-2">{stock.price.toFixed(2)}</td>
                  <td className="px-4 py-2">{curValue.toFixed(2)}</td>
                  <td className={`px-4 py-2 ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 ${profClass}`}>{stock.net}</td>
                  <td className={`px-4 py-2 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
        <div className="bg-white text-black p-4 rounded-lg shadow">
          <h5 className="text-xl font-semibold">
            $ {summary.investment ? summary.investment.toFixed(2) : "0.00"}
          </h5>
          <p className="text-sm">Investment</p>
        </div>
        <div className="bg-white text-black p-4 rounded-lg shadow">
          <h5 className="text-xl font-semibold">
            $ {summary.currentValue ? summary.currentValue.toFixed(2) : "0.00"}
          </h5>
          <p className="text-sm">Current value</p>
        </div>
        <div className="bg-white text-black p-4 rounded-lg shadow">
          <h5 className="text-xl font-semibold">
            {" "}
            ${summary.pl ? summary.pl.toFixed(2) : "0.00"} (
            {summary.plPercent ? Number(summary.plPercent).toFixed(2) : "0.00"}
            %)
          </h5>
          <p className="text-sm">P&L</p>
        </div>
      </div>

      {allHoldings.length > 0 && (
        <div className="bg-white rounded-lg p-4">
          <VerticalGraph data={data} />
        </div>
      )}
    </div>
  );
};

export default Holdings;
