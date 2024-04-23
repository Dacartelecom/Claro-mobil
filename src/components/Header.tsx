import { useEffect, useState } from 'react'
import ico from '../../public/img/icoclaro.svg'

export const Header = () => {

  
  const params = new URLSearchParams(window.location.search);
  const pathname = window.location.pathname;

  const urlDelSitio = window.location.href;
  const nombreDelDominio = urlDelSitio.replace(/^https?:\/\/(?:www\.)?/, '').split('/')[0];

  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '017028605',
    num: '(01) 7028605'
  });
  const [TSource] = useState(params.get('T-source'));

  useEffect(() => {
    
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
        setNumber({
          tel: '017028605',
          num: '(01) 7028605'
        });
    }
    
  },[
    pathname,
    TSource
  ]);
  return (
    <div className='w-full h-[60px] bg-black text-white flex justify-around items-center'>
        <span className='flex font-normal max-lg:text-[15px] text-[20px] w-[400px] h-[60px] justify-center relative items-center flex-row-reverse gap-[20px] max-lg:gap-[5px] max-lg:w-[270px]'>
          <div><span>Distribuidor Autorizado de Claro</span></div>
        <div className=''><img className='w-[30px] max-lg:w-[20px]' src={ico.src} alt="calro" /></div>
        </span>
        <div className='flex max-lg:flex-col gap-2 max-lg:gap-0'>
        <span className='font-normal max-lg:text-[15px] text-[25px]'>Llámanos al </span>  <a className='font-normal max-lg:text-[15px] text-[25px]' href={`tel:${ number.tel }`}>{ number.num }</a>
        </div>
    </div>
  )
}
