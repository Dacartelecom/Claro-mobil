import { type FC, useEffect, useState } from "react"
import Modal from '../Modal/Modal';
import type { PlanProps } from '../../interfaces/Items.props';
import check from '../../../public/img/check.svg'
import { Form } from '../Form';

export const Card: FC<PlanProps> = ({
  plan,
  noHeader,
  extraPlan,
  data,
  promo,
  price,
  details,
  src,
  alt,
  width,
  height,
  regular,
  tabble
}) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activeModalForm, setActiveModalForm] = useState<boolean>(false);
  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '017540491',
    num: '(01) 7540491'
  });

  return (
    <>
      <div className={`w-[350px]  ${tabble?'h-[630px]':'h-[530px]' } border border-[#EF3829] rounded-md flex flex-col justify-start mx-auto my-6 max-lg:w-[320px]`}>
        <div className='w-full h-[70px] bg-[#EF3829] flex items-center text-white'>
          <div className={`flex flex-col justify-center w-full ml-[40px] ${noHeader && 'ml-[20px]' }`}>
            <span className='text-[16px]'>{plan}</span>
            <span className={`text-[30px] my-[-9px] ${noHeader && 'max-md:text-[21px] text-left'}`}>{extraPlan}</span>
          </div>
        </div>

        <div className='h-full flex flex-col justify-around py-[10px]'>

          <div className='flex flex-col justify-center items-center gap-[20px]'>
          {
          noHeader &&
          <div className="w-full h-72 pt-6 flex justify-center">
            <img
              src={ `${src}` }
              alt={ alt }
              width={ width }
              height={ height }
              className="w-full h-full object-contain max-md:w-[220px]"
            />
          </div>
        }
            {!noHeader && data.map((item, index) => {
              const {
                description,
                strong
              } = item;

              return (
                <div className='flex w-[90%] justify-start gap-[10px] items-start'>
                  <span className='w-[30px]'><img src={check.src} alt="check" /></span>
                  <div className='flex flex-col'>
                    <span className='text-[22px] my-[2px] leading-[23px]'>{strong}</span>
                    <span className='text-[17px]'>{description}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center items-center gap-[20px] max-lg:gap-[0px] text-[17px]'>
              <div>{promo}</div>
              <div className='flex items-start'>
                <span>S/</span>
                <span className='text-[50px] max-lg:text-[40px] '>{price}</span>
              </div>
            </div>
            <span className='text-gray-600'>{regular}</span>

          </div>

          <div className='w-full flex flex-col justify-center items-center'>
            <button className='bg-[#1F97AE] w-[300px] h-[40px] border-white rounded-xl text-white transition-all duration-300 hover:border hover:border-[#1F97AE] hover:bg-white hover:text-[#1F97AE]
            max-lg:w-[150px] ' onClick={() => setActiveModalForm(true)}>Me interesa</button>
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
        <div className='w-[360px] h-[400px] relative flex justify-center items-center'>
          <Form modal={false}>
            <span className="text-4xl text-[#EF3829] text-center font-bold mb-2">¡Buena Elección!</span>
            <span className="text-xl text-[#EF3829] text-center">Llámanos gratis al</span>
            <a href={`tel:${number.tel}`} className="text-3xl text-[#EF3829] text-center font-bold mb-4">{number.num}</a>
            <span className="text-xl text-[#B7202E] text-center mb-8">O, si lo prefieres déjanos tus datos y te llamaremos inmediatamente...</span>
          </Form>
        </div>
      </Modal>

      
    </>
  )
}
