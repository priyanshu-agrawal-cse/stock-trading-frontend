import React, { useContext } from "react";
import { useState } from "react";
import {Tooltip , Grow} from "@mui/material";
// import { watchlist } from "../data/data";
import {BarChartOutlined, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import {  useEffect } from "react";
import axios from "axios";
import { DonutChart } from "./DonutChart";

const WatchList = () => {
  const [allwatchlist , setAllwatchlist] = useState([]);
  
  useEffect(()=>{
    axios.get("https://stock-trading-backend-1.onrender.com/allwatchlist").then((res)=>{
      // console.log(res);
      setAllwatchlist(res.data);
    })
  },[]);

  const labels = allwatchlist.length > 0 ? allwatchlist.map((subArray) => subArray.name) : [];

const data ={
  labels,
  datasets: [
        {
          label: 'price',
          data: allwatchlist.map((stock)=>stock.price),
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],

}

  // export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   datasets: [
//     {
    //   label: '# of Votes',
    //   data: [12, 19, 3, 5, 2, 3],
    //   backgroundColor: [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)',
    //   ],
    //   borderColor: [
    //     'rgba(255, 99, 132, 1)',
    //     'rgba(54, 162, 235, 1)',
    //     'rgba(255, 206, 86, 1)',
    //     'rgba(75, 192, 192, 1)',
    //     'rgba(153, 102, 255, 1)',
    //     'rgba(255, 159, 64, 1)',
    //   ],
    //   borderWidth: 1,
    // },
//   ],
// };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {allwatchlist.length} / 50</span>
      </div>

      <ul className="list">
        {allwatchlist.map((stock , index)=>{
          return (
      <WatchListItem stock={stock} key={index} />
          )
        })}
      </ul>
      <DonutChart data ={data} />
    </div>
  );
};

export default WatchList;


const WatchListItem =({stock})=>{
  const [showWatchListAction , setshowWatchListAction ] = useState(false);

  const handelMouseEnter =(e)=>{
  setshowWatchListAction(true);
}
  const handelMouseExit =(e)=>{
  setshowWatchListAction(false);
  }
  return (
    <li onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseExit}>
      <div className="item">
        <p className={stock.isDowm ? "down":"up" }>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>


        </div>

      </div>
      {showWatchListAction && <WatchListActins uid={stock.name} />}

    </li>
  )
}

const WatchListActins =({uid})=>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
return (
  <span className="actions">
    <span>
      <Tooltip title="buy" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
        <button className="buy">Buy</button>
      </Tooltip>
      <Tooltip title="sell" placement="top" arrow TransitionComponent={Grow} >
        <button className="sell">sell</button>
      </Tooltip>
      <Tooltip title="analytics" placement="top" arrow TransitionComponent={Grow} >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>
      <Tooltip title="more" placement="top" arrow TransitionComponent={Grow} >
      <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  </span>
)
}
