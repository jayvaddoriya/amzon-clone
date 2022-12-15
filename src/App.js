import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import Login from "./components/Login/Login";
import { AuthContext } from "./context/StateProvider";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      {currentUser && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
