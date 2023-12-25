import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";

function BottomCard() {
  return (
    <div className="h-full lg:h-[48%]  mx-3 grid grid-cols-12 gap-4 p-2">
                {/* BOTTOM CARD 1 */}
                <div className=" col-span-12 lg:col-span-6 flex shadow-lg  rounded-md bg-white">
                  <div className="w-1/2 pl-5  h-full flex gap-1 flex-col justify-center">
                    <small className="bg-green-300 px-2 py-0.5 w-fit font-semibold text-gray-800 rounded-full">
                      Free Forever
                    </small>
                    <h1 className="text-2xl font-semibold">Free Started</h1>
                    <small className="text-xs text-gray-600 line-clamp-2">
                      The quickcest and easiest way to try Protocols with basic
                      functionalities
                    </small>
                    <span className="bg-green-300 rounded w-[8rem] block text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-1 justify-center text-gray-600">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-xs">
                      <PersonOutlineOutlinedIcon fontSize="inherit" />
                      <p className="">Upto 25 Users</p>
                    </div>
                    <div className="flex gap-x-2 text-xs">
                      <CloudDownloadOutlinedIcon fontSize="inherit" />
                      <p>Upto 25gb Storage</p>
                    </div>
                    <div className="flex gap-x-2  text-xs">
                      <EmailOutlinedIcon fontSize="inherit" />
                      <p>Email Support</p>
                    </div>
                    <div className="flex gap-x-1">
                      <DoneAllOutlinedIcon fontSize="inherit" />
                      <p className="text-xs overflow-scroll">
                        Voting,Accounting,Banking,Notes,
                        Investore,Director and
                        Team,Management Included
                      </p>
                    </div>
                  </div>
                </div>
                {/* BOTTOM CARD 2 */}
                <div className=" col-span-12 lg:col-span-6 flex shadow-lg  rounded-md bg-white">
                  <div className="w-1/2 pl-5  h-full flex gap-1 flex-col justify-center">
                    <small className="bg-blue-200 px-2 py-0.5 w-fit font-semibold text-gray-800 rounded-full">
                      Let's Connect
                    </small>
                    <h1 className="text-2xl font-semibold">EnterPrise Plan</h1>
                    <small className="text-xs text-gray-600 line-clamp-2">
                      The quickcest and easiest way to try Protocols with basic
                      functionalities
                    </small>
                    <span className="bg-blue-200 rounded w-[8rem] block text-center text-sm font-semibold py-0.5 mt-1">
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-2 justify-center text-gray-600">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-xs">
                      <PersonOutlineOutlinedIcon fontSize="inherit" />
                      <p className="">More than 75 Users</p>
                    </div>
                    <div className="flex gap-x-1">
                      <DoneAllOutlinedIcon fontSize="inherit" />
                      <p className="text-xs">
                        Customization of all
                        <br />
                        other features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default BottomCard