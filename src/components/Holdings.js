import React from "react";
// import { holdings } from "../data/data";
import { useState , useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
const [allHoldings , setAllHoldings] = useState([]);

useEffect(()=>{
  axios.get("https://stock-trading-backend-1.onrender.com/allHoldings").then((res)=>{
    console.log(res.data);
    setAllHoldings(res.data);
  })
},[]);

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = allHoldings.length > 0 ? allHoldings.map((subArray) => subArray.name) : [];
const data = allHoldings.length > 0
  ? {
      labels,
      datasets: [
        {
          label: 'stock price',
          data: allHoldings.map((stock) => stock.price),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }
  : { labels: [], datasets: [] };

// export const data = {
  // labels,
  // datasets: [
  //   {
  //     label: 'Dataset 1',
  //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //   },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock , index)=>{
            let currValue = stock.price * stock.qty;
            let isProfit = currValue- stock.avg * stock.qty >=0;
            let profClass = isProfit ? "profit":"loss";
            let dayClass = stock.isLoss ? "loss":"profit";
            return (
              <tr key={index} >
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{currValue.toFixed(2)}</td>
              <td className={profClass}>{(currValue- stock.avg * stock.qty).toFixed(2)}</td>
              <td className={profClass}>{stock.net}</td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
            )
          })}


        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
