import { useState } from "react";
import "./App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import TopCard from "./Components/TopCard";
import BottomCard from "./Components/BottomCard";
import SideBar from "./Components/SideBar";

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-screen h-full bg-[#e3f1fe]">
        {/* TOP NAVBAR START */}
        <div className="w-full h-[13.2vh]  flex justify-between bg-[#e3f1fe]">
          <div className="logo w-[48%] sm:w-[38%]   lg:w-[22%] xl:w-[18%] h-full  flex  items-center">
            <div className="block md:hidden ml-3">
              <IconButton onClick={() => setShow(true)}>
                <MenuIcon />
              </IconButton>
            </div>
            <img
              src="/imgLogo.png"
              className="w-14 h-14 sm:w-fit sm:h-full sm:mx-[16%]"
              alt=""
            />
          </div>
          <div className="h-full xl:w-[18%] flex gap-2 items-center mr-1 bg-[#e3f1fe]">
            <div className="w-11/12 xl:w-9/12 h-9 rounded bg-white  flex items-center justify-around">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED877WUQU4h6NHyFKopaMfRXZeTqonL144Q&usqp=CAU"
                className="h-full p-1"
                alt=""
              />
              <small className="font-bold text-slate-800 text-xs pr-2">
                XYZ Enterprises Pvt.Ltd
              </small>
            </div>
            <div className="bg-white h-9 flex justify-center items-center rounded w-7">
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        {/* TOP NAVBAR END */}

        <div className="h-[87vh] flex  bg-[#e3f1fe] w-full justify-between">
          <SideBar setShow={setShow} show={show} />   {/* Side Bar Component */}
          
          {/*CARD START */}
          <div
            className={`${
              show ? "w-[99%] md:w-[85.1%]" : "w-[99%] md:w-[85.1%]"
            }h-full  flex flex-col items-center justify-center  bg-white`}
          >
            <div className="h-full md:h-[85%] w-11/12  bg-white">
              <div className="h-[13%] w-11/12  bg-white">
                <h1 className="text-sm sm:text-base md:text-lg ml-5 font-bold ">
                  Choose a plan that's just right for you !
                </h1>
                <div className="flex w-44  gap-1 border border-slate-500 float-right  p-0.5 text-xs sm:text-sm lg:text-base font-semibold   md:mr-1 text-center justify-around items-center rounded-full">
                  <small className="py-1  w-1/2 text-center bg-blue-200 rounded-full ">
                    Monthly
                  </small>
                  <small className="py-1  w-1/2 ">Annually</small>
                </div>
              </div>
              <TopCard />      {/* Top cards lited */}
              <BottomCard />   {/* Bottom cards lited */}
            </div>
          </div>
          {/* CARD END */}

          <div className="min-h-[100vh] w-0.5 sm:w-[2rem] justify-between bg-[#e3f1fe] flex flex-col items-end">
            <div className="border bg-white h-fit py-1.5 px-0.5 rounded-es-md rounded-ss-md">
              <NotificationsActiveIcon color="info" />
            </div>
            <div className="w-full  h-[28%] justify-around flex flex-col items-end">
              <div className="w-7 h-24 bg-white rounded-es-md rounded-ss-md" />
              <AddIcon
                fontSize="medium"
                className="text-blue-500 bg-slate-300 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
