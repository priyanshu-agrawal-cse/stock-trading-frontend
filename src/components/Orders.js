import React from "react";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders , setAllOrders] = useState([]);

useEffect(()=>{
  axios.get("https://stock-trading-backend-1.onrender.com/allOrders").then((res)=>{
    // console.log(res);
    setAllOrders(res.data);
  })
})
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
    <table>
      <tr>
        <th>Instrument</th>
        <th>Qty.</th>
        
        
        <th>Cur. val</th>
        <th>order</th>

      </tr>
      {allOrders.map((stock , index)=>{
        let currValue = stock.price * stock.qty;
        let isProfit = currValue- stock.avg * stock.qty >=0;

        return (
          <tr key={index} >
          <td>{stock.name}</td>
          <td>{stock.qty}</td>
 
          <td>{stock.price.toFixed(2)}</td>
          <td>{stock.mode}</td>



        </tr>
        )
      })}


    </table>
  </div></>

  );
};

export default Orders;
