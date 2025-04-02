import React, { useState ,useContext,useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [allwatchlist , setAllwatchlist] = useState([]);
  useEffect(()=>{
    axios.get("https://stock-trading-backend-1.onrender.com/allwatchlist").then((res)=>{
      // console.log(res);
      // console.log(res.data);
      setAllwatchlist(res.data);
      
    })
  })
// let wa = allwatchlist.filter(obj=> obj.name===uid)[0]
// const wap =wa.price;  not workingn
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const { closeBuyWindow } = useContext(GeneralContext);
    

  const handleBuyClick = () => {
    axios.post("https://stock-trading-backend-1.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  const handleCancelClick = () => {
  

    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required {stockPrice * stockQuantity }</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;