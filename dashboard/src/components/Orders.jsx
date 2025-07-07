import axios from "axios";
import { useEffect } from "react";

const Orders = ({ id, allOrders, setAllOrders }) => {
  useEffect(() => {
    axios
      .get(`https://algonest.onrender.com/${id}/allOrders`)
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.error("Order fetch error:", err));
  }, [id]);

  return (
    <div className="min-h-screen mb-28 px-4 py-8 text-white">
      <h3 className="text-3xl font-semibold text-center mb-8">
        Orders ({allOrders.length})
      </h3>

      <div className="overflow-x-auto rounded-xl shadow-lg bg-white text-gray-800">
        <table className="min-w-full table-auto text-sm md:text-base text-left">
          <thead className="bg-slate-700 text-white">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Qty.</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center px-4 py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              allOrders.map((order, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } hover:bg-slate-300 transition`}
                >
                  <td className="px-4 py-3">{order.name}</td>
                  <td className="px-4 py-3">{order.qty}</td>
                  <td className="px-4 py-3">{order.price}</td>
                  <td className="px-4 py-3 capitalize">{order.mode}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
