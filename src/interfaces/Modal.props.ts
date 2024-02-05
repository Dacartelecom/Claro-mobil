import type {
  Dispatch,
  ReactNode,
  SetStateAction
} from "react";

export interface ModalProps {
  activeModal: boolean
  setActiveModal: Dispatch<SetStateAction<boolean>>
  background: string
  children: ReactNode
  buttonEnd?: boolean
}