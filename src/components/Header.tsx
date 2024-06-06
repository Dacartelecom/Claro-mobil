import { useEffect, useState } from 'react'
import ico from '../../public/img/icoclaro.svg'

export const Header = () => {
  const [number, setNumber] = useState<{
    tel: string,
    num: string
  }>({
    tel: '017540458',
    num: '(01) 7540458'
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const TSource = params.get('T-source');

    if (TSource) {
        switch (TSource) {
            case '01claromovil':
                setNumber({
                    tel: `017540458`,
                    num: `(01) 7540458`
                });
                break;

            case '02claro':
                setNumber({
                tel: `015009718`,
                num: `(01) 5009718`
                });
                break;

            default:
                setNumber({
                tel: '017540458',
                num: '(01) 7540458'
                });
                break;
        };
    }
},[]);

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
