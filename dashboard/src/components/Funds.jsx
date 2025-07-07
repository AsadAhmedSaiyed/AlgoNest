import { useState } from "react";
import axios from "axios";

const Funds = ({ id }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("add");

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`https://algonest.onrender.com/user/${id}/funds`, {
        type,
        amount: parseFloat(amount),
      });

      alert("Success! New Balance: $" + res.data.finalBalance);
      setAmount(0);
    } catch (err) {
      console.log("Error!", err);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-4 pt-20">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Funds</h2>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <select
          onChange={(e) => setType(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          <option value="add">Add</option>
          <option value="withdraw">Withdraw</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Funds;
