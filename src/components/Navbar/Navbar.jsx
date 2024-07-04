import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { CoinContext } from "../../context/CoinContext";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const location = useLocation();

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <Link>
        <img src={logo} alt="cryptoplace" className="logo" />
      </Link>

      {location.pathname !== "/" && (
        <Link to={`/`}>
          <button>Back to table</button>
        </Link>
      )}

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        {/* <button>Sign up</button> */}
      </div>
    </div>
  );
};

export default Navbar;
