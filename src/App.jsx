import { useState } from 'react'
import './App.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100%] h-[100vh]  bg-[#e3f1fe]'>
     <div className='w-full h-[80px] flex justify-between bg-[#e3f1fe]'>
        <div className='logo w-[15%] flex justify-start items-center'>
          <img src="/src/assets/imgLogo.png" className='w-fit h-full ml-3' alt="" />
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
     <div>
      
     </div>
    </div>
    </>
  )
}

export default App
