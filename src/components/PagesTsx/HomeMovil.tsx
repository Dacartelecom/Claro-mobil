import type { EmblaOptionsType } from "embla-carousel-react";
import type { CSSProperties } from "react";

import PlanesMax from "../../../public/img/maxplay.webp";
import PlanesNetflix from "../../../public/img/maxnet.webp";
import BannerDesktop2 from "../../../public/img/moviles-banner-desktop-2.webp";
import BannerDesktop3 from "../../../public/img/moviles-banner-desktop-3.webp";
import BannerDesktop4 from "../../../public/img/moviles-banner-desktop-4.webp";
import BannerDesktop5 from "../../../public/img/moviles-banner-desktop-5.webp";
import BannerDesktop6 from "../../../public/img/moviles-banner-desktop-6.webp";
import BannerMobile2 from "../../../public/img/moviles-banner-mobile-2.webp";
import BannerMobile3 from "../../../public/img/moviles-banner-mobile-3.webp";
import BannerMobile4 from "../../../public/img/moviles-banner-mobile-4.webp";
import BannerMobile5 from "../../../public/img/moviles-banner-mobile-5.webp";
import BannerMobile6 from "../../../public/img/moviles-banner-mobile-6.webp";
import SocialMedia1 from "../../../public/img/social-media-1.webp";
import SocialMedia2 from "../../../public/img/social-media-2.webp";
import MotorolaG23 from "../../../public/img/motorola-g23.webp";
import XiaomiNote12 from "../../../public/img/xiaomi-note12.webp";
import Iphone14 from "../../../public/img/iphone-14.webp";
import SamsungGalaxyS23 from "../../../public/img/samsung-galaxy-s23.webp";
import OppoReno7 from "../../../public/img/oppo-reno7.webp";
import OppoA78 from "../../../public/img/oppo-a78.webp";
import MotorolaE30 from "../../../public/img/motorola-e30.webp";
import Carousel from "../Carousel/Carousel";
import Items from "../Items/Items"; 
import type { ItemsArray } from "../../interfaces/Items.props";
import Form from "../Form/Form";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT= 5;
const SLIDES: number[] = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE: CSSProperties = {
  height: '640px'
};
const STYLES_DESKTOP: CSSProperties = {
  aspectRatio: 3.095
};

const imagesMobile = [
  `${BannerMobile2.src}`,
  `${BannerMobile3.src}`,
  `${BannerMobile4.src}`,
  `${BannerMobile5.src}`,
  `${BannerMobile6.src}`,
];

const imagesDesktop = [
  `${BannerDesktop2.src}`,
  `${BannerDesktop3.src}`,
  `${BannerDesktop4.src}`,
  `${BannerDesktop5.src}`,
  `${BannerDesktop6.src}`,
];

const ItemsPlanes: ItemsArray = [
  {
    title: 'planes max',
    message: {
      strong: 'Porta o adquiere dos o más líneas desde el Plan MAX 55.90 y obtén 50 % de descuento por 12 meses en todas las líneas adicionales con el menor cargo fijo.',
      strong2:'Válido para clientes nuevos y actuales',
      text: ''
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '39.90',
        plan: 'ilimitado',
        plan2: 'Minutos y SMS Nacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'Gigas del plan',
            strong: '25 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '37.5 GB'
          }, {
            description: 'Minutos Internacionales',
            strong: '350 minutos'
          },
          {
            description: 'Redes Sociales Ilimitadas.',
            strong: <div className="w-full h-auto">
              <img
                src={ `${SocialMedia1.src}` }
                alt={ 'Redes Sociales Ilimitadas' }
                width={ 438 }
                height={ 212 }
                className="w-full h-auto object-cover"
              />
            </div>
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '49.90',
        plan: 'ilimitado',
        plan2: 'Minutos y SMS Nacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'Gigas del plan',
            strong: '35 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '52.5 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Minutos Internacionales',
            strong: '400 minutos'
          },
          {
            description: 'Redes Sociales Ilimitadas',
            strong: <div className="w-full h-auto">
              <img
                src={ `${SocialMedia2.src}` }
                alt={ 'Redes Sociales Ilimitadas' }
                width={ 128 }
                height={ 50 }
                className="w-full h-auto object-cover"
              />
            </div>
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '55.90',
        plan: 'ilimitado',
        plan2: 'Minutos + SMS Nacionales y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'Gigas del plan',
            strong: '65 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '97.5 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Redes Sociales Ilimitadas',
            strong: <div className="w-full h-auto">
              <img
                src={ `${SocialMedia2.src}` }
                alt={ 'Redes Sociales Ilimitadas' }
                width={ 128 }
                height={ 50 }
                className="w-full h-auto object-cover"
              />
            </div>
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '69.90',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '95 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '142.5 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '79.90',
        plan: 'Ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '105 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '157.5 GB'
          }, {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '95.90',
        plan: 'Ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '130 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '195 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '109.90',
        plan: 'Ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '140 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '210 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '159.90',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '160 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '240 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '189.90',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '180 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '270 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesMax.src,
        alt: "Internet hfc/ftth",
        width: 70,
        height: 29,
        promo: 'Costo Mensual',
        price: '289.90',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos, SMS y Llamadas Internacionales',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div> ,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '190 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '285 GB'
          },
          {
            description: 'Llamadas y SMS',
            strong: 'Ilimitados'
          },
          {
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad según lo indicado en el plan.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Paramount+: Tienes una suscripción gratuita de 24 meses dentro de Claro video.</li>
            <li>-Claro música: Regístrate a Claro música gratuito y disfruta GRATIS de la música de tus artistas favoritos.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
    ]
  },
  {
    title: 'planes max play con netflix',
    message: {
      strong: '',
      strong2:'',
      text: ''
    },
    planes: [
      {
        className: 'lg:basis-1/3',
        src: PlanesNetflix.src,
        alt: "Internet hfc/ftth",
        width: 200,
        height: 50,
        promo: 'Costo Mensual',
        price: '95',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos Nacionales y SMS',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div>,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '55 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '82.5 GB'
          }, {
            description: 'Llamadas y SMS',
            strong: 'ilimitados'
          },{
            description: 'Netflix',
            strong: '2 Pantallas HD'
          }
          ,{
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesNetflix.src,
        alt: "Internet hfc/ftth",
        width: 200,
        height: 50,
        promo: 'Costo Mensual',
        price: '115',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos Nacionales y SMS',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div>,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '100 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '150 GB'
          }, {
            description: 'Llamadas y SMS',
            strong: 'ilimitados'
          },{
            description: 'Netflix',
            strong: '4 Pantallas HD, Ultra HD o 4K'
          }
          ,{
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      {
        className: 'lg:basis-1/3',
        src: PlanesNetflix.src,
        alt: "Internet hfc/ftth",
        width: 200,
        height: 50,
        promo: 'Costo Mensual',
        price: '145',
        plan: 'ilimitado',
        plan2: 'Gigas, Minutos Nacionales y SMS',
        classNamePlan: 'text-xl mb-2',
        extraPlan:<div className="flex flex-col items-center justify-center gap-2">
          <span className="text-[#ee122c] font-bold uppercase"></span>
          <span className="text-gray-500 font-bold uppercase"></span>
        </div>,
        data: [
          {
            description: 'GB en alta velocidad',
            strong: '145 GB'
          },
          {
            description: 'Gigas con Full Claro',
            strong: '217.5 GB'
          }, {
            description: 'Llamadas y SMS',
            strong: 'ilimitados'
          },{
            description: 'Netflix',
            strong: '4 Pantallas HD, Ultra HD o 4K'
          }
          ,{
            description: 'Beneficios adicionales',
            strong: <ul>
              <li><span className="text-[#FF0000]">claro</span>video</li>
              <li><span className="text-[#FF0000]">claro</span>club</li>
              <li><span className="text-[#FF0000]">claro</span>música</li>
              <li><span className="text-[#FF0000]">claro</span>drive</li>
            </ul>,
          },
        ],
        details: <>
          <h6 className="text-3xl text-start font-bold w-full mb-4">Informacion</h6>
          <ul className="text-justify text-gray-500 [&>li]:mb-1">
            <li>-GIGAS para navegar en alta velocidad.</li>
            <li>-Datos ilimitados a nivel nacional: Los GIGAS de tu plan te sirven para navegar en alta velocidad. ¿Y si se acaban? Podrás seguir navegando solo que a una velocidad menor: la velocidad mínima de descarga será de 0.256Mbps en 3G, 4G y 4.5G.</li>
            <li>-Llamadas y SMS ilimitados a cualquier destino nacional.</li>
            <li>-Minutos ilimitados a destinos internacionales (LDI3): móviles y fijos en EE.UU. (incluye Hawai y Alaska), Canadá, Puerto Rico, Chile y México así como fijos de Alemania y China.</li>
            <li>-Cobertura internacional: Usa parte de tu plan Max en 14 países de Latinoamérica, 16 de Europa y Estados Unidos (términos y condiciones aplican). Y ahora, usa el total de los gigas, minutos y sms de tu plan Max en Ecuador, Bolivia y Colombia.</li>
            <li>-Claro video: Tienes una suscripción gratuita de 24 meses en sección catálogo.</li>
            <li>-Claro club: Eres parte del programa de beneficios de Claro.</li>
            <li>-Claro drive: Cuentas con 25 GB de almacenamiento gratuito.</li>
          </ul>
        </>
      },
      
    ]
  },
  {
    title: 'planes + equipo',
    message: {
      strong: '',
      strong2:'',
      text: ''
    },
    planes: [

      /*----Iphone 14----*/
      {

        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: Iphone14.src,
        alt: "Iphone 14",
        width: 364,
        height: 479,
        promo: '',
        price: '0',
        plan: 'IPHONE 14',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              146,7 mm x 71,5 mm x 7,6mm<br/>
              173g
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              OLED Retina 6.1"<br/>
              2.532 x 1.170 píxeles, Super Retina XDR, 19.5:9<br/>
              460ppp<br/>
              True-tone, 60 Hz
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Apple A15</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">128 / 256 / 512 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">6 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">12MP, f/1,9, TOF 3D, slow-motion, AF</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              Principal: 12MP, f/1.6, OIS, QuadLED flash<br/>
              Secundaria gran angular: 12MP, f/2.4<br/>
              Vídeo: 4K Dolby Vision, 1080p/240fps, HDR, modo cinemático
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">
              Carga rápida 18W e inalámbrica MagSafe 15W<br/>
              Conexión Lightning
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">IOS 16</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">WiFi 6, 5G, BT 5.2, NFC, GPS, dualSIM, eSIM, altavoces estéreo Dolby Atmos, reconocimiento facial, resistencia al agua IP68</span>
          </li>
        </ul>
      },

      /*----Samsung Galaxy S23----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: SamsungGalaxyS23.src,
        alt: "Samsung Galaxy S23",
        width: 271,
        height: 357,
        promo: '',
        price: '0',
        plan: 'SAMSUNG GALAXY S23',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              146,3 x 70,9 x 7,6 mm<br/>
              168 gramos
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              Panel Dynamic AMOLED 2X de 6,1 pulgadas<br/>
              Refresco de 48 a 120 Hz<br/>
              Resolución FHD+ de 2.340 x 1.080 píxeles<br/>
              Brillo pico de 1.750 nits<br/>
              Always-on Display
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Snapdragon 8 Gen 2 for Samsung</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">
              128 GB UFS 3.1<br/>
              256 o 512 GB UFS 4.0
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">8 GB LPDDR5X</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">12 Mpx f/2.2</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              Principal de 50 Mpx f/1.8 OIS<br/>
              Telefoto de 10 Mpx f/2.4 OIS 3x<br/>
              Gran angular de 12 Mpx f/2.2
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">
              3.900 mAh<br/>
              Carga de 25 W (cargador no incluido)<br/>
              Carga inalámbrica de 15 W<br/>
              Carga inalámbrica inversa de 4,5 W
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">Android 13 + One UI 5.1</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Conectividad:</span>
            <span className="text-sm text-end">
              5G<br/>
              Wi-Fi 6E<br/>
              Bluetooth 5.3<br/>
              NFC
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">
              Sensor de huella ultrasónico en pantalla<br/>
              Certificación IP68<br/>
              Pantalla Gorilla Glass Victus 2<br/>
              Sonido Dolby Atmos estéreo<br/>
            </span>
          </li>
        </ul>
      },

      /*----Xiaomi Note 12----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: XiaomiNote12.src,
        alt: "Xiaomi Note 12",
        width: 434,
        height: 575,
        promo: '',
        price: '0',
        plan: 'XIAOMI NOTE 12',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              165.88mm x 76.21mm x 7.98mm<br/>
              189g
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              6,67 pulgadas<br/>
              AMOLED<br/>
              120 Hz<br/>
              Hasta 1.200 nits<br/>
              240 hz de refresco táctil
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Qualcomm Snapdragon 685</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Memorias:</span>
            <span className="text-sm text-end">
              4 + 64 GB<br/>
              4 + 128 GB
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">13 Mpx</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              48MP cámara principal<br/>
              8MP cámara gran angular<br/>
              2MP cámara macro
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">5.000mAh + 33WW</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">
              Android 12<br/>
              MIUI 14
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Conectividad:</span>
            <span className="text-sm text-end">
              4G<br/>
              WiFi AC<br/>
              Bluetooth<br/>
              GPS<br/>
              NFC<br/>
              Conector de auriculares<br/>
              USB C
            </span>
          </li>
        </ul>
      },

      /*----Motorola G23----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: MotorolaG23.src,
        alt: "Motorola G23",
        width: 303,
        height: 368,
        promo: '',
        price: '0',
        plan: 'MOTOROLA G23',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              162,7 x 74,66 x 8,19 mm
              <br/>
              184,25 gramos
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              LCD de 6,5 pulgadas<br/>
              Resolución HD+ de 1.600 x 720p<br/>
              90 Hz de tasa de refresco<br/>
              576 Hz de tasa de muestreo<br/>
              Brillo de hasta 400 nits<br/>
              Panda Glass
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">
              MediaTek Helio G85<br/>
              CPU de 8 núcleos de 2,0 GHz<br/>
              GPU Arm Mali-G52 MC2
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">8 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">
              128 GB<br/>
              Hasta 512 GB con tarjeta microSD
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">16 Mpx f/2,45</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              Principal: 50 Mpx f/1,8<br/>
              Gran angular: 5 Mpx f/2,2<br/>
              Sensor de profundidad: 2 Mpx f/2,4
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">
              5.000 mAh<br/>
              Carga rápida de hasta 30 W
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">Android 13</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Conectividad:</span>
            <span className="text-sm text-end">
              4G<br/>
              WiFi 802.11 a/b/g/n/ac<br/>
              Bluetooth 5.1<br/>
              NFC<br/>
              Dual SIM<br/>
              Jack de 3,5 mm para auriculares<br/>
              USB-C (USB 2.0)
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">
              Lector de huellas en el lateral<br/>
              Certificación IP52 frente al agua y al polvo<br/>
              Doble altavoz con Dolby Atmos
            </span>
          </li>
        </ul>
      },

      /*----Oppo Reno 7----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: OppoReno7.src,
        alt: "Oppo Reno 7",
        width: 389,
        height: 563,
        promo: '',
        price: '0',
        plan: 'OPPO RENO 7',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              159.9 x 73.2 x 7.49 mm<br/>
              175 gramos
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              AMOLED de 6.43 pulgadas<br/>
              Resolución FullHD+, 2400 x 1080 pixeles<br/>
              Tasa de refresco de 90 Hz
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Qualcomm Snapdragon 680</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">128 GB UFS 2.2, expandible con microSD</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">6 GB LPDDR4x</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">Sony IMX709 de 32 megapixeles f/2.4</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              64 megapixeles f/1.7 principal<br/>
              2 megapixeles f/3.3 microscópica<br/>
              2 megapixeles f/2.4 monocromática
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">4,500 mAh con carga SuperVOOC de 33W</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">ColorOS 12.1 basado en Android 11</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">
              Sensor de huellas en pantalla<br/>
              Conectividad 4G<br/>
              Bluetooth 5.1<br/>
              Jack 3.5 mm de audio<br/>
              Soporte de audio inalámbrico de alta calidad<br/>
              con códecs AptX HD y LDAC<br/>
            </span>
          </li>
        </ul>
      },

      /*----Oppo A78----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: OppoA78.src,
        alt: "Oppo A78",
        width: 433,
        height: 576,
        promo: '',
        price: '0',
        plan: 'OPPO A78',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              163,8 x 75,1 x 7,99 mm<br/>
              188 g.
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              LCD 6,56"<br/>
              HD+<br/>
              90 Hz<br/>
              90 Hz táctil
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Dimensity 700</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">128 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">8 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">8 MP f/2.0</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              50 MP f/1.8<br/>
              2 MP f/2.4 bokeh
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">
              5.000 mAh<br/>
              Carga rápida 33W
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">ColorOS 12.1 basado en Android 11</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Conectividad:</span>
            <span className="text-sm text-end">
              5G<br/>
              Wi-Fi ac<br/>
              Bluetooth 5.3<br/>
              NFC<br/>
              USB-C<br/>
              Minijack
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">
              Lector de huellas lateral<br/>
              Altavoces estéreo<br/>
              IPX4
            </span>
          </li>
        </ul>
      },
      
      /*----Motorola E30----*/
      {
        className: 'lg:basis-1/3',
        noHeader: true,
        mobileFooter: true,
        src: MotorolaE30.src,
        alt: "Motorola E30",
        width: 485,
        height: 514,
        promo: '',
        price: '0',
        plan: 'Motorola E30',
        classNamePlan: 'text-xl',
        data: [
          {
            description: 'Max Ilimitado: S/69.90'
          }
        ],
        details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
          <li>
            <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
            <span className="text-sm text-end">
              165,1 x 75,6 x 9,1 mm <br/>
              198 g
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Pantalla:</span>
            <span className="text-sm text-end">
              LCD 6,5 pulgadas<br/>
              Resolución HD+, 90 Hz
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Procesador:</span>
            <span className="text-sm text-end">Unisoc T700</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Almacenamiento:</span>
            <span className="text-sm text-end">32 GB + microSD</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">RAM:</span>
            <span className="text-sm text-end">2 GB</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámara Delantera:</span>
            <span className="text-sm text-end">8 MP</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
            <span className="text-sm text-end">
              Principal: 48 MP<br/>
              Profundidad: 2 MP<br/>
              Macro: 2 MP
            </span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Bateria:</span>
            <span className="text-sm text-end">5.000 mAh</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Software:</span>
            <span className="text-sm text-end">Android 11 Go Edition</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Conectividad:</span>
            <span className="text-sm text-end">4G/LTE, WiFi n, Bluetooth 5.0, USB-C, jack 3,5 mm</span>
          </li>
          <li>
            <span className="text-base font-bold uppercase">Otros:</span>
            <span className="text-sm text-end">
              Lector de huellas trasero<br/>
              Radio FM
            </span>
          </li>
        </ul>
      },

    ]
  }
];

export default function HomeMovil() {
  return (
    <section className="relative flex flex-col items-center gap-2 ">
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
        className="bg-white lg:absolute lg:right-20 xl:top-10"
        textLabel="Déjanos tu número y te llamaremos"
        classNameButton="bg-[#ee122c] text-white rounded-full"
      >
        <span className=" text-[#ee122c] text-center font-semibold mb-2 xl:text-base xl:text-sm">DESCUBRE NUESTROS SERVICIOS MÓVILES</span>
        <h2 className="text-lg text-[#ee122c] text-center font-extrabold mb-4 xl:text-[17px] xl:font-bold">¡Consulta por la promoción en<br/>PORTABILIDAD que tenemos para ti!</h2>
      </Form>
      <h1 className="text-3xl text-center text-[#ee122c] font-bold uppercase my-8">conoce nuestros planes moviles</h1>
      <h3 className="text-sm text-center text-gray-500 font-bold">Todas las Ofertas y Promociones vigentes hasta el 07/02/2024</h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <i className="fa-solid fa-mobile-screen-button text-3xl text-[#ee1222]"></i>
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <Items
        arrayItems={ ItemsPlanes }
      />
    </section>
  )
}
