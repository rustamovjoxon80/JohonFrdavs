import './Section12.css'

import person from '../assets/person.png'

export default function Free() {
    return (
        <>
            <div className="Free">
                <img src={person} alt="" />
                <h1>Feather is the stress-free <br /> way to furnish your home</h1>
                <button className='shop'>Shop Furniture</button>
            </div>
        </>
    )
}