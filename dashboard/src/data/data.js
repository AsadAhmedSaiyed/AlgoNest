import axios from "axios";

export async function getLiveStocks(id) {
  try{
     const res = await axios.get(`https://algonest.onrender.com/dashboard/${id}/watchlist`);
    return res.data;
  }catch (err) {
    console.error(" Error fetching watchlist:", err.message);
    return [];
  }

}