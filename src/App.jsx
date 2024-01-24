import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Coins from "./components/Coins.jsx";
import Exchanges from "./components/Exchanges.jsx";
import CoinDetails from "./components/CoinDetails.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/coins" elements={<Coins />} />
        <Route path="/exchnages" elements={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

// 4:48
