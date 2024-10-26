import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='footer-content-left-logo'>
                        <img src={assets.logo} alt="" />
                        <h2>Casablanca Restaurant</h2>
                    </div>
                    <p>Bleiben Sie auf dem Laufenden über unsere neuesten Angebote und Veranstaltungen! Folgen Sie uns auf </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.instagram_icon} alt="" />

                    </div>

                </div>

                <div className="footer-content-center">
                    <h2></h2>
                    <ul>
                        <li>Home</li>
                        <li>Über uns</li>
                        <li>Lieferung</li>
                        <li>Datenschutzrichtlinie</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Kontaktieren Sie uns</h2>
                    <ul>
                        <li>+49 55462300</li>
                        <li>contact@casablanca-restaurant.com</li>
                    </ul>


                </div>
            </div>
            <hr />
            <p className="footer-copyright">

                Copyright 2024 © Casablanca-restaurant.com - All Right Reserved.
            </p>

        </div>
    )
}

export default Footer
