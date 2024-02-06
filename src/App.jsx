import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Coins from "./components/Coins.jsx";
import Exchanges from "./components/Exchanges.jsx";
import CoinDetails from "./components/CoinDetails.jsx";
import Watchlist from "./components/Watchlist.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchnages" element={<Exchanges />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
