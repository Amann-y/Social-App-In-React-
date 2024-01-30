import React from 'react'
import { data2 } from '../utils/Data'


const Rightbar = () => {
  
  return (
    <div>
      {
        data2?.map((ele)=>{
          return <div key={ele.id} className={`w-[14rem] h-[10rem] rounded-full my-2 mx-auto `}>
         
            <img src={ele.img} alt={ele.authorName} className='w-full rounded-full object-fill '/>
            <div className='relative -top-[80px] left-1'>
            <h1 className='text-white font-semibold text-xl'>{ele.authorName}</h1>
            <h3>{ele.authortext}</h3>
          </div>
        
        </div>
        })
      }
    </div>
  )
}

export default Rightbar