import type { EmblaOptionsType } from "embla-carousel-react";
import type { CSSProperties } from "react";
import BannerDesktop1 from "../../../public/img/banner-desktop-1.webp";
import BannerDesktop2 from "../../../public/img/banner-desktop-2.webp";
import BannerDesktop5 from "../../../public/img/banner-desktop-5.webp";
import BannerDesktop6 from "../../../public/img/banner-desktop-6.webp";
import BannerDesktop8 from "../../../public/img/banner-desktop-8.webp";
import BannerDesktop9 from "../../../public/img/banner-desktop-9.webp";
import BannerDesktop10 from "../../../public/img/banner-desktop-10.webp";
import BannerMobile1 from "../../../public/img/banner-mobile-1.webp";
import BannerMobile2 from "../../../public/img/banner-mobile-2.webp";
import BannerMobile5 from "../../../public/img/banner-mobile-5.webp";
import BannerMobile6 from "../../../public/img/banner-mobile-6.webp";
import BannerMobile8 from "../../../public/img/banner-mobile-8.webp";
import BannerMobile9 from "../../../public/img/banner-mobile-9.webp";
import BannerMobile10 from "../../../public/img/banner-mobile-10.webp";
import InternetTelefonia from "../../../public/img/internet-telefonia.webp";
import InternetTelevision from "../../../public/img/internet-television.webp";
import InternetTelefoniaTv from "../../../public/img/internet-telefonia-tv.webp";
import InternetHfcFtth from "../../../public/img/internet-hfc-ftth.webp";
import Internet from "../../../public/img/internet.webp";
import LogoNetflix from "../../../public/img/logo-netflix.webp";
import Carousel from "../Carousel/Carousel";
import {Form} from "../Form";
import Items from "../Items/Items";
import type { ItemsArray } from "../../interfaces/Items.props";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 7;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {};
const STYLES_DESKTOP: CSSProperties = {};

const imagesMobile = [
  `${BannerMobile1.src}`,
  `${BannerMobile8.src}`,
  `${BannerMobile5.src}`,
  `${BannerMobile6.src}`,
  `${BannerMobile2.src}`,
  `${BannerMobile9.src}`,
  `${BannerMobile10.src}`,
];

const imagesDesktop= [
  `${BannerDesktop1.src}`,
  `${BannerDesktop8.src}`,
  `${BannerDesktop5.src}`,
  `${BannerDesktop6.src}`,
  `${BannerDesktop2.src}`,
  `${BannerDesktop9.src}`,
  `${BannerDesktop10.src}`,
];

const ItemsPlanes: ItemsArray = [
  {
    title: 'internet hfc / ftth',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        promo: 'Precio por 6 Meses',
        price: '69',
        regular: 'Precio Regular S/79',
        plan: '1play',
        extraPlan:<span>100 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200Mbps'
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '79',
        regular: 'Precio Regular S/89',
        plan: '1play',
        extraPlan:<span>200 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400Mbps'
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '99',
        regular: 'Precio Regular S/129',
        plan: '1play',
        extraPlan: <span>300 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600Mbps'
          },
        ]
      },
      {
        promo: 'Precio',
        price: '199',
        plan: '1play',
        extraPlan:<span>500 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000Mbps'
          },
        ]
      },
      {
        promo: 'Precio',
        price: '399',
        plan: '1play',
        extraPlan:<span>1000 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000Mbps'
          },
        ]
      },
    ]
  },
  {
    title: 'internet + televisión',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        promo: 'Precio',
        price: '139',
        plan: '2play',
        extraPlan:<span>50 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '139',
        regular: 'Precio Regular S/159',
        plan: '2play',
        extraPlan: <span>100 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '149',
        regular: 'Precio Regular S/169',
        plan: '2play',
        extraPlan: <span>200 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '179',
        regular: 'Precio Regular S/209',
        plan: '2play',
        extraPlan: <span>300 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '249',
        regular: 'Precio Regular S/279',
        plan: '2play',
        extraPlan: <span>500 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '449',
        regular: 'Precio Regular S/479',
        plan: '2play',
        extraPlan: <span>1000 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
        ]
      },
    ]
  },
  {
    title: 'internet + telefonía + tv',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        promo: 'Precio',
        price: '149',
        plan: '3play',
        extraPlan: <span>50 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '50 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '100 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '149',
        regular: 'Precio Regular S/169',
        plan: '3play',
        extraPlan: <span>100 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '154',
        regular: 'Precio Regular S/174',
        plan: '3play 200 Mbps',
        extraPlan: <span>200 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '200 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '400 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '184',
        regular: 'Precio Regular S/214',
        plan: '3play',
        extraPlan: <span>300 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '300 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '600 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '254',
        regular: 'Precio Regular S/284',
        plan: '3play',
        extraPlan: <span>500 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '500 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
      {
        promo: 'Precio por 6 Meses',
        price: '454',
        regular: 'Precio Regular S/484',
        plan: '3play',
        extraPlan: <span>1000 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '1000 Mbps'
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
        ]
      },
    ]
  },
  {
    title: 'claro hogar + netflix',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '(Sujeto a evaluación crediticia)'
    },
    ifGrid: true,
    gridCols: 2,
    planes: [
      {
        promo: 'Precio por 3 Meses',
        price: '75.10',
        regular: 'Precio Regular S/110',
        plan: '2play',
        extraPlan: <span>100 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '100 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '200 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        promo: 'Precio por 3 Meses',
        price: '95.10',
        regular: 'Precio Regular S/130',
        plan: '2play',
        extraPlan: <span>180 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 80 min nivel nacional.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        promo: 'Precio por 3 Meses',
        price: '180.10',
        regular: 'Precio Regular S/215',
        plan: '3play',
        extraPlan: <span>180 Mbps</span>,
        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '180 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '360 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
      {
        promo: 'Precio por 3 Meses',
        price: '220.10',
        regular: 'Precio Regular S/255',
        plan: '3play',
        extraPlan: <span>280 Mbps</span>,

        data: [
          {
            description: 'Velocidad máxima de Bajada/Subida',
            strong: '280 Mbps'
          },
          {
            description: 'Velocidad máxima de Bajada/Subida con Full Claro',
            strong: '560 Mbps'
          },
          {
            description: 'Llamadas Ilimitadas a Teléfonos Fijos y Móviles de Claro + 100 min nivel nacional.',
          },
          {
            description: 'Incluye Claro TV Avanzado con 111 canales en HD.',
          },
          {
            description: 'Incluye NETFLIX Estándar con 2 Pantallas HD',
          },
        ]
      },
    ]
  },
  {
    title: 'internet fijo inalambrico',
    message: {
      strong: '',
      text: ''
    },
    planes: [
      {
        promo: 'Precio por 2 Meses',
        price: '42.50',
        regular: 'Precio Regular S/85',
        plan: 'internet ifi-100gb',
        data: [
          {
            description: 'Gigas en Alta Velocidad',
            strong: '100GB'
          },
          {
            description: 'Una vez consumidos los 100 GB, podrás adquirir un paquete adicional para seguir navegando.',
          },
          {
            description: 'Paquete IFI 25GB',
            strong: 'Precio S/5.00'
          },
          {
            description: 'Modelo Equipo',
            strong: 'ZTE MF286'
          },
          {
            description: 'Pago Único del Equipo (Incluye chip)',
            strong: 'S/ 399'
          },
          {
            description: 'Conéctalo, hasta en 5 dispositivos en simultáneo',
          },
          {
            description: 'Incluye',
            strong: 'Claroclub'
          },
          {
            description: 'Beneficios del Equipo',
            strong: <ul>
              <li>No Necesita Instalacion</li>
              <li>Inluye WIFI</li>
              <li>Tecnología Inalambrica</li>
              <li>Equipo de Calidad</li>
              <li>Servicio Postventa</li>
            </ul>
          },
        ]
      },
    ]
  },
];

export default function HomeFija() {
  return (
    <section className="relative flex flex-col items-center gap-2 min-h-[1000px]">
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesMobile }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_MOBILE }
        className="mobile"
        interval={ 5000 }
      />
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesDesktop }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_DESKTOP }
        className="desktop"
        interval={ 5000 }
      />
      <Form
        className="bg-white lg:absolute lg:right-20 xl:top-20"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white "
      >
      <div className='w-full flex flex-col text-center text-[#EF3829]'>
            <span className='text-[16px] font-bold'> DESCUBRE NUESTROS SERVICIOS MÓVILES </span>
            <span className='text-2xl'> ¡Consulta por la promoción en PORTABILIDAD que tenemos para ti! </span>
      </div>
      </Form>
      <h1 className="text-3xl text-center text-[#ee122c] font-bold uppercase my-8">conoce nuestros planes hogar</h1>
      <h3 className="text-sm text-center text-gray-500 font-bold">Todas las Ofertas y Promociones vigentes hasta el 07/02/2024 </h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <i className="fa-solid fa-house text-3xl text-[#ee1222]"></i>
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <Items
        arrayItems={ ItemsPlanes }
      />
    </section>
  )
}
