import type { CSSProperties } from "react";
import BannerDesktop1 from "../../../public/img/moviles-banner-desktop-2.webp";
import BannerDesktop2 from "../../../public/img/moviles-banner-desktop-3.webp";
import BannerDesktop3 from "../../../public/img/moviles-banner-desktop-4.webp";
import BannerDesktop4 from "../../../public/img/new/2025-02-16-5.webp";
import BannerMobile1 from "../../../public/img/moviles-banner-mobile-2.webp";
import BannerMobile2 from "../../../public/img/moviles-banner-mobile-3.webp";
import BannerMobile3 from "../../../public/img/moviles-banner-mobile-4.webp";
import BannerMobile4 from "../../../public/img/new/2025-02-16-5m.webp";
import Carousel from "../Carousel/Carousel";
import { Form } from "../Form";
import icon from '../../../public/img/mob.svg'
import { SelecteplanMobil } from "../Items/Selecteplan";

const OPTIONS: any = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 4;
const SLIDES: number[] = [1,2,3,4,5,6];
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

export default function HomeMovil() {
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
      {/* <h3 className="text-[18px] text-center text-gray-500 font-bold my-[30px]">Todas las Ofertas y Promociones vigentes hasta el 31/05/2024 </h3> */}
      <div className="flex items-center justify-center gap-2 mb-10">
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
        <img className="w-[50px] mx-4" src={icon.src} alt="icon" />
        <div className="bg-[#ee122c] w-24 h-1 mt-2"></div>
      </div>
      <SelecteplanMobil/>
    </section>
  )
}
