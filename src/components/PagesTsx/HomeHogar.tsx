import type { EmblaOptionsType } from "embla-carousel-react";
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
import Items from "../Items/Items";
import icon from '../../../public/img/home.svg'
import type { ItemsArray } from "../../interfaces/Items.props";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 4;
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

const ItemsPlanes: ItemsArray = [
  {
    title: 'INTERNET HFC / FTTH',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '',
      strong2: '(Sujeto a evaluación crediticia)'
    },
    planes: [
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
        extraPlan: <span>250 MBPS</span>,
        promo: 'Precio Regular',
        price: '75',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '250 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '500 Mbps',
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
  },
  {
    title: 'INTERNET + TELEFONÍA',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '',
      strong2: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        plan: '2 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '70',
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
        extraPlan: <span>250 MBPS</span>,
        promo: 'Precio Regular',
        price: '80',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '250 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '500 Mbps',
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
        price: '90',
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
        price: '105',
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
        price: '150',
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
        price: '205',
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
  },
  {
    title: 'INTERNET + TELEVISIÓN',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '',
      strong2: '(Sujeto a evaluación crediticia)'
    },
    planes: [
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
        extraPlan: <span>250 MBPS</span>,
        promo: 'Precio Regular',
        price: '135',
        noHeader: false,
        regular: '',
        data: [
          {
            strong: '250 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '500 Mbps',
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
  },
  {
    title: 'INTERNET + TELEFONÍA + TV',
    message: {
      strong: '¡Atención! Seguimos con el S/ 0 costo de instalación a nivel nacional',
      text: '',
      strong2: '(Sujeto a evaluación crediticia)'
    },
    planes: [
      {
        plan: '3 PLAY',
        extraPlan: <span>150 MBPS</span>,
        promo: 'Precio Regular',
        price: '135',
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
        extraPlan: <span>250 MBPS</span>,
        promo: 'Precio Regular',
        price: '145',
        noHeader: false,
        regular: '',
        tabble:true,
        data: [
          {
            strong: '250 Mbps',
            description: 'Velocidad máxima de Bajada/Subida',
          },
          {
            strong: '500 Mbps',
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
        price: '150',
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
        price: '165',
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
        price: '210',
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
        price: '265',
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
  },
  // {
  //   title: 'planes + equipo',
  //   message: {
  //     strong: '',
  //     strong2: '',
  //     text: ''
  //   },
  //   planes: [

  //     /*----Iphone 14----*/
  //     {
  //       extraPlan: <span>IPHONE 14</span>,
  //       noHeader: true,
  //       src: Iphone14.src,
  //       alt: "Iphone 14",
  //       width: 364,
  //       height: 479,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             146,7 mm x 71,5 mm x 7,6mm<br />
  //             173g
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             OLED Retina 6.1"<br />
  //             2.532 x 1.170 píxeles, Super Retina XDR, 19.5:9<br />
  //             460ppp<br />
  //             True-tone, 60 Hz
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Apple A15</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">128 / 256 / 512 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">6 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">12MP, f/1,9, TOF 3D, slow-motion, AF</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             Principal: 12MP, f/1.6, OIS, QuadLED flash<br />
  //             Secundaria gran angular: 12MP, f/2.4<br />
  //             Vídeo: 4K Dolby Vision, 1080p/240fps, HDR, modo cinemático
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">
  //             Carga rápida 18W e inalámbrica MagSafe 15W<br />
  //             Conexión Lightning
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">IOS 16</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">WiFi 6, 5G, BT 5.2, NFC, GPS, dualSIM, eSIM, altavoces estéreo Dolby Atmos, reconocimiento facial, resistencia al agua IP68</span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Samsung Galaxy S23----*/
  //     {
  //       extraPlan: <span>SAMSUNG GALAXY S23</span>,
  //       noHeader: true,
  //       src: SamsungGalaxyS23.src,
  //       alt: "Samsung Galaxy S23",
  //       width: 271,
  //       height: 357,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             146,3 x 70,9 x 7,6 mm<br />
  //             168 gramos
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             Panel Dynamic AMOLED 2X de 6,1 pulgadas<br />
  //             Refresco de 48 a 120 Hz<br />
  //             Resolución FHD+ de 2.340 x 1.080 píxeles<br />
  //             Brillo pico de 1.750 nits<br />
  //             Always-on Display
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Snapdragon 8 Gen 2 for Samsung</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">
  //             128 GB UFS 3.1<br />
  //             256 o 512 GB UFS 4.0
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">8 GB LPDDR5X</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">12 Mpx f/2.2</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             Principal de 50 Mpx f/1.8 OIS<br />
  //             Telefoto de 10 Mpx f/2.4 OIS 3x<br />
  //             Gran angular de 12 Mpx f/2.2
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">
  //             3.900 mAh<br />
  //             Carga de 25 W (cargador no incluido)<br />
  //             Carga inalámbrica de 15 W<br />
  //             Carga inalámbrica inversa de 4,5 W
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">Android 13 + One UI 5.1</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Conectividad:</span>
  //           <span className="text-xl text-end">
  //             5G<br />
  //             Wi-Fi 6E<br />
  //             Bluetooth 5.3<br />
  //             NFC
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">
  //             Sensor de huella ultrasónico en pantalla<br />
  //             Certificación IP68<br />
  //             Pantalla Gorilla Glass Victus 2<br />
  //             Sonido Dolby Atmos estéreo<br />
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Xiaomi Note 12----*/
  //     {
  //       extraPlan: <span>XIAOMI NOTE 12</span>,
  //       noHeader: true,
  //       src: XiaomiNote12.src,
  //       alt: "Xiaomi Note 12",
  //       width: 434,
  //       height: 575,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             165.88mm x 76.21mm x 7.98mm<br />
  //             189g
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             6,67 pulgadas<br />
  //             AMOLED<br />
  //             120 Hz<br />
  //             Hasta 1.200 nits<br />
  //             240 hz de refresco táctil
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Qualcomm Snapdragon 685</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Memorias:</span>
  //           <span className="text-xl text-end">
  //             4 + 64 GB<br />
  //             4 + 128 GB
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">13 Mpx</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             48MP cámara principal<br />
  //             8MP cámara gran angular<br />
  //             2MP cámara macro
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">5.000mAh + 33WW</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">
  //             Android 12<br />
  //             MIUI 14
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Conectividad:</span>
  //           <span className="text-xl text-end">
  //             4G<br />
  //             WiFi AC<br />
  //             Bluetooth<br />
  //             GPS<br />
  //             NFC<br />
  //             Conector de auriculares<br />
  //             USB C
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Motorola G23----*/
  //     {
  //       extraPlan: <span>MOTOROLA G23</span>,
  //       noHeader: true,
  //       src: MotorolaG23.src,
  //       alt: "Motorola G23",
  //       width: 303,
  //       height: 368,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             162,7 x 74,66 x 8,19 mm
  //             <br />
  //             184,25 gramos
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             LCD de 6,5 pulgadas<br />
  //             Resolución HD+ de 1.600 x 720p<br />
  //             90 Hz de tasa de refresco<br />
  //             576 Hz de tasa de muestreo<br />
  //             Brillo de hasta 400 nits<br />
  //             Panda Glass
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">
  //             MediaTek Helio G85<br />
  //             CPU de 8 núcleos de 2,0 GHz<br />
  //             GPU Arm Mali-G52 MC2
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">8 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">
  //             128 GB<br />
  //             Hasta 512 GB con tarjeta microSD
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">16 Mpx f/2,45</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             Principal: 50 Mpx f/1,8<br />
  //             Gran angular: 5 Mpx f/2,2<br />
  //             Sensor de profundidad: 2 Mpx f/2,4
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">
  //             5.000 mAh<br />
  //             Carga rápida de hasta 30 W
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">Android 13</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Conectividad:</span>
  //           <span className="text-xl text-end">
  //             4G<br />
  //             WiFi 802.11 a/b/g/n/ac<br />
  //             Bluetooth 5.1<br />
  //             NFC<br />
  //             Dual SIM<br />
  //             Jack de 3,5 mm para auriculares<br />
  //             USB-C (USB 2.0)
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">
  //             Lector de huellas en el lateral<br />
  //             Certificación IP52 frente al agua y al polvo<br />
  //             Doble altavoz con Dolby Atmos
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Oppo Reno 7----*/
  //     {
  //       extraPlan: <span>OPPO RENO 7</span>,
  //       noHeader: true,
  //       src: OppoReno7.src,
  //       alt: "Oppo Reno 7",
  //       width: 389,
  //       height: 563,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             159.9 x 73.2 x 7.49 mm<br />
  //             175 gramos
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             AMOLED de 6.43 pulgadas<br />
  //             Resolución FullHD+, 2400 x 1080 pixeles<br />
  //             Tasa de refresco de 90 Hz
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Qualcomm Snapdragon 680</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">128 GB UFS 2.2, expandible con microSD</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">6 GB LPDDR4x</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">Sony IMX709 de 32 megapixeles f/2.4</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             64 megapixeles f/1.7 principal<br />
  //             2 megapixeles f/3.3 microscópica<br />
  //             2 megapixeles f/2.4 monocromática
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">4,500 mAh con carga SuperVOOC de 33W</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">ColorOS 12.1 basado en Android 11</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">
  //             Sensor de huellas en pantalla<br />
  //             Conectividad 4G<br />
  //             Bluetooth 5.1<br />
  //             Jack 3.5 mm de audio<br />
  //             Soporte de audio inalámbrico de alta calidad<br />
  //             con códecs AptX HD y LDAC<br />
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Oppo A78----*/
  //     {
  //       extraPlan: <span>OPPO A78</span>,
  //       noHeader: true,
  //       src: OppoA78.src,
  //       alt: "Oppo A78",
  //       width: 433,
  //       height: 576,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             163,8 x 75,1 x 7,99 mm<br />
  //             188 g.
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             LCD 6,56"<br />
  //             HD+<br />
  //             90 Hz<br />
  //             90 Hz táctil
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Dimensity 700</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">128 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">8 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">8 MP f/2.0</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             50 MP f/1.8<br />
  //             2 MP f/2.4 bokeh
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">
  //             5.000 mAh<br />
  //             Carga rápida 33W
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">ColorOS 12.1 basado en Android 11</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Conectividad:</span>
  //           <span className="text-xl text-end">
  //             5G<br />
  //             Wi-Fi ac<br />
  //             Bluetooth 5.3<br />
  //             NFC<br />
  //             USB-C<br />
  //             Minijack
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">
  //             Lector de huellas lateral<br />
  //             Altavoces estéreo<br />
  //             IPX4
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //     /*----Motorola E30----*/
  //     {
  //       extraPlan: <span>Motorola E30</span>,
  //       noHeader: true,
  //       src: MotorolaE30.src,
  //       alt: "Motorola E30",
  //       width: 485,
  //       height: 514,
  //       promo: 'Max Ilimitado:',
  //       price: '69.90',
  //       plan: '',
  //       data: [
  //         {
  //           description: 'Max Ilimitado: S/69.90'
  //         }
  //       ],
  //       details: <ul className="[&>li]:flex [&>li]:justify-between [&>li]:gap-1 [&>li]:border-b [&>li]:border-gray-400 [&>li]:pb-2">
  //         <li>
  //           <span className="text-base font-bold uppercase">Dimensiones y Peso:</span>
  //           <span className="text-xl text-end">
  //             165,1 x 75,6 x 9,1 mm <br />
  //             198 g
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Pantalla:</span>
  //           <span className="text-xl text-end">
  //             LCD 6,5 pulgadas<br />
  //             Resolución HD+, 90 Hz
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Procesador:</span>
  //           <span className="text-xl text-end">Unisoc T700</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Almacenamiento:</span>
  //           <span className="text-xl text-end">32 GB + microSD</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">RAM:</span>
  //           <span className="text-xl text-end">2 GB</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámara Delantera:</span>
  //           <span className="text-xl text-end">8 MP</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Cámaras Traseras:</span>
  //           <span className="text-xl text-end">
  //             Principal: 48 MP<br />
  //             Profundidad: 2 MP<br />
  //             Macro: 2 MP
  //           </span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Bateria:</span>
  //           <span className="text-xl text-end">5.000 mAh</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Software:</span>
  //           <span className="text-xl text-end">Android 11 Go Edition</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Conectividad:</span>
  //           <span className="text-xl text-end">4G/LTE, WiFi n, Bluetooth 5.0, USB-C, jack 3,5 mm</span>
  //         </li>
  //         <li>
  //           <span className="text-base font-bold uppercase">Otros:</span>
  //           <span className="text-xl text-end">
  //             Lector de huellas trasero<br />
  //             Radio FM
  //           </span>
  //         </li>
  //       </ul>
  //     },

  //   ]
  // }

];

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
      <h3 className="text-[18px] text-center text-gray-500 font-bold my-[30px]">Todas las Ofertas y Promociones vigentes hasta el 29/02/2024 </h3>
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <img className="w-[50px] mx-4" src={icon.src} alt="icon" />
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <Items
        arrayItems={ItemsPlanes}
      />
    </section>
  )
}
