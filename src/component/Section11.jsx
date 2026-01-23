import './Section11.css'

import forbs from '../assets/forbs.png'
import forbs2 from '../assets/forbs2.png'
import forbs3 from '../assets/forbs3.png'
import forbs4 from '../assets/forbs4.png'
import forbs5 from '../assets/forbs5.png'

export default function Pain() {
    return (
        <>
            <div className="pain">
                <h1>Ease the pain of <br /> moving from <br /> apartment to <br /> apartment.</h1>
                <div className="img_wrp">
                    <img src={forbs} alt="" />
                    <img src={forbs2} alt="" />
                    <img src={forbs3} alt="" />
                    <img src={forbs4} alt="" />
                    <img src={forbs5} alt="" />
                </div>
            </div>
        </>
    )
}