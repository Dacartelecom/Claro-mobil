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
                    tel: `017540491`,
                    num: `(01) 7540491`
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
    <div className='w-full min-h-[60px] bg-black text-white flex max-sm:flex-col justify-around items-center'>
        <span className='flex font-normal max-lg:text-[15px] text-[20px] w-[400px] h-[60px] justify-center relative items-center flex-row-reverse gap-[20px] max-lg:gap-[5px] max-lg:w-[270px]'>
          <div><span>Distribuidor Autorizado de Claro</span></div>
        <div className=''><img className='w-[30px] max-lg:w-[20px]' src={ico.src} alt="calro" /></div>
        </span>
        <div className='flex gap-0 lg:gap-1 max-sm:py-1 max-sm:flex max-sm:items-center max-sm:justify-end max-sm:w-full max-sm:gap-4'>
          <span className='font-normal max-lg:text-[15px] text-[25px]'>Llámanos al </span>
          <a className='font-normal max-lg:text-[15px] text-[25px] max-sm:py-px max-sm:px-3 max-sm:rounded-xl max-sm:bg-[#0fbddf]' href={`tel:${ number.tel }`}>{ number.num }</a>
        </div>
    </div>
  )
}
