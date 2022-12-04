import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
