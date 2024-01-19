import { createRef, useEffect, useRef, useState } from 'react'
import '../styles/SlideHorizontal.scss'
import { ListDots } from './ListDots'
export const SlideHorizontal = ({ images, imgClicked, imgCurrent, setImgCurrent }) => {

    const imgRefs = useRef(images.map(() => createRef()));

    const [isDragStart, setIsDragStart] = useState(false)
    const [prevPosX, setPrevPosX] = useState(null)
    const [posClick, setPosClick] = useState(null)
    const [timeT, setTimeT] = useState(0.3)
    const [posX, setPosX] = useState(0)


    useEffect(() => {
        const imgWidth = imgRefs.current[0].current.clientWidth
        setPosX(-(imgClicked) * imgWidth)
        setImgCurrent(imgClicked)
    }, [imgClicked])


    const mouseMove = (e) => {
        if (!isDragStart) return
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {
            posDiff = e.touches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)

    }

    const mouseDown = (e) => {
        setIsDragStart(true)
        setPosClick(e.clientX)
        setPrevPosX(posX)
        setTimeT(0)

    }
    
    const mouseUp = (e) => {
        setIsDragStart(false)
        let posDiff
        if (e.clientX) {
            posDiff = e.clientX - posClick
        } else {

            posDiff = e.changedTouches[0].pageX - posClick
        }
        setPosX(prevPosX + posDiff)
        const imgWidth = imgRefs.current[0].current.clientWidth
        setTimeT(0.3)


        if (posDiff < 0) {
            if (!(imgCurrent === (images.length - 1))) {

                setPosX(-(imgCurrent + 1) * imgWidth)
                setImgCurrent(i => i + 1)
            } else {
                setPosX(-imgWidth * (images.length - 1))

            }
        } else if (posDiff > 0) {
            if (!(imgCurrent === 0)) {

                setPosX(-(imgCurrent - 1) * (imgWidth))
                setImgCurrent(i => i - 1)
            } else {
                setPosX(0)
            }

        }
    }

    const handleBackNextImg = (e) => {
        const imgWidth = imgRefs.current[0].current.clientWidth
        if (e.target.id === "left") {
            if (imgCurrent !== 0) {

                setPosX(-(imgCurrent - 1) * (imgWidth))
                setImgCurrent(x => x > 0 ? x - 1 : 1)
            }
        } else {
            if (imgCurrent !== images.length - 1) {

                setPosX(-(imgCurrent + 1) * imgWidth)
                setImgCurrent(x => x < images.length - 1 ? x + 1 : x)
            }
        }
    }
    const handleMouseMoveZoom = (e, index) => {
        const { left, top, width, height } = imgRefs.current[index].current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const percentageX = (x / width) * 100;
        const percentageY = (y / height) * 100;

        imgRefs.current[index].current.style.transformOrigin = `${percentageX}% ${percentageY}%`;
    };

    return (
        <div className='SlideHorizontal'>
            <button
                id='left'
                onClick={handleBackNextImg}
                style={{
                    color: imgCurrent == 0 && "#979899"
                }}
            >{'<'}</button>
            <div
                className="SlideContainer"

                onMouseMove={mouseMove}
                onPointerDown={mouseDown}
                onTouchMove={mouseMove}
  

            >

                <div
                    className="ImageContainer"
                    style={{
                        transform: 'translate3d(' + posX + 'px,0px,0px)',
                        transition: 'all ' + timeT + 's ease'
                    }}

                >
                    {
                        images.map((img, index) => (

                            <img
                                ref={imgRefs.current[index]}
                                key={index}
                                src={img}
                                draggable='false'
                                onMouseMove={(e) => handleMouseMoveZoom(e, index)}
                                onMouseUp={mouseUp}
                                onTouchEnd={mouseUp}
                            />

                        ))
                    }
                </div>

            </div>
            <button
                id='right'
                onClick={handleBackNextImg}
                style={{
                    color: imgCurrent === images.length - 1 && "#979899"
                }}
            >{'>'}</button>


        </div>
    )
}
