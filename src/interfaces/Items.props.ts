import type { StaticImageData } from "next/image"
import type { MouseEventHandler, ReactNode } from "react"

export interface ItemsProps {
  arrayItems: ItemsArray
}

export interface ItemProps {
  onClick: MouseEventHandler
  selected: boolean
  title: string
  message?: message
  planes: ArrayPlanProps
  ifGrid?: boolean
  gridCols?: number
  gridRows?: number
}

export interface message {
  strong?: string
  strong2?: string
  text: string
}

export interface PlanProps {
  promo: string
  price: number | 0 | string
  regular?: string
  plan: string
  extraPlan?: ReactNode
  data: ArrayDataPlan
  details?: ReactNode
}

export interface ArrayPlanProps extends Array<PlanProps> {}

export interface dataPlan {
  description: string
  strong?: string | ReactNode
}

export interface ArrayDataPlan extends Array<dataPlan> {}

export interface Item extends Omit<ItemProps, 'onClick' | 'selected'> {}

export interface ItemsArray extends Array<Item> {}