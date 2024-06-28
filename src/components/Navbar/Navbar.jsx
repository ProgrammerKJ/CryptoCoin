import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/NewCrypt.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

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
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>
          <a
            href="https://www.robinhood.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robinhood
          </a>
        </li>
        <li>
          <a
            href="https://www.tdameritrade.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TD Ameritrade
          </a>
        </li>
        <li>
          <a
            href="https://www.webull.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webull
          </a>
        </li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <a
          href="https://www.coinbase.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
            Coinbase <img src={arrow_icon} alt="" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
