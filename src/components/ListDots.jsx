import '../styles/ListDots.scss'
export const ListDots = ({ images,setImgClicked ,imgCurrent}) => {
   const handleClickDot = (e) =>{
    setImgClicked(parseInt(e.target.id))
   }

    return (
        <div className="ListDots">
            {
                images.map((img,index) => (
                    <span 
                        key={index} 
                        id={index}
                        onClick={handleClickDot}
                        className={index==imgCurrent?'active':''}
                        >
                    </span>
                ))
            }
        </div>
    )
}
