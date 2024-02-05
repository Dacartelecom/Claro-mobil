import { type FC, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { type EmblaCarouselType } from 'embla-carousel-react';
import { NextButton, PrevButton } from './ArrowButtons';
import { DotButton } from './DotButton';
import imageByIndex from '../../utils/ImageByIndex';
import type { CarouselProps } from '../../interfaces/Carousel.props';

const Carousel: FC<CarouselProps> = ({
  slides,
  options,
  haveButtons,
  haveDots,
  images,
  className,
  interval,
  classNameSlide,
  childrens,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [intervalTime] = useState(interval)

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev()
  }, [emblaApi])
  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext()
  }, [emblaApi])
  const scrollTo = useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    // console.log(emblaApi.slidesInView(), 'init')
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    // console.log(emblaApi.slidesInView(), 'select')
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      if (intervalTime) {
        setInterval(() => {
          emblaApi.scrollNext();
        }, intervalTime);
      }
    }
  }, [emblaApi]);

  return (
    <div
      className={`
        relative 
        ${ className }
      `}
    >
      <div className="embla">
        <div
          className="embla__viewport"
          ref={emblaRef}
        >
          <div
            className="embla__container"
          >
            {slides.map((index) => (
              <div
                className={ classNameSlide }
                key={index}
              >
                {
                  childrens &&
                  childrens[index]
                }
                {
                  images &&
                  <img
                    className="embla__slide__img "
                    src={`${imageByIndex(index, images)}`}
                    alt="Your alt text"
                  />
                }
              </div>
            ))}
          </div>
        </div>

        {
          haveButtons &&
          <>
            <PrevButton
              onClick={scrollPrev}
              enabled={prevBtnEnabled}
            />
            <NextButton
              onClick={scrollNext}
              enabled={nextBtnEnabled}
            />
          </>
        }
      </div>
      {
        haveDots &&
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      }
    </div>
  )
}

export default Carousel
