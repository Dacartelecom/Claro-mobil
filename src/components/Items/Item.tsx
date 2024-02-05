'use client'
import type { ItemProps } from "../../interfaces/Items.props"
import { type FC, useEffect, useState } from "react";
import {Card} from "./Card";

const Item: FC<ItemProps> = ({
  onClick,
  selected,
  title,
  message,
  planes
}) => {

  const [background, setBackground] = useState<string>('#18a2bd');
  const [color, setColor] = useState<string>('#18a2bd');
  const [height, setHeight] = useState<string>('60px');

  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia('(max-width: 768px)').matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  useEffect(() => {
    if(isMobile){
      if (selected) {
        setBackground('#ee122c');
        setColor('#fff');
        setHeight('350px');
      } else {
        setBackground('#18a2bd');
        setColor('#fff');
        setHeight('60px');
      }
    }else{
      setBackground('transparent')
      setColor('#18a2bd')
      setHeight('60px');

    }
  },[selected,isMobile]);



  return (
    <div
      className="overflow-hidden cursor-pointer transition-all duration-500 lg:basis-1/3 lg:h-[60px]"
      style={{
        height
      }}
    >
      <div
        className={`relative flex items-center justify-center h-[60px] py-4 text-base font-extrabold uppercase transition-all duration-500 m-auto max-lg:w-[335px] max-lg:text-white lg:bg-transparent lg:font-bold ${ selected ? 'lg:border-b-0' : 'lg:border-b' } lg:border-gray-400 lg:hover:border-b-0 lg:after:absolute lg:after:left-1/2 lg:after:bottom-[0px] lg:after:translate-x-[-50%] ${ selected ? 'lg:after:w-full' : 'lg:after:w-0' } lg:after:h-[6px] lg:after:rounded-full lg:after:bg-[#ee122c] lg:after:transition-all lg:after:duration-300 lg:hover:after:w-full lg:before:absolute lg:before:left-1/2 lg:before:bottom-[-12.5px] lg:before:translate-x-[-50%] lg:before:bg-[#ee122c] lg:before:rounded-full ${ selected ? 'lg:before:w-[25px] lg:before:h-[25px]' : 'lg:before:w-0 lg:before:h-0' }`}
        onClick={ onClick }
        style={{
          background,
          color
        }}
      >
        <i className={`absolute left-4 fa-solid fa-${ selected ? 'minus' : 'plus' } lg:hidden`}></i>
        <h4 className="text-center">{ title }</h4>
      </div>
      <div className="m-auto max-lg:overflow-hidden max-lg:w-[335px] max-lg:h-[290px] max-lg:overflow-y-auto max-lg:py-4 max-lg:px-8">
        {
          message &&
          <h5 className="text-center text-gray-600 mb-8">
            {
              message.strong &&
              <strong>{ message.strong } </strong>
            }
            { message.text }
          </h5>
        }
        <div className="flex flex-col gap-8">
          {
            planes.map((item, index) => {
              const {
                plan,
                extraPlan,
                data,
                promo,
                price,
                details,
                regular,
              } = item;

              return (
                <Card 
                  key={ index }
                  promo={ promo }
                  price={ price }
                  regular={ regular }
                  plan={ plan }
                  extraPlan={ extraPlan }
                  data={ data }
                  details={ details }
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Item