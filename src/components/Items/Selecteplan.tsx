import { useState } from "react";
import { Card } from "./Card";
import SocialMedia1 from '../../../public/img/redesSociales.png'
import SocialMedia2 from '../../../public/img/redesSociales2.png'
import './../Global.css'

export const Selecteplan = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index :any) => {
      setToggleState(index);
    };
    const INTERNET=[
      {
        plan: '1 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '65',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '150 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          }
        ]
      },
      {
        plan: '1 PLAY',
        extraPlan: <span>300 MBPS</span>,
        promo: 'Precio Regular',
        price: '75',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          }
        ]
      },
      {
        plan: '1PLAY',
        extraPlan: <span>400 MBPS</span>,
        promo: 'Precio Regular',
        price: '85',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '400 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '800 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          }
        ]
      },
      {
        plan: '1 PLAY',
        extraPlan: <span>600 MBPS</span>,
        promo: 'Precio Regular',
        price: '100',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          }
        ]
      },
      {
        plan: '1 PLAY',
        extraPlan: <span>1000 MBPS</span>,
        promo: 'Precio Regular',
        price: '65',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          }
        ]
      }, 
      {
        plan: '1 PLAY',
        extraPlan: <span>1500 MBPS</span>,
        promo: 'Precio Regular',
        price: '200',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1500 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          }
        ]
      }
    ]
    const INTERNET_TELEFONIA=[
      {
        plan: '2 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '66',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '150 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>300 MBPS</span>,
        promo: 'Precio Regular',
        price: '76',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>400 MBPS</span>,
        promo: 'Precio Regular',
        price: '86',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '400 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '800 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>600 MBPS</span>,
        promo: 'Precio Regular',
        price: '101',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>1000 MBPS</span>,
        promo: 'Precio Regular',
        price: '146',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>1500 MBPS</span>,
        promo: 'Precio Regular',
        price: '201',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1500 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
    ]    
    const INTERNET_TELEVISION=[
      {
        plan: '2 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '125',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '150 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>300 MBPS</span>,
        promo: 'Precio Regular',
        price: '135',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '145',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '400 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '800 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>600 MBPS</span>,
        promo: 'Precio Regular',
        price: '160',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>1000 MBPS</span>,
        promo: 'Precio Regular',
        price: '205',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '2 PLAY',
        extraPlan: <span>1500 MBPS</span>,
        promo: 'Precio Regular',
        price: '260',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '1500 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
    ]  
    const INTERNET_TELEVISION_TELEFONIA=[
      {
        plan: '3 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '131',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '150 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '3 PLAY',
        extraPlan: <span>300 MBPS</span>,
        promo: 'Precio Regular',
        price: '141',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '300 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '3 PLAY',
        extraPlan: <span>400 MBPS</span>,
        promo: 'Precio Regular',
        price: '146',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '400 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '800 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '3 PLAY',
        extraPlan: <span>600 MBPS</span>,
        promo: 'Precio Regular',
        price: '161',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '600 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          }
        ]
      },
      {
        plan: '3 PLAY',
        extraPlan: <span>1000 MBPS</span>,
        promo: 'Precio Regular',
        price: '206',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '1000 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
      {
        plan: '3 PLAY',
        extraPlan: <span>1500 MBPS</span>,
        promo: 'Precio Regular',
        price: '261',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '1500 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          },
          {
            strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
            description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
          },
          {
            strong: 'Claro TV Avanzado',
            description: 'Incluye 111 canales en HD.',
          }
        ]
      },
    ]  
  return (
<div className="w-full flex justify-center items-center flex-col">
<div className={`h-[70px] w-[65%] font-normal text-2xl flex flex-wrap justify-center text-[#1F97AE]`}>
        <span className={`w-[400px] h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===1?'text-[#EF3829]':''}`} onClick={() => toggleTab(1)}>
        INTERNET HFC / FTTH
        <div className={`${toggleState===1?'underline-active':'underliner'}`}></div>
        </span>
        <span className={`w-[400px] h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===2?'text-[#EF3829]':''}`} onClick={() => toggleTab(2)}>
        INTERNET + TELEFONÍA
        <div className={` ${toggleState===2?'underline-active':'underliner'}`}></div>
        </span>
        <span className={`w-[400px] h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===3?'text-[#EF3829]':''}`} onClick={() => toggleTab(3)}>
        INTERNET + TELEVISIÓN
        <div className={` ${toggleState===3?'underline-active':'underliner'}`}></div>
        </span>
        <span className={`w-[400px] h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===4?'text-[#EF3829]':''}`} onClick={() => toggleTab(4)}>
        INTERNET + TELEFONÍA + TV
        <div className={` ${toggleState===4?'underline-active':'underliner'}`}></div>
        </span>
    </div>
    <div className="flex justify-center w-full mt-[100px] mb-[40px] text-[20px] text-gray-600 text-center max-xl:mt-[250px] max-xl:mb-[40px] ">¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional
<br />(Sujeto a evaluación crediticia)</div>
    <div className="w-full flex justify-center">
        <div className={toggleState===1?'Active-Planes-Swiper':'Planes-Swiper'}>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {INTERNET.map((item,index)=>{
                const{
                  plan,
                  noHeader,
                  extraPlan,
                  data,
                  promo,
                  price,
                  regular,
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        regular={regular}
                        />
                    </div>
                )})}
            </div>
        </div>
        <div className={toggleState===2?'Active-Planes-Swiper':'Planes-Swiper'}>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {INTERNET_TELEFONIA.map((item,index)=>{
                const{
                  plan,
                  noHeader,
                  extraPlan,
                  data,
                  promo,
                  price,
                  regular,
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        regular={regular}
                        />
                    </div>
                )})}
            </div>
        </div>
        <div className={toggleState===3?'Active-Planes-Swiper':'Planes-Swiper'}>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {INTERNET_TELEVISION.map((item,index)=>{
                const{
                  plan,
                  noHeader,
                  extraPlan,
                  data,
                  promo,
                  price,
                  regular,
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        regular={regular}
                        />
                    </div>
                )})}
            </div>
        </div>
        <div className={toggleState===4?'Active-Planes-Swiper':'Planes-Swiper'}>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {INTERNET_TELEVISION_TELEFONIA.map((item,index)=>{
                const{
                  plan,
                  noHeader,
                  extraPlan,
                  data,
                  promo,
                  price,
                  regular,
                  tabble
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        regular={regular}
                        tabble={tabble}
                        />
                    </div>
                )})}
            </div>
        </div>
    </div>
</div>

  

  )
}

export const SelecteplanMobil = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index :any) => {
      setToggleState(index);
    };
    const PLANES_MAX=[
      {
        plan: 'Max',
        extraPlan: <span>25 GB</span>,
        promo: 'Costo Mensual',
        price: '39.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '37.5 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: '350 minutos',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Minutos y SMS Nacionales',
          }, {
            strong: 'Redes Sociales Ilimitadas',
            description: <div className="w-full h-auto">
              <img
                src={`${SocialMedia1.src}`}
                alt={'Redes Sociales Ilimitadas'}
                className="w-[180px] h-auto object-cover mt-3"
              />
            </div>,
          },
        ]
      },
      {
        plan: 'Max',
        extraPlan: <span>35 GB</span>,
        promo: 'Costo Mensual',
        price: '49.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '52.5 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: '400 minutos',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Minutos y SMS Nacionales',
          }, {
            strong: 'Redes Sociales Ilimitadas',
            description: <div className="w-full h-auto">
              <img
                src={`${SocialMedia2.src}`}
                alt={'Redes Sociales Ilimitadas'}
                className="w-[180px] h-auto object-cover mt-3"
              />
            </div>,
          },
        ]
      },
      {
        plan: 'Max',
        extraPlan: <span>65 GB</span>,
        promo: 'Precio Regular',
        price: '55.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '97.5 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Minutos y SMS Nacionales + Llamadas Internacionales',
          }, {
            strong: 'Redes Sociales Ilimitadas',
            description: <div className="w-full h-auto">
              <img
                src={`${SocialMedia2.src}`}
                alt={'Redes Sociales Ilimitadas'}
                className="w-[180px] h-auto object-cover mt-3"
              />
            </div>,
          },
        ]
      },
      {
        plan: 'Max',
        extraPlan: <span>95 GB</span>,
        promo: 'Costo Mensual',
        price: '69.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '142.5 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      },
      {
        plan: 'Max',
        extraPlan: <span>105 GB</span>,
        promo: 'Costo Mensual',
        price: '79.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '157.5 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      }, {
        plan: 'Max',
        extraPlan: <span>130 GB</span>,
        promo: 'Costo Mensual',
        price: '95.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '195 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      }, {
        plan: 'Max',
        extraPlan: <span>140 GB</span>,
        promo: 'Costo Mensual',
        price: '109.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '210 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      }, {
        plan: 'Max',
        extraPlan: <span>160 GB</span>,
        promo: 'Costo Mensual',
        price: '159.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '240 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      }, {
        plan: 'Max',
        extraPlan: <span>180 GB</span>,
        promo: 'Costo Mensual',
        price: '189.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '270 GB',
            description: 'Gigas en alta velocidad con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas + Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      }, {
        plan: 'Max',
        extraPlan: <span>190 GB</span>,
        promo: 'Costo Mensual',
        price: '289.90',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '285 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: 'Ilimitados',
            description: 'Minutos Internacionales',
          },
          {
            strong: 'ILIMITADO',
            description: 'Minutos + SMS Nacionales y Llamadas Internacionales',
          }
        ]
      },
    ]
    const PLANES_NETFLIX=[
      {
        plan: 'Plan Max Play 95 con Netflix',
        extraPlan: <span>70 GB</span>,
        promo: 'Costo Mensual',
        noHeader: false,
        price: '95',
        data: [
          {
            strong: '105 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: 'Netflix',
            description: '2 Pantallas HD',
          },
          {
            strong: 'Cobertura internacional',
            description: '300 minutos, 3GB DE internet y 300 SMS',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas, Minutos Nacionales y SMS',
          }
        ]
      },
      {
        plan: 'Plan Max Play 115 con Netflix',
        extraPlan: <span>100 GB</span>,
        promo: 'Costo Mensual',
        noHeader: false,
        price: '115',
        data: [
          {
            strong: '150  GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: 'Netflix',
            description: '4 Pantallas HD, Ultra HD o 4K',
          },
          {
            strong: 'Cobertura internacional',
            description: '350 minutos, 3.5GB DE internet y 350 SMS',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas, Minutos Nacionales y SMS',
          }
        ]
      },
      {
        plan: 'Plan Max Play 145 con Netflix',
        extraPlan: <span>145 GB</span>,
        promo: 'Costo Mensual',
        noHeader: false,
        price: '145',
        data: [
          {
            strong: '217.5 GB',
            description: 'Gigas con Full Claro',
          },
          {
            strong: 'Netflix',
            description: '4 Pantallas HD, Ultra HD o 4K',
          },
          {
            strong: 'Cobertura internacional',
            description: '450 minutos, 10GB DE internet y 450 SMS',
          },
          {
            strong: 'ILIMITADO',
            description: 'Gigas, Minutos Nacionales y SMS',
          }
        ]
      }
    ] 
  return (
<div className="w-full flex justify-center items-center flex-col">
<div className='h-[50px] w-[800px] font-normal text-2xl flex justify-center max-lg:w-full max-lg:text-xl max-lg:flex-col max-lg:my-2 text-[#1F97AE]'>
        <span className={`w-full h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===1?'text-[#EF3829]':''}`} onClick={() => toggleTab(1)}>
            PLANES MAX
        <div className={` ${toggleState===1?'underline-active':'underliner'}`}></div>
        </span>
        <span className={`w-full h-full flex items-center justify-center cursor-pointer relative text-[17px] border-b border-gray-600 transition-all duration-300 hover:text-[#EF3829] ${toggleState===2?'text-[#EF3829]':''}`} onClick={() => toggleTab(2)}>
            PLANES MAX PLAY CON NETFLIX
        <div className={` ${toggleState===2?'underline-active':'underliner'}`}></div>
        </span>
    </div>
    <div className="w-full flex justify-center">
        <div className={toggleState===1?'Active-Planes-Swiper':'Planes-Swiper'}>
          <div className="flex justify-center w-full text-[20px] text-gray-600 text-center mt-[50px] mb-[40px]">Porta o adquiere dos o más líneas desde el Plan MAX 55.90 y obtén 50 % de descuento por 12 meses en todas las líneas adicionales con el menor cargo fijo.
<br />Válido para clientes nuevos y actuales</div>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {PLANES_MAX.map((item,index)=>{
                const{
                    promo,
                    price,
                    regular,
                    plan,
                    extraPlan,
                    data,
                    noHeader,
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        regular={ regular }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        />
                    </div>
                )})}
            </div>
        </div>
        <div className={toggleState===2?'Active-Planes-Swiper':'Planes-Swiper'}>
            <div className="flex flex-wrap justify-center gap-[50px]">
                {PLANES_NETFLIX.map((item,index)=>{
                const{
                    promo,
                    price,
                    plan,
                    extraPlan,
                    data,
                    noHeader,
                }=item;
                return(
                    <div className="">
                        <Card
                        key={ index }
                        promo={ promo }
                        price={ price }
                        plan={ plan }
                        extraPlan={ extraPlan }
                        data={ data }
                        noHeader={noHeader}
                        />
                    </div>
                )})}
            </div>
        </div>
    </div>
</div>

  

  )
}
