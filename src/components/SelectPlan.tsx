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
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative max-lg:w-[60%] '>
          <a href={`/${window.location.search}`} className='text-[20px] 
          max-md:border-[2px] max-md:p-2 max-md:rounded-xl flex justify-around items-center gap-5 max-md:w-[420px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-5 rebote" fill="#fff">
              <path d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>            
            </svg>
            <p>Planes Móviles</p> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-5" fill="#fff">
              <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
            </svg>
          </a>
          <div className=" underline"></div>
        </span>

        <span className='w-full h-full flex items-center justify-center cursor-pointer relative max-lg:w-[60%] '>
          <a href={`/planes-hogar${window.location.search}`} className='text-[20px]
 max-md:border-[2px] max-md:p-2 max-md:rounded-xl flex justify-around items-center gap-5 max-md:w-[420px]'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-5 rebote" fill="#fff">
              <path d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/>            
            </svg>
           <p>Planes Hogar  </p> 
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9M19 10L21 12M19 10V20C19 20.2652 18.8946 20.5196 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H15M9 21C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21M9 21H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <div className=" underline"></div>
        </span>
        {/* <div className=" w-[350px] max-sm:w-full max-lg:w-[80%] flex items-center justify-center text-center max-lg:my-[20px]">
            <button
              className=" bg-[#ff3a2d] flex justify-center gap-2 items-center py-1 rounded-full border-2 border-white text-white text-[13px] font-bold uppercase max-md:text-[13px] w-[500px] hover:text-[#ff3a2d] hover:bg-white duration-300 transition-all"
              onClick={ active }
            >
              <i className="fa-solid fa-hand-point-right"></i>
              <span className="text-[10px] md:text-xs">"{ messageButton }"</span>
            </button>
        </div> */}
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
