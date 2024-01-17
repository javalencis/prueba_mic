import { useState } from "react"
import iconArrow from '../assets/icons/arrow.png'
export const InfoToggle = ({ children, title }) => {

  const [toggleInfo, setToggleInfo] = useState(false)
  const handleToggleInfo = () => {
    setToggleInfo(v => !v)
  }

  return (
    <div className='toggle-info' onClick={handleToggleInfo}>
      <div className='title'>
        <p>{title}</p>
        <img src={iconArrow} alt="Flecha indicativa" className={toggleInfo ? 'expanded':''}/>
      </div>
      {toggleInfo && (
        children
      )}


    </div>
  )
}
