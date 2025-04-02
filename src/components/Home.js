import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";
import "../index1.css";

const Home = () => {

  return  (
    <>
      <TopBar />
      <Dashboard  />
    </>
  ) 
};

export default Home;