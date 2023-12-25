import React from 'react'
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";


function TopCard() {
  return (
    <div className="h-[95%] md:h-[60%] xl:h-[63%] w-full  grid grid-cols-12 gap-4 md:gap-9  p-2">
        {data?data.map((item)=><div className="col-span-12   md:col-span-4 xl:mx-4 flex md:flex-col justify-around shadow-lg pl-5 rounded-md bg-white">
                  <div className="flex h-full md:h-[46%]   flex-col justify-center ">
                    <span className="text-2xl font-semibold">{item.heading}</span>
                    <del className="text-red-500 text-xs">{item.crossAmount}</del>
                    <h1 className="text-lg font-semibold">
                     {item.amount}<span className="text-sm">/mo</span>{" "}
                    </h1>
                    <span className={`${item.bg} rounded w-[8rem] text-center text-sm font-semibold py-0.5 mt-1`}>
                      Get Started <ArrowRightAltIcon />
                    </span>
                  </div>

                  <div className="w-11/12 h-[0.1px] bg-slate-300 hidden md:block"/>
                  <div className="h-full md:h-[46%] text-gray-600 flex flex-col justify-evenly">
                    <small>What you'll get :</small>
                    <div className="flex gap-x-2 text-sm">
                      <PersonOutlineOutlinedIcon fontSize="small" />
                      <p className="">{item.content1}</p>
                    </div>
                    <div className="flex gap-x-2 text-sm">
                      <CloudDownloadOutlinedIcon fontSize="small" />
                      <p>{item.content2}</p>
                    </div>
                    <div className="flex gap-x-2  text-sm">
                      <EmailOutlinedIcon fontSize="small" />
                      <p>{item.content3}</p>
                    </div>
                    <div className="ml-6">
                      <small className="font-semibold">
                        <u>EXPLORE FEATURES</u>
                      </small>
                      <ArrowRightIcon className="text-yellow-500" />
                    </div>
                  </div>
         </div>):''}
    </div>
  )
}

const data = [
    {
        heading:'Basic',
        crossAmount:'$ 89.99/mo',
        amount:'$ 9.99',
        content1:'Upto 25 Users',
        content2:'Upto 25gb Storage',
        content3:'Email Support',
        bg:'bg-yellow-200'
        
    },
    {
        heading:'Standard',
        crossAmount:'$ 189.99/mo',
        amount:'$ 99.99',
        content1:'Upto 50 Users',
        content2:'Upto 60 Storage',
        content3:'Email+Chat Support',
        bg:'bg-red-300'
    },
    {
        heading:'Premium',
        crossAmount:'$ 389.99/mo',
        amount:'$ 199.99',
        content1:'Upto 60 Users',
        content2:'Upto 75gb Storage',
        content3:'Email+Chat Support',
        bg:'bg-purple-200'
    },
]

export default TopCard