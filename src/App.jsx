import { useState } from 'react'
import './App.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GrassIcon from '@mui/icons-material/Grass';
import ExtensionIcon from '@mui/icons-material/Extension';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100%] h-[100vh]  bg-[#e3f1fe]'>
      {/* TOP NAVBAR START */}
     <div className='w-full h-[13.2vh]  flex justify-between bg-[#e3f1fe]'>
        <div className='logo w-[18%] h-full  flex  items-center'>
          <img src="/src/assets/imgLogo.png" className='w-fit h-full mx-[16%]' alt="" />
        </div>
        <div className='h-full w-[18%] flex gap-2 items-center bg-[#e3f1fe]'>
            <div className='w-9/12 h-7 rounded bg-white  flex items-center justify-around'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED877WUQU4h6NHyFKopaMfRXZeTqonL144Q&usqp=CAU" className='h-full py-0.5' alt="" />
                <small className='font-bold text-slate-800 pr-2'>XYZ Enterprises Pvt.Ltd</small>
            </div>
            <div className='bg-white h-7 flex justify-center items-center rounded w-7'>
               <KeyboardArrowDownIcon/>
            </div>
        </div>
     </div>
     {/* TOP NAVBAR END */}

     <div className='h-[87vh] flex  bg-red-600 w-full justify-between'>
              {/* Side NavBar Start */}
             <div className='h-full w-[12.3%] shadow-xl shadow-black flex flex-col justify-around items-center bg-white'>
              <div className='h-[26%] border border-slate-100 w-[99%] flex flex-col justify-center items-center bg-white shadow-md'>
                    <img src="\src\assets\profile.jpeg" className='rounded-full w-16 h-16' alt="" />
                    <small className='font-bold text-sm mt-1'>Ram Mohan<KeyboardArrowRightIcon fontSize='small'/> </small>
                    <small className='text-xs font-semibold'>rammohan@gmail.com</small>
              </div>
              <div className='h-[73%] w-[99%] pt-2 flex flex-col  shadow-md ml-1 justify-between '>
                  <div className='w-full h-[85%] space-y-4 '>
                    <div className='w-[93%] rounded border border-slate-200 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3'>
                       <DashboardIcon className='text-blue-700 ml-1'/>
                       <p>Dashboard</p>
                    </div>
                    <div className='w-[93%] rounded border border-slate-100 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3'>
                       <GrassIcon className='text-blue-700 ml-1'/>
                       <p>Perks</p>
                    </div>
                    <div className='w-[93%] rounded border border-slate-200 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3'>
                       <ExtensionIcon className='text-blue-700 ml-1'/>
                       <p>Addons</p>
                    </div>
                    <div className='w-[93%] rounded border border-slate-200 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3'>
                       <ContactSupportIcon className='text-blue-700 ml-1'/>
                       <p>FAQ</p>
                    </div>
                    <div className='w-[93%] rounded border border-slate-200 font-semibold flex gap-x-1 items-center text-gray-800 bg-white hover:bg-blue-300  h-10 mt-3'>
                       <ConnectWithoutContactIcon className='text-blue-700 ml-1'/>
                       <p>Support</p>
                    </div>
                    
                  </div>
                  <div className='w-[99%] h-10 flex font-bold gap-x-1 justify-center items-center text-blue-700 bg-white'>
                    Logout<PowerSettingsNewIcon />
                  </div>
              </div>
             </div>
              {/* Side NAVBAR END */}
               
               {/* MAIN CARD LISTING START */}
             <div className='h-full w-[85.1%] flex flex-col items-center justify-center  bg-yellow-200'>
                <div className='h-[14%] w-11/12  bg-blue-300'>
                    <h1 className='text-lg mt-2 font-bold '>Choose a plan that's just right for you !</h1>
                     <div className='flex w-44 gap-1 border float-right  p-0.5  mr-1 text-center justify-around items-center rounded-full'> 
                      <small className='py-1  w-1/2 text-center bg-red-300 rounded-full '>Monthly</small>
                      <small className='py-1  w-1/2 '>Annually</small>
                     </div>
                </div>
                <div className='h-[82%] w-11/12  bg-slate-600'>
                    <div className='h-[65%]  grid grid-cols-12 gap-9  p-2'>
                    <div className=' col-span-4 mx-3 rounded-md bg-white'>
                       <div>
                        <h1>Basic</h1>
                         <del className='text-red-500 text-xs'>$ 89.99/mo</del>
                         <h1>$ 9.99/mo</h1>
                         <button>Get Started <ArrowRightAltIcon/></button>
                       </div>
                       <hr />
                       <div></div>
                     </div>
                     <div className=' col-span-4 mx-3 rounded-md bg-white'>
                              lkjjjjjjjjjjjjjjjjjjjj
                     </div> 
                     <div className=' col-span-4 mx-3 rounded-md bg-white'>
                          jlklkjjjjjjjjjjjjjjjjjjjjjjjjj
                     </div>                    
                    </div>
                    <div className='h-[35%]  mx-3 grid grid-cols-12 gap-4 p-2'>
                    <div className=' col-span-6   rounded-md bg-white'>
                              lkjjjjjjjjjjjjjjjjjjjj
                     </div> 
                    <div className=' col-span-6   rounded-md bg-white'>
                              lkjjjjjjjjjjjjjjjjjjjj
                     </div> 
                    </div>
                </div>
             </div>
             <div className='h-full w-[2rem] bg-[#e3f1fe] flex justify-end'>
                  <div className='border bg-white h-fit py-1.5 px-0.5 rounded-md'>
                  <NotificationsActiveIcon  color='info'/>
                  </div>
              </div>    
     </div>
    </div>
    </>
  )
}

export default App
