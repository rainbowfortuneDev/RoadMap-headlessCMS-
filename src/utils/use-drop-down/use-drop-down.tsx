import { RefObject, useRef, useState } from 'react'

const useDropDown = function <T extends Element = any>(): [
  RefObject<T>,
  boolean,
  (event?: React.MouseEvent | any) => any,
  (event?: MouseEvent | any) => any,
  RefObject<T>
] {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const dropDownRef = useRef<T>(null)
  const logoutRef = useRef<T>(null)

  const closeDropDown = (event?: MouseEvent, bypass = false) => {
    if (
      !bypass &&
      event &&
      dropDownRef.current?.contains(event.target as Node)
    ) {
      return
    }
    if (!bypass && event && logoutRef.current?.contains(event.target as Node)) {
      return
    }
    setIsDropDownOpen(false)
    document.removeEventListener('click', closeDropDown, { capture: true })
  }

  const toggleDropDown = (event?: React.MouseEvent) => {
    event?.preventDefault()

    if (isDropDownOpen) {
      closeDropDown(undefined, true)
      return
    }

    setIsDropDownOpen(!isDropDownOpen)
    document.addEventListener('click', closeDropDown, { capture: true })
  }

  return [dropDownRef, isDropDownOpen, toggleDropDown, closeDropDown, logoutRef]
}

export default useDropDown
