import ClaroLogoWhite from '../../public/img/Teletalk-B.png'
import { useEffect, useState } from "react";
import './Global.css'
import Modal from './Modal/Modal';

export const SelectPlan = () => {

  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const [TSource] = useState(params.get('T-source'));
  const [param, setParam] = useState<string>('');
  const [messageButton] = useState<string>('SI YA ERES CLIENTE CLARO HAZ CLICK AQUÍ');

  const active = () => setActiveModal(true);

  useEffect(() => {
    if (TSource) {
      setParam(`?T-source=${TSource}`);
    } else {
      setParam('');
    }
  }, [TSource]);

  return (
    <div className='w-full h-[90px] bg-[#EF3829] text-white flex justify-around items-center max-lg:flex-col max-lg:h-[180px] max-lg:items-center max-lg:justify-center'>
      <span className='font-thin text-lg max-lg:flex max-lg:justify-center max-lg:items-center max-lg:h-[200px]'>
        <img
          src={`${ClaroLogoWhite.src}`}
          alt={'Logo Claro'}
          className="w-[180px] object-cover"
        />
      </span>

      <div className='w-[700px] font-normal text-2xl flex justify-center max-lg:w-full h-full max-lg:text-xl max-lg:flex-col max-lg:my-2'>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative'>
          <a href={`/${param}`} className='text-[20px]'>
            Planes Móviles 
          </a>
          <div className=" underline"></div>
        </span>
        <span className='w-full h-full flex items-center justify-center cursor-pointer relative'>
          <a href={`/planes-hogar${ param }`} className='text-[20px]'>
            Planes Hogar 
          </a>
          <div className=" underline"></div>
        </span>
        <div className=" w-[350px] max-lg:w-[80%] flex items-center justify-center text-center m-auto">
            <button
              className=" bg-[#ff3a2d] flex items-center gap-1 py-1 px-3 rounded-full border-2 border-white text-white text-[13px] font-bold uppercase max-md:text-[9px] w-[500px] hover:text-[#ff3a2d] hover:bg-white duration-300 transition-all"
              onClick={ active }
            >
              <i className="fa-solid fa-hand-point-right"></i>
              "{ messageButton }"
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
