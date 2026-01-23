

import "./Section7.css"
import again from '../assets/again.png'
export default function Section6(){
    return(
        <>
        <div className="again">
            <img src={again} alt="" />
            <div className="again_text">
                <h1>Never assemble furniture <br /> again.</h1>
                <p>We move a lot. There are countless floor plans and <br/> roommates (oh, and your evolving tastes) between <br /> here and there. With Feather, furnish your space <br /> without breaking a sweat or reaching for a <br /> screwdriver.</p>
                <span>How Feather Works</span>
            </div>
        </div>
        </>
    )
}