import axios from "axios";

export async function getLiveStocks(id) {
  try{
     const res = await axios.get(`http://localhost:3002/dashboard/${id}/watchlist`);
    return res.data;
  }catch (err) {
    console.error(" Error fetching watchlist:", err.message);
    return [];
  }

}