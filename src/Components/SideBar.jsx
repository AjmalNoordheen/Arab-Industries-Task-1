import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import ExtensionIcon from "@mui/icons-material/Extension";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";

function SideBar({ setShow, show }) {
  return (
    <div
      className={`${
        show
          ? "fixed top-0 left-0 h-full md:h-full  w-full sm:w-[40%]"
          : "hidden md:static"
      } min-h-[100vh] md:flex lg:w-[14.3%] shadow-2xl  flex-col  items-center bg-white`}
    >
      <div className="md:hidden">
        <IconButton onClick={() => setShow(false)}>
          <CancelIcon />
        </IconButton>
      </div>
      <div className="h-[26%] border border-slate-100 w-[99%] flex flex-col justify-center items-center bg-white shadow-md">
        <img src="/profile.jpeg" className="rounded-full w-16 h-16" alt="" />
        <small className="font-bold text-sm mt-1">
          Ram Mohan
          <KeyboardArrowRightIcon fontSize="small" />{" "}
        </small>
        <small className="text-xs font-semibold">rammohan@gmail.com</small>
      </div>
      <div className="h-[73%]  w-[99%] pt-2 flex flex-col z-10 shadow-xl shadow-slate-400 ml-1 justify-center ">
        <div className="w-full h-[85%] space-y-4 ">
          <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
            <DashboardIcon className="text-blue-700 ml-1" />
            <p>Dashboard</p>
          </div>
          <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
            <GrassIcon className="text-blue-700 ml-1" />
            <p>Perks</p>
          </div>
          <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
            <ExtensionIcon className="text-blue-700 ml-1" />
            <p>Addons</p>
          </div>
          <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
            <ContactSupportIcon className="text-blue-700 ml-1" />
            <p>FAQ</p>
          </div>
          <div className="w-[93%] rounded border border-blue-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3">
            <ConnectWithoutContactIcon className="text-blue-700 ml-1" />
            <p>Support</p>
          </div>
        </div>
        <div className=" h-10 mb-4 flex font-bold  justify-center items-start text-blue-700 bg-white">
          Logout
          <PowerSettingsNewIcon />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
