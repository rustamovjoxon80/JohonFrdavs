import './footer.css'
import logo from '../assets/logo.png'
import soc from '../assets/soc.png'
import soc2 from '../assets/soc2.png'
import soc3 from '../assets/soc3.png'
import soc4 from '../assets/soc4.png'
import soc5 from '../assets/soc5.png'
import soc6 from '../assets/soc6.png'

export default function Footer(){
    return(
        <>
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>FURNITURE</h4>
            <ul>
              <li>Packages</li>
              <li>Living Room</li>
              <li>Bedroom</li>
              <li>Dining</li>
              <li>Home Office</li>
              <li>Decor</li>
              <li>Lighting</li>
              <li>Outdoor</li>
              <li>All Furniture</li>
              <li>Sample Sale</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ABOUT</h4>
            <ul>
              <li>How it Works</li>
              <li>About Feather</li>
              <li>Feather Furniture</li>
              <li>Reviews</li>
              <li>Feather for WeWork</li>
              <li>Feather for Business</li>
              <li>Feather for Staging</li>
              <li>Affiliate Program</li>
              <li>Careers</li>
              <li>In Your Area</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>FAQs</li>
              <li>Contact us</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>FloorFound Terms</li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h4>FEATHER ON SOCIAL MEDIA</h4>

          <div className="socials">
            <img src={soc} alt="" />
            <img src={soc2} alt="" />
            <img src={soc3} alt="" />
            <img src={soc4} alt="" />
            <img src={soc5} alt="" />
            <img src={soc6} alt="" />
          </div>

          <h4 className="newsletter-title">JOIN OUR NEWSLETTER</h4>
          <div className="newsletter-line"></div>
        </div>
      </div>

      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
    </footer>
        </>
    )
}