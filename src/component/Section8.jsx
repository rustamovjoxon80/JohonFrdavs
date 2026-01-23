

import './Section8.css'
import card from '../assets/card_img.png'
import card2 from '../assets/card_img2.png'
import card3 from '../assets/card_img3.png'
import card4 from '../assets/card_img4.png'

export default function Card(){
    return(
        <>
        <h1 className='centre2'>Shop our Bestsellers</h1>

        <div className="card_wrapper">
            <div className="card">
                <img src={card} alt="" />
                <p className='name'>Cooper Dining Table</p>
                <p className='price'>rent for <span className='orange'>$15</span> /mo <br /> or buy for <span className='grey'>$359</span> <br /> $314</p>
            </div>
            <div className="card">
                <img src={card2} alt="" />
                <p className='name'>Croft Media <br /> Console</p>
                <p className='price'>rent for <span className='orange'>$35</span> /mo <br /> or buy for <span className='grey'>$839</span> <br /> $739</p>
            </div>
            <div className="card">
                <img src={card3} alt="" />
                <p className='name'>Essex Dining Chair</p>
                <p className='price'>rent for <span className='orange'>$18</span> /mo <br /> or buy for <span className='grey'>$429</span> <br /> $379</p>
            </div>
            <div className="card">
                <img src={card4} alt="" />
                <p className='name'>Ludlow Sofa</p>
                <p className='price'>rent for <span className='orange'>$52</span> /mo <br /> or buy for <span className='grey'>$1249</span> <br /> $1099</p>
            </div>
        </div>
        <p className=' centre'>Shop All Furniture</p>
        </>
    )
}

