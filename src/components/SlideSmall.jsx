import { createRef, useRef, useState } from 'react'
import '../styles/SlideSmall.scss'
export const SlideSmall = ({ images, setImgClicked}) => {
    const imgRefs = useRef(images.map(() => createRef()))
    const [posY, setPosY] = useState(0)
    const [posX, setPosX] = useState(0)
    const [positions, setPositions] = useState(0)
    const [isDragStart, setIsDragStart] = useState(false)
    const [prevPosX, setPrevPosX] = useState(null)
    const [prevPosY, setPrevPosY] = useState(null)
    const [posClick, setPosClick] = useState(null)
    const [timeT, setTimeT] = useState(0.3)

    const mouseMove = (e) => {
        if (!isDragStart) return
        let posDiff
        if (e.clientY) {
            posDiff =( e.clientY - posClick)
        } else {
            posDiff = e.touches[0].pageY - posClick
        }
        setPosY((prevPosY + posDiff))

    }

    const mouseDown = (e) => {
        setIsDragStart(true)
        setPosClick(e.clientY)
        setPrevPosY(posY)
        setTimeT(0)
    }
    const mouseLeave =()=>{
        setIsDragStart(false)
      
    }
    const mouseUp = (e) => {
        if(posClick === e.clientY ){
            setImgClicked(parseInt(e.target.id))
        }
        setIsDragStart(false)
        
        let posDiff
        if (e.clientY) {
            posDiff = e.clientY - posClick
        } else {

            posDiff = e.changedTouches[0].pageY - posClick
        }
        setPosY((prevPosY + posDiff))
        const imgHeight = imgRefs.current[0].current.clientHeight
        setTimeT(0.3)


        if (posDiff <0) {
            if (!(positions === (images.length - 1))) {

                setPosY(-(positions + 4) * imgHeight)
                setPositions(i => i + 5)
            } else {
                setPosY(-imgHeight * (images.length - 1))

            }
        } else if (posDiff >0) {
            if (!(positions === 0)) {

                setPosY(-(positions - 5) * (imgHeight))
                setPositions(i => i - 5)
            } else {
                setPosY(0)
            }

        }
    }

    const handleTopBottom = (e) => {
       
        const imgHeight = imgRefs.current[0].current.clientHeight

        if (e.target.id === 'top') {

            setPosX(-(positions - 5) * imgHeight)
            setPosY(-(positions - 5) * imgHeight)
            setPositions(0)


        } else {

            setPosX(-(positions + 4) * imgHeight)
            setPosY(-(positions + 4) * imgHeight)
            setPositions(5)


        }


    }
    return (
        <div className='SlideSmall'>
            <button
                id='top'
                onClick={handleTopBottom}
                style={{
                    display: positions === 0 ? "none" : "block"
                }}
            >

                <span>

                    {'<'}
                </span>
            </button>
            <div className='ScrollContainer'
               
            >
                
                <div
                    className='SlideSmallContainer'
                    onMouseMove={mouseMove}
                    onPointerDown={mouseDown}
                    onMouseLeave={mouseLeave}
                    style={{
                        transform: window.innerWidth <= 1064 ? 'translateX(' + posX + 'px)' : 'translateY(' + posY + 'px)',
                        transition: 'all ' + timeT + 's ease'
                    }
                    }>
                    {
                        images.map((img, index) => (
                            <div key={index} className='ssc-img'>
                                <img 
                                    ref={imgRefs.current[index]} 
                                    id={index} 
                                    src={img} 
                                    
                                    draggable={false}
                                    onMouseUp={mouseUp}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
            <button
                id="bottom"
                onClick={handleTopBottom}
                style={{
                    display: positions >= images.length-5 ? "none" : "block"
                }}
            >
                <span>

                    {'>'}
                </span>
            </button>
        </div>
    )
}
