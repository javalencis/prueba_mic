import '../styles/ModalGuideSizes.scss'
export const ModalGuideSizes = ({img,openModal}) => {
    const handleCloseModal = ()=>{
        openModal(false)
    }
  return (
    <div className="ModalGuideSizes">
         <button onClick={handleCloseModal}>X</button>
            <div>
                <img src={img} alt="Guia de tallas" />
            </div>
    </div>
  )
}
