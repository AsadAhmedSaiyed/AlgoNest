import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/dashboard/:id/*" element={<Home />} />
         <Route
          path="*"
          element={
            <div className="text-center text-white text-lg mt-10">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
