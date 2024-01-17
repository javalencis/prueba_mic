import { useContext, useEffect } from 'react'
import '../styles/Notification.scss'
import { AppContext } from '../context/AppCOntext'
export const Notification = () => {
    const { addedItem, setAddedItem } = useContext(AppContext)

    useEffect(() => {
        if(addedItem){
            setTimeout(() => {
                setAddedItem(false);
            }, 4000);        
        }

    }, [addedItem])



    const handleCloseNotification = () => {
        setAddedItem(false)
    }



    return (
        <div className={addedItem ? "Notification visible" : "Notification hidden"}>
            Ítem agregado al carrito
            <span onClick={handleCloseNotification}>x</span>
        </div>
    )
}
