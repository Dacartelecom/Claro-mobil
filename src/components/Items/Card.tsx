import React from 'react'
import { type FC, useEffect, useState } from "react"
import Modal from '../Modal/Modal';
import type { PlanProps } from '../../interfaces/Items.props';
import { Form } from '../Form';

export const Card: FC<PlanProps> = ({
    plan,
    extraPlan,
    data,
    promo,
    price,
    details,
    regular

}) => {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;
    const urlDelSitio = window.location.href;
    const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];
  
    const [activeModal, setActiveModal] = useState<boolean>(false);
    const [activeModalForm, setActiveModalForm] = useState<boolean>(false);
    const [number, setNumber] = useState<{
      tel: string,
      num: string
    }>({
      tel: '016805993',
      num: '(01) 6805993'
    });
    const [TSource] = useState(params.get('T-source'));
  
    useEffect(() => {
      if (nombreDelDominio.includes("clarofertas")) {
        if (TSource){
          switch(TSource){
            case 'ext':
              setNumber({
                tel: '016806465',
                num: '(01) 6806465'
              });
              break;
  
            case 'ext_1':
              setNumber({
                tel: '016806268',
                num: '(01) 6806268'
              });
              break;
  
            case 'ext_2':
              setNumber({
                tel: '016806466',
                num: '(01) 6806466'
              });
              break;
  
            case 'ext_3':
              setNumber({
                tel: '6806269',
                num: '(01) 6806269'
              });
              break;
          }
        } else {
          if (pathname.includes('planes-moviles')){
            setNumber({
              tel: '016806465',
              num: '(01) 6806465'
            });
          }else{
            setNumber({
              tel: '016806465',
              num: '(01) 6806465'
            });
          }
        }
        
      }else{
        if (TSource) {
          switch (TSource) {
            case '01clarohogar':
              setNumber({
                tel: '016806301',
                num: '(01) 6806301'
              });
              break;
    
            case '02clarointernet':
              setNumber({
                tel: '016806302',
                num: '(01) 6806302'
              });
              break;
    
            case '03clarotv':
              setNumber({
                tel: '016806303',
                num: '(01) 6806303'
              });
              break;
    
            case '05claroperu':
              setNumber({
                tel: '016806545',
                num: '(01) 6806545'
              });
              break;
    
            case '06claromovil':
              setNumber({
                tel: '016805992',
                num: '(01) 6805992'
              });
              break;
          }
        } else {
          if (pathname.includes('planes-moviles')){
            setNumber({
              tel: '016805992',
              num: '(01) 6805992'
            });
          }else{
            setNumber({
              tel: '016805993',
              num: '(01) 6805993'
            });
          }
        }
      }
    },[
      pathname,
      TSource
    ]);

    return (
        <>
            <div className='w-[380px] h-[440px] border border-[#EF3829] rounded-md flex flex-col justify-start'>
                <div className='w-full h-[70px] bg-[#EF3829] flex items-center text-white'>
                    <div className='flex flex-col justify-center w-full ml-[40px]'>
                        <span className='text-[16px]'>{plan}</span>
                        <span className='text-[35px] my-[-9px]'>{extraPlan}</span>
                    </div>
                </div>

                <div className='h-full flex flex-col justify-around'>

                    <div className='flex flex-col justify-center items-center gap-[20px]'>
                        {data.map((item, index) => {
                            const {
                                description,
                                strong
                            } = item;

                            return (
                                <div className='flex w-4/5 justify-start gap-[20px] items-start'>
                                    <span className='text-xl'>✔️</span>
                                    <div className='flex flex-col'>
                                        <span className='text-[22px] my-[-10px]'>{strong}</span>
                                        <span className='text-[16px]'>{description}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-full flex justify-center items-center gap-[20px]'>
                            <div>{promo}</div>
                            <div className='flex items-start'>
                                <span>S/</span>
                                <span className='text-[50px]'>{price}</span>
                            </div>
                        </div>
                        <span className='text-gray-600'>{regular}</span>

                    </div>

                    <div className='w-full flex flex-col justify-center items-center'>
                        <button className='bg-[#1F97AE] w-[300px] h-[40px] border-white rounded-xl text-white transition-all duration-300 hover:border hover:border-[#1F97AE] hover:bg-white hover:text-[#1F97AE]' onClick={() => setActiveModalForm(true)}>Me interesa</button>
                        <span className="text-xl text-[#0fbddf] font-bold cursor-pointer" onClick={() => setActiveModal(true)}>Ver consideraciones</span>
                    </div>
                </div>
            </div>

            <Modal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                background="#fff"
                buttonEnd
            >
                {
                    details ?
                        details :
                        <>
                            <h6 className="text-3xl text-start font-bold w-full mb-4">Debes Saber</h6>
                            <ul className="text-justify text-gray-500 [&>li]:mb-1">
                                <li>-Todos los planes están sujeto a evaluación crediticia, facilidades técnicas y cobertura.</li>
                                <li>-Aplica costo S/0 en tarifa de instalación.</li>
                                <li>-Las velocidades desde 200 Mbps aplican solamente para algunas zonas de Lima.</li>
                            </ul>
                        </>
                }
            </Modal>
            
            <Modal
                activeModal={activeModalForm}
                setActiveModal={setActiveModalForm}
                background="#fff"
            >
                <Form
                    className="bg-[#ee122c]"
                    textLabel=""
                    classNameButton="bg-[#0fbddf] text-white rounded-full"
                >
                    <span className="text-2xl text-white text-center font-bold mb-2">¡Buena Elección!</span>
                    <span className="text-sm text-white text-center">Llámanos gratis al</span>
                    <a href={`tel:${number.tel}`} className="text-3xl text-white text-center font-bold mb-4">{number.num}</a>
                    <span className="text-sm text-white text-center mb-8">O, si lo prefieres déjanos tus datos y te llamaremos inmediatamente...</span>
                </Form>
            </Modal>
        </>
    )
}
