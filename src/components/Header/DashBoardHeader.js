import {  Dropdown } from "antd";
import { IoNotificationsOutline } from "react-icons/io5";

export default function DashBoardHeader({name,menu}) {
  return (
    <header className="mb-5 flex justify-between w-[80vw]">
      

      <div className="flex">
        <div className="flex justify-center items-center bg-white rounded-2xl mx-5 w-[50px] h-[50px] cursor-pointer">
          <IoNotificationsOutline className="icon-medium" />
        </div>
        <Dropdown overlay={menu} placement="bottomLeft">
          <img
            src="https://wallpaperaccess.com/full/2581085.jpg"
            alt="profile"
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
          />
        </Dropdown>
      </div>
    </header>
  );
}
