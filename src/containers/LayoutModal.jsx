import '../styles/LayoutModal.scss'
export const LayoutModal = ({ children, openModal }) => {
  const handleIsOpenModal = (event) => {
    if (event.target.className === "LayoutModal") {
      openModal(e => !e)
    }
  }
  return (
    <div className="LayoutModal" onClick={handleIsOpenModal}>
      {children}
    </div>
  )
}
