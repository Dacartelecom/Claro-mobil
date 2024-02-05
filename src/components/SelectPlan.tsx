import { useState } from "react";
import './Global.css'

export const SelectPlan = () => {



  return (
    <div className='w-full h-[60px] bg-[#EF3829] text-white flex justify-around items-center'>
    <span className='font-thin text-lg'>Imagen de Logo Horizontal </span>
    <div className='font-thin text-xl flex justify-center w-[400px]  h-full'>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative'>Planes Mobiles <div className="underline"></div></span>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative'>Planes Hogar <div className="underline"></div></span>
    </div>
</div>
  )
}
