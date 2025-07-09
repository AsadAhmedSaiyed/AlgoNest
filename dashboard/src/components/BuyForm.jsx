import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress,
  Button,
} from "@mui/material";
import { useState, useTransition } from "react";
import axios from "axios";

function BuyForm({
  stock,
  onClose,
  id,
  setAllOrders,
  setAllHoldings,
  open,
  setUser,
  setSummary,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(Number(stock.price));
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const handleBuy = async () => {
    const order = {
      userId: id,
      name: stock.name,
      qty: Number(quantity),
      price: Number(price),
      mode: "BUY",
    };
    setIsLoading(true);
    try {
      console.time("Buy");
      await axios.post(`https://algonest.onrender.com/user/${id}/newOrder`, order);
      onClose();
      console.timeEnd("Buy");
      startTransition(async () => {
        try {
          const [ordersRes, holdingsRes, res] = await Promise.all([
            axios.get(`https://algonest.onrender.com/user/${id}/allOrders`),
            axios.get(`https://algonest.onrender.com/dashboard/${id}/allHoldings`),
            axios.get(`https://algonest.onrender.com/user/${id}/summary`),
          ]);
          setAllOrders(ordersRes.data);
          setAllHoldings(holdingsRes.data);
          setUser(res.data.user);
          setSummary(res.data.summary);
        } catch (e) {
          console.error("Failed to refresh dashboard:", e);
        }
      });
    } catch (err) {
      console.error("Error placing order:", err);
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message || "Bad Request");
      } else {
        setError("Something went wrong");
      }
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Buy {stock.name}</DialogTitle>
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
      </DialogContent>

      {error && <div style={{ color: "red", margin: "10px 20px" }}>{error}</div>}

      <DialogActions sx={{ px: 3, pb: 2 }}>

        <Button
          onClick={onClose}
          variant="outlined"
          sx={{ color: "#555", borderColor: "#ccc", "&:hover": { borderColor: "#999" } }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleBuy}
          disabled={quantity <= 0 || price <= 0 || isLoading}
          sx={{
            backgroundColor: "#10b981", 
            "&:hover": {
              backgroundColor: "#059669", 
            },
          }}
        >
          {isLoading ? <CircularProgress size={20} color="inherit" /> : "Buy"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default BuyForm;
