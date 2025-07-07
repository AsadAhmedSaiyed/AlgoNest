import { useEffect } from "react";
import axios from "axios";

const Summary = ({ id, user, setUser, summary, setSummary }) => {
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(`https://algonest.onrender.com/user/${id}/summary`);
        setUser(res.data.user);
        setSummary(res.data.summary);
      } catch (err) {
        console.log("Failed!", err);
      }
    };
    fetchSummary();
  }, [id]);

  return (
    <div className="bg-white mb-38 text-gray-800 py-10 mt-8 px-6 sm:px-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Hi, {user.username || "User"}!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
        <p>
          <span className="font-medium">Opening Balance:</span> $
          {summary.openingBalance ? summary.openingBalance.toFixed(2) : "0.00"}
        </p>
        <p>
          <span className="font-medium">Available Balance:</span> $
          {summary.finalBalance ? summary.finalBalance.toFixed(2) : "0.00"}
        </p>
        <p>
          <span className="font-medium">Used Margin:</span> $
          {summary.usedMargin ? summary.usedMargin.toFixed(2) : "0.00"}
        </p>
        <p>
          <span className="font-medium">Investment:</span> $
          {summary.investment ? summary.investment.toFixed(2) : "0.00"}
        </p>
        <p>
          <span className="font-medium">Current Value:</span> $
          {summary.currentValue ? summary.currentValue.toFixed(2) : "0.00"}
        </p>
        <p>
          <span className="font-medium">P&amp;L:</span> $
          {summary.pl ? summary.pl.toFixed(2) : "0.00"} (
          {summary.plPercent ? Number(summary.plPercent).toFixed(2) : "0.00"}%)
        </p>
      </div>
    </div>
  );
};

export default Summary;
