





import './Section9.css'
import furniture from '../assets/furniture.png'

export default function Floyd(){
    return(
        <>
        <div className="Floyd">
            <img src={furniture} alt="" />
            <div className="Floyd_text">
                <p>feather FLOYD</p>
                <h1>Floyd Furniture Meets <br /> Feather Flexibility</h1>
                <button>Explore Floyd Furniture</button>
            </div>
        </div>
        </>
    )
}