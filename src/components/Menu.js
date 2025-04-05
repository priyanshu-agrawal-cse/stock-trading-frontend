// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const Menu = () => {
//   let [SelectedMenu, setSelectedMenu] = useState(0);
//   let [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
//   const handelMenuClick = (index)=>{
//     setSelectedMenu(index);
//     if(index===6){
//       document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//       alert("You have been logged out!");

//       const navigate = useNavigate();
//       navigate("/login");
//     }
//   }
//   const handleProfileClick=(index)=>{
//     setIsProfileDropDownOpen(!isProfileDropDownOpen);
//   }
//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "3.1rem" }} alt="pic" />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link style={{textDecoration:"none"}} to="" onClick={()=>handelMenuClick(0)}>
//             <p className={SelectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
//             </Link>
//           </li>
//           <li>
//           <Link style={{textDecoration:"none"}} to="orders" onClick={()=>handelMenuClick(1)}>
//             <p className={SelectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
//             </Link>
//           </li>
//           <li>
//           <Link style={{textDecoration:"none"}} to="holdings" onClick={()=>handelMenuClick(2)}>
//             <p className={SelectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
//             </Link>
//           </li>
//           <li>
//           <Link style={{textDecoration:"none"}} to="positions" onClick={()=>handelMenuClick(3)}>
//             <p className={SelectedMenu===3 ? activeMenuClass:menuClass}>Positins</p>
//             </Link>
//           </li>
//           <li>
//           <Link style={{textDecoration:"none"}} to="funds" onClick={()=>handelMenuClick(4)}>
//             <p className={SelectedMenu===4 ? activeMenuClass:menuClass}>Funds</p>
//             </Link>
//           </li>
//           <li>
//           {/* <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handelMenuClick(5)}>
//             <p className={SelectedMenu===5 ? activeMenuClass:menuClass}>Apps</p>
//             </Link> */}
//           <Link style={{textDecoration:"none"}}  onClick={()=>handelMenuClick(6)}>
//             <p className={SelectedMenu===5 ? activeMenuClass:menuClass}>LogOut</p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [SelectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const navigate = useNavigate(); // Define useNavigate at the component level

  const handelMenuClick = (index) => {
    setSelectedMenu(index);

    // Handle logout if "Logout" is clicked (index 6)
    if (index === 6) {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      alert("You have been logged out!");
      navigate("/login"); // Redirect to login page
    }
  };

  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "3.1rem" }} alt="pic" />
      <div className="menus">
        <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>

          <div class="">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/" onClick={() => handelMenuClick(0)}>
                    <p className={SelectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/dash/orders" onClick={() => handelMenuClick(1)}>
                    <p className={SelectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/dash/holdings" onClick={() => handelMenuClick(2)}>
                    <p className={SelectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/dash/positions" onClick={() => handelMenuClick(3)}>
                    <p className={SelectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/dash/funds" onClick={() => handelMenuClick(4)}>
                    <p className={SelectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                  </Link>
                </li>
                <li>
                  <p
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    className={SelectedMenu === 6 ? activeMenuClass : menuClass}
                    onClick={() => handelMenuClick(6)}
                  >
                    LogOut
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;