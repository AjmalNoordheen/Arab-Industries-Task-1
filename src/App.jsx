import { useState } from 'react'
import './App.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[100%] h-[100vh]  bg-[#e3f1fe]'>
     <div className='w-full h-[80px] flex justify-between bg-black'>
        <div className='logo w-[15%]'>

        </div>
        <div className='h-full w-[18%] flex gap-2 items-center bg-red-600'>
            <div className='w-9/12 h-7 rounded bg-white flex items-center justify-around'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTED877WUQU4h6NHyFKopaMfRXZeTqonL144Q&usqp=CAU" className='h-full py-0.5' alt="" />
                <small className='font-bold text-slate-800 pr-2'>XYZ Enterprises Pvt.Ltd</small>
            </div>
            <div className='bg-white h-7 rounded w-7'>
                <p>v</p>
            </div>
        </div>
     </div>
    </div>
    </>
  )
}

export default App
