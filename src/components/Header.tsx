import React from 'react'

export const Header = () => {
  return (
    <div className='w-full h-[60px] bg-black text-white flex justify-around items-center'>
        <span className='font-thin text-lg'>Distribuidor Autorizado de Claro</span>
        <span className='font-thin text-xl'>Llámanos al <a href="#">(01) 674 4475</a></span>
    </div>
  )
}
