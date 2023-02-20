import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Support from "./components/Support";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Support />
      <Footer />
    </div>
  );
}
