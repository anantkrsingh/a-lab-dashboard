import { useContext, useEffect, useState } from "react";
import { BottomNav } from "./components/SidebarStudent/bottomNav/BottomNav";
import SidebarAdmin from "./components/SideBarAdmin/SidebarAdmin";
import AdminDash from "./auth/adminDash";
import UserDash from "./auth/userDash";
import Sidebar from "./components/SidebarStudent/Sidebar";


let authenticated;
let adminCheck;
function App() {
  useEffect(() => {
    authenticated = localStorage.getItem("userAuthenticated");
    adminCheck = localStorage.getItem("isAdmin");
  });
    return (
        <div className="flex h-[100vh]">
          <div className="w-max">
            {adminCheck && adminCheck === "true" ? (
              <SidebarAdmin />
            ) : (
              <Sidebar />
            )}
          </div>
          <BottomNav />
          <div className=" bg-custom-light p-4 overflow-y-scroll sm:w-full">
            {adminCheck && adminCheck === "true" ? (
              <AdminDash/>
            ) : (
             <UserDash/>
            )}
          </div>
        </div>
      
    );
}

export default App;
