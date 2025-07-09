import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress,
  Button,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

function SellForm({
  stock,
  onClose,
  id,
  setAllOrders,
  setAllHoldings,
  open,
  setUser,
  setSummary,
}) {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(Number(stock.price));
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSell = async () => {
    const order = {
      userId: id,
      name: stock.name,
      qty: Number(quantity),
      price: Number(price),
      mode: "SELL",
    };

    console.time("sell");
    setIsLoading(true);
    try {
      await axios.post(`https://algonest.onrender.com/${id}/newOrder`, order);

      const [ordersRes, holdingsRes, res] = await Promise.all([
        axios.get(`https://algonest.onrender.com/user/${id}/allOrders`),
        axios.get(`https://algonest.onrender.com/dashboard/${id}/allHoldings`),
        axios.get(`https://algonest.onrender.com/user/${id}/summary`),
      ]);

      setAllOrders(ordersRes.data);
      setAllHoldings(holdingsRes.data);
      setUser(res.data.user);
      setSummary(res.data.summary);

      onClose();
    } catch (err) {
      console.error("Error placing order:", err);
      setIsError(true);
      setError(err.response?.data?.message || "Server error");
    }
    setIsLoading(false);
    console.timeEnd("sell");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sell {stock.name}</DialogTitle>
      <DialogContent>
        <TextField
          label="Enter Quantity"
          type="number"
          fullWidth
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          margin="dense"
        />
        <TextField
          label="Enter Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          margin="dense"
        />
        {isError && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#555",
            borderColor: "#ccc",
            "&:hover": { borderColor: "#999" },
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSell}
          disabled={quantity <= 0 || price <= 0 || isLoading}
          sx={{
            backgroundColor: "#ef4444",
            "&:hover": {
              backgroundColor: "#dc2626",
            },
          }}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : "Sell"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SellForm;
