import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
const Positions = () => {
  const [allPositions , setAllPositions ] = useState([]);
  
  useEffect(()=>{
    axios.get("https://stock-trading-backend-1.onrender.com/allPositions").then((res)=>{
      // console.log(res);
      setAllPositions (res.data);
    })
  })
  
  return (
    <>
      <h3 className="title">Positions {allPositions.length}</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

                    {allPositions.map((stock , index)=>{
                      let currValue = stock.price * stock.qty;
                      let isProfit = currValue- stock.avg * stock.qty >=0;
                      let profClass = isProfit ? "profit":"loss";
                      let dayClass = stock.isLoss ? "loss":"profit";
                      return (
                        <tr key={index} >
                        <td>{stock.product}</td>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{stock.price.toFixed(2)}</td>
                       
                        <td className={profClass}>{(currValue- stock.avg * stock.qty).toFixed(2)}</td>
                        
                        <td className={dayClass}>{stock.day}</td>
                      </tr>
                      )
                    })}
        </table>
      </div>
    </>
  );
};

export default Positions;
