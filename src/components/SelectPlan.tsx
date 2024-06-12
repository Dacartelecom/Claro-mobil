import { useState } from "react";
import './Global.css'
import Modal from './Modal/Modal';

export const SelectPlan = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [messageButton] = useState<string>('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ');

  const active = () => setActiveModal(true);

  return (
    <div className='w-full h-[90px] bg-[#EF3829] text-white flex justify-around items-center max-lg:flex-col max-lg:h-[150px] max-lg:items-center max-lg:justify-center'>
      <div className="w-[200px] max-lg:w-[0px]">

      </div>
      <div className='w-[700px] font-normal text-2xl flex justify-evenly max-lg:w-full h-full max-lg:text-xl max-lg:flex-col max-lg:items-center max-lg:mt-5'>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative max-lg:w-[50%] '>
          <a href={`/${window.location.search}`} className='text-[20px]'>
            Planes Móviles 
          </a>
          <div className=" underline"></div>
        </span>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative max-lg:w-[50%] '>
          <a href={`/planes-hogar${window.location.search}`} className='text-[20px]'>
            Planes Hogar 
          </a>
          <div className=" underline"></div>
        </span>
        <div className=" w-[350px] max-sm:w-full max-lg:w-[80%] flex items-center justify-center text-center max-lg:my-[20px]">
            <button
              className=" bg-[#ff3a2d] flex justify-center gap-2 items-center py-1 rounded-full border-2 border-white text-white text-[13px] font-bold uppercase max-md:text-[13px] w-[500px] hover:text-[#ff3a2d] hover:bg-white duration-300 transition-all"
              onClick={ active }
            >
              <i className="fa-solid fa-hand-point-right"></i>
              <span className="text-[10px] md:text-xs">"{ messageButton }"</span>
            </button>
          </div>
      </div>
      <Modal
        activeModal={ activeModal }
        setActiveModal={ setActiveModal }
        background="#fff"
      >
        <h4 className="text-center text-lg font-bold tracking-tighter text-gray-800">Teléfonos solo para atención al cliente y reclamos</h4>
        <div className="w-full h-1 bg-[#ee122c] rounded-full my-4"></div>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un móvil Claro</p>
        <a
          href="tel:123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          123
        </a>
        <p className="text-center text-sm text-[#777] font-bold">Llamar desde un teléfono fijo y desde otras operadoras</p>
        <a
          href="tel:080000123"
          className="text-base flex gap-2 items-center bg-[#ee122c] py-2 px-6 rounded-full my-6 text-white"
        >
          <i className="fa-solid fa-phone-volume"></i>
          0800 00123
        </a>
      </Modal>
    </div>
  )
}
