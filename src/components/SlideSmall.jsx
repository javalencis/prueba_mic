import { useRef, useState } from 'react'
import '../styles/SlideSmall.scss'
export const SlideSmall = ({ images, setImgClicked }) => {
    const myImg = useRef(null)
    const [posY, setPosY] = useState(0)
    const [posX, setPosX] = useState(0)
    const [positions, setPositions] = useState(0)

    const handleClickImg = (e) => {
        setImgClicked(parseInt(e.target.id))
    }

    const handleTopBottom = (e) => {
        let imgH = myImg.current.clientHeight + 10

        if (e.target.id === 'top') {

            setPosX(-(positions - 3) * imgH)
            setPosY(-(positions - 3) * imgH)
            setPositions(x => x > 0 ? x - 3 : 3)


        } else {

            setPosX(-(positions + 3) * imgH)
            setPosY(-(positions + 3) * imgH)
            setPositions(x => x < images.length ? x + 3 : x)


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
            <div className='ScrollContainer'>
                <div
                    className='SlideSmallContainer'
                    style={{
                        transform: window.innerWidth <= 1064 ? 'translateX(' + posX + 'px)' : 'translateY(' + posY + 'px)'
                    }}>
                    {
                        images.map((img, index) => (
                            <div key={index} className='ssc-img'>
                                <img ref={myImg} id={index} src={img} onClick={handleClickImg} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <button
                id="bottom"
                onClick={handleTopBottom}
                style={{
                    display: positions >= images.length - 2 ? "none" : "block"
                }}
            >
                <span>

                    {'>'}
                </span>
            </button>
        </div>
    )
}
