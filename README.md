# 📈 AlgoNest – Full Stack Online Stock Trading Simulator

**AlgoNest** is a full-stack stock trading simulation platform that allows users to simulate the buying and selling of real-time stocks using virtual funds. It replicates the experience of a real trading environment with live stock prices, user portfolio tracking, and fund management, all packed into a clean and interactive dashboard.

---

## 🌐 Live Application

- **Frontend:** [https://algo-nest.vercel.app/](https://algo-nest.vercel.app/)
- **Backend:** Hosted on Render
- **Database:** MongoDB Atlas (Cloud Hosted)

---

## 💡 Performance Highlight

> While building a stock trading simulator, I reduced external API fetch time from an average of **~3.5s to ~0.87s** by optimizing parallel requests and introducing in-memory caching.  
> 🚀 This significantly improved load time and overall user experience.

---

## 🛠 Tech Stack

### 🔹 Frontend (React + Vite)
- React (Hooks & Components)
- React Router for page navigation
- Axios for API requests
- Tailwind CSS for responsive design
- Chart.js for stock graphs

### 🔹 Backend (Node.js + Express)
- REST API with Express
- JWT-based authentication
- Secure cookie session handling
- Route controllers for modularity
- Finnhub API integration

### 🔹 Database (MongoDB )
- User accounts, transactions, and holdings
- Balance tracking with initial and final values

### 🔹 Hosting
- **Vercel** for frontend
- **Render** for backend
- **MongoDB Atlas** for cloud database

---

## ✨ Features

### 👤 Authentication
- Secure user registration and login
- JWT-based token authentication
- Cookie storage for session management

### 💹 Stock Trading Simulation
- Real-time stock prices using Finnhub API
- Buy/Sell functionality with input validation
- Portfolio updates after each transaction

### 💼 Portfolio & Funds
- View current holdings with quantities
- Track initial and final balances
- Add or withdraw virtual funds

### 📈 Dashboard
- Visualize stocks with live charts
- View trades and total invested amount
- Fully responsive and user-friendly UI

---

