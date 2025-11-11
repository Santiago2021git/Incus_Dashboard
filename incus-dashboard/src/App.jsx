import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./dashboard.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-8">
        <Home />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
