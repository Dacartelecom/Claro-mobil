import type { ModalProps } from "../../interfaces/Modal.props";
import { useState, type FC, useEffect } from "react"

const Modal: FC<ModalProps> = ({
  activeModal,
  setActiveModal,
  background,
  children,
  buttonEnd
}) => {

  const [height, setHeight] = useState<string>('0px');
  const [heightBody, setHeightBody] = useState<string>('0px');
  const [paddingBody, setPaddingBody] = useState<string>('0px');
  const [top, setTop] = useState<string>('50%');

  const active = () => {
    setHeight('100vh');
    setHeightBody('auto');
    setPaddingBody('48px');
    setTop('0');
  };
  
  const close= () => {
    setHeight('0px');
    setHeightBody('0px');
    setPaddingBody('0px');
    setTop('50%');
  };

  const closeModal = () => {
    setActiveModal(false);
  };

  useEffect(() => {
    if (activeModal) {
      active();
    } else {
      close();
    }
    
  }, [activeModal]);
  

  return (
    <div
      className="fixed overflow-hidden w-full left-0 flex items-center justify-center bg-[#222]/70 z-[98] transition-all delay-300 duration-500"
      style={{
        height,
        top
      }}
    >
      <div
        onClick={ closeModal }
        className="fixed w-full left-0 bg-[#222]/70 cursor-pointer z-[99]"
        style={{
          height,
          top
        }}
      ></div>
      <div
        className="relative overflow-hidden overflow-y-auto min-w-[300px] max-h-[600px] rounded-3xl flex flex-col items-center justify-between transition-all duration-500 z-[100] max-md:max-w-[350px] md:max-w-[750px]"
        style={{
          height: heightBody,
          padding: paddingBody,
          background
        }}
      >
        <i
          className="fa-solid fa-xmark absolute top-5 right-5 text-2xl cursor-pointer z-50"
          onClick={ closeModal }
        ></i>
        { children }
        {
          buttonEnd &&
          <div className="flex items-center justify-end w-full mt-8">
            <button
              className="text-sm text-white font-extrabold uppercase bg-[#ee122c] py-2 px-6 rounded-full"
              onClick={ closeModal }
            >Entendido</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Modal