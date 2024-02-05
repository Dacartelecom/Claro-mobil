import type { DotButtonPropType } from "../../interfaces/Carousel.props"
import type { FC } from "react"

export const DotButton: FC<DotButtonPropType> = ({
  selected,
  onClick
}) => {

  return (
    <button
      className={'embla__dot'.concat(selected ? ' embla__dot--selected' : '')}
      type="button"
      onClick={onClick}
    />
  )
}