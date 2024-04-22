import type { CSSProperties } from "react";
import BannerDesktop1 from "../../../public/img/Hogar-banner-1.webp";
import BannerDesktop2 from "../../../public/img/Hogar-banner-2.webp";
import BannerDesktop3 from "../../../public/img/Hogar-banner-3.webp";
import BannerDesktop4 from "../../../public/img/Hogar-banner-4.webp";
import BannerMobile1 from "../../../public/img/Hogar-banner-mobile-1.webp";
import BannerMobile2 from "../../../public/img/Hogar-banner-mobile-2.webp";
import BannerMobile3 from "../../../public/img/Hogar-banner-mobile-3.webp";
import BannerMobile4 from "../../../public/img/Hogar-banner-mobile-4.webp";
import Carousel from "../Carousel/Carousel";
import { Form } from "../Form";
import icon from '../../../public/img/home.svg'
import { Selecteplan } from "../Items/Selecteplan";

const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 3;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {};
const STYLES_DESKTOP: CSSProperties = {};

const imagesMobile = [
  `${BannerMobile1.src}`,
  `${BannerMobile2.src}`,
  `${BannerMobile3.src}`,
  `${BannerMobile4.src}`,
];

const imagesDesktop = [
  `${BannerDesktop1.src}`,
  `${BannerDesktop2.src}`,
  `${BannerDesktop3.src}`,
  `${BannerDesktop4.src}`,
];

// const ItemsPlanes: ItemsArray = [
//   {
//     title: 'INTERNET HFC / FTTH',
//     message: {
//       strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
//       text: '',
//       strong2: '(Sujeto a evaluación crediticia)'
//     },
//     planes: [
//       {
//         plan: '1 PLAY',
//         extraPlan: <span>150 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '65',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '150 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '300 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           }
//         ]
//       },
//       {
//         plan: '1 PLAY',
//         extraPlan: <span>250 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '75',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '250 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           }
//         ]
//       },
//       {
//         plan: '1PLAY',
//         extraPlan: <span>400 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '85',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '400 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '800 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           }
//         ]
//       },
//       {
//         plan: '1 PLAY',
//         extraPlan: <span>600 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '100',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '600 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           }
//         ]
//       },
//       {
//         plan: '1 PLAY',
//         extraPlan: <span>1000 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '65',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           }
//         ]
//       }, 
//       {
//         plan: '1 PLAY',
//         extraPlan: <span>1500 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '200',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           }
//         ]
//       }
//     ]
//   },
//   {
//     title: 'INTERNET + TELEFONÍA',
//     message: {
//       strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
//       text: '',
//       strong2: '(Sujeto a evaluación crediticia)'
//     },
//     planes: [
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>150 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '70',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '150 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '300 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>250 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '80',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '250 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>400 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '90',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '400 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '800 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>600 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '105',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '600 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>1000 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '150',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>1500 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '205',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//     ]
//   },
//   {
//     title: 'INTERNET + TELEVISIÓN',
//     message: {
//       strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
//       text: '',
//       strong2: '(Sujeto a evaluación crediticia)'
//     },
//     planes: [
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>150 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '125',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '150 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '300 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>250 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '135',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '250 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>150 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '145',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '400 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '800 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>600 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '160',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '600 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>1000 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '205',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '2 PLAY',
//         extraPlan: <span>1500 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '260',
//         noHeader: false,
//         regular: '',
//         data: [
//           {
//             strong: '1500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//     ]
//   },
//   {
//     title: 'INTERNET + TELEFONÍA + TV',
//     message: {
//       strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
//       text: '',
//       strong2: '(Sujeto a evaluación crediticia)'
//     },
//     planes: [
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>150 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '135',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '150 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '300 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>250 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '145',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '250 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>400 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '150',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '400 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '800 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>600 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '165',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '600 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida con Full Claro',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           }
//         ]
//       },
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>1000 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '210',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '1000 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//       {
//         plan: '3 PLAY',
//         extraPlan: <span>1500 MBPS</span>,
//         promo: 'Precio Regular',
//         price: '265',
//         noHeader: false,
//         regular: '',
//         tabble:true,
//         data: [
//           {
//             strong: '1500 Mbps',
//             description: 'Velocidad máxima de Bajada/Subida',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           },
//           {
//             strong: 'MINUTOS ILIMITADOS a fijos y móviles de Claro Perú',
//             description: ' + 1000 MINUTOS para llamar a teléfonos fijos y móviles de otros operadores a nivel nacional.',
//           },
//           {
//             strong: 'Claro TV Avanzado',
//             description: 'Incluye 111 canales en HD.',
//           }
//         ]
//       },
//     ]
//   },
 

// ];

export default function HomeHogar() {
  return (
    <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">
      <Carousel
        classNameSlide="embla__slide"
        slides={SLIDES}
        images={imagesMobile}
        options={OPTIONS}
        haveButtons={true}
        haveDots={true}
        styles={STYLES_MOBILE}
        className="mobile"
        interval={5000}
      />
      <Carousel
        classNameSlide="embla__slide"
        slides={SLIDES}
        images={imagesDesktop}
        options={OPTIONS}
        haveButtons={true}
        haveDots={true}
        styles={STYLES_DESKTOP}
        className="desktop"
        interval={5000}
      />
      <Form modal={true}
        className="bg-white absolute max-lg:relative"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white "
      >
        <div className='w-full flex flex-col text-center text-[#EF3829] justify-center items-center'>
          <span className='text-[18px] font-bold'> DESCUBRE NUESTROS SERVICIOS MÓVILES </span>
          <span className='text-[25px] max-lg:text-[20px]'> ¡Consulta por la promoción en PORTABILIDAD que tenemos para ti! </span>
        </div>
      </Form>
      <h3 className="text-[18px] text-center text-gray-500 font-bold my-[30px]">Todas las Ofertas y Promociones vigentes hasta el 30/04/2024 </h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <img className="w-[50px] mx-4" src={icon.src} alt="icon" />
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      {/* <Items
        arrayItems={ItemsPlanes}
      /> */}
      <Selecteplan/>
    </section>
  )
}
