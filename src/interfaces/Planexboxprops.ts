import type { ReactNode } from "react"

export interface ContainerboxProps {
    selectedIndex: number
    setSelectedIndex: (e: any) => void
  }

  export interface SubSectionButtonProps {
    text: string
    selected: boolean
    onClick: () => void
  }

  export interface SectionButtonProps {
    text: string
    selected: boolean
    onClick: () => void
  }

  export interface SectionsProps {
    selectedIndex: number
    setSelectedIndex: (e: any) => void
  }

  export interface SubSectionsProps {
    titles: string[]
    selectedIndex: number
    setSelectedIndex: (e: any) => void
  }

  export interface CardsPlanProps{
    plan:string,
    megas:string,
    children:ReactNode,
    price:string,
    onclick:() => void,
    descuento:boolean,
    fullClaro:boolean,
    mobile:boolean,
    promocion?:string,
    phone?:string 
    text?:string
    conditions?:ArrayString
    subtext?:string
    subtext2?:string
    shadow?:boolean
    subtext3?:string
  }

  export interface conditionPlan{
    text:string
  }
  export interface CardsBodyProps{
    SUB_SECTIONS:Array<Array<string>>
    ARRAYS_CHILDRENS:any
  }

  export interface ArrayString extends Array<conditionPlan>{}