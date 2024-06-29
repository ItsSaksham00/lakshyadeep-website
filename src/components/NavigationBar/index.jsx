import { faBars, faEnvelope, faEnvelopesBulk, faHome, faLocation, faLocationDot, faMobile, faMobileAlt, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import lakshadeepImg from '../../assets/images/lakshyadeep.png'
import { Link,NavLink } from 'react-router-dom';


const NavigationBar = () => {
    
    const [openNav, setopenNav] = useState(true)
    const [toggleBtnChange, settoggleBtnChange] = useState(true)
    // const [changeNav , setchangeNav] = useState('navigation-container')
    const windowWidth = window.innerWidth;

    const toggleOfNavbar = () => {
        setopenNav(!openNav)
        settoggleBtnChange(!toggleBtnChange)
    }

    return(
<>

        <div className="NavToggle">
           
            {
                toggleBtnChange ?  (
            <FontAwesomeIcon icon={faBars} className='ToggleBtn' onClick={toggleOfNavbar} />                 
        )
                : 
           ( <FontAwesomeIcon icon={faXmark} className='ToggleBtn'  onClick={toggleOfNavbar}  /> )
            }

        </div>
{openNav ? 
    (
        <div className={toggleBtnChange ? 'navigation-container' : 'opened-nav-container'} >
                <div className="upperBar">
                        <div className="writtenInfo">
                                <div className="text-info">
                                    <FontAwesomeIcon icon={faLocationDot} className='textIcon' />
                                    <p>Itahari-6, Sunsari</p>
                                </div>
                                <div className="text-info">
                                    <FontAwesomeIcon icon={faMobileAlt} className='textIcon' />
                                    <p>+977 (980) 9999 888</p>
                                </div>
                                <div className="text-info">
                                    <FontAwesomeIcon icon={faEnvelope} className='textIcon' />
                                    <p>Lakshya.deep@gmail.com</p>
                                </div>
                        </div>

                        <div className="socialHandles">
                                <div className="socialBoxes firstSocialIcon">
                                    <a href="https://www.facebook.com/lakshyadeep.eca">
                                        <FontAwesomeIcon icon={faFacebookF} className='socialIcons'/>
                                    </a> 
                                </div>
                                <div className="socialBoxes">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} className='socialIcons'/>
                                    </a> 
                                </div>
                                <div className="socialBoxes">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faYoutube} className='socialIcons'/>
                                    </a> 
                                </div>
                                <div className="socialBoxes">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faEnvelopesBulk} className='socialIcons'/>
                                    </a> 
                                </div>
                        </div>
                </div>

                <div className="lowerBar">
                            
                        <div className="ld-image-container">

                            <img
                             src={lakshadeepImg} 
                            alt="Lakshyadeeps Png Image" 
                            />

                        </div> 

                        <nav>
                                            <NavLink exact="true" activeclassname="active" className='NavBtns' to='/'> 
                                                <div className='NavBtnText'><h4>Home</h4></div>
                                            </NavLink>   

                                            <NavLink exact="true" activeclassname="active" className='NavBtns' to='/AboutUs'> 
                                                <div className='NavBtnText'><h4>About Us</h4></div>
                                            </NavLink>   

                                            <NavLink exact="true" activeclassname="active   " className='NavBtns' to='/Events'> 
                                                <div className='NavBtnText'><h4>Events</h4></div>
                                            </NavLink>   

                                            <NavLink exact="true" activeclassname="active" className='NavBtns' to='/OurFeatures'> 
                                                <div className='NavBtnText'><h4>Features</h4></div>
                                            </NavLink>   
                                            
                                            <NavLink exact="true" activeclassname="active" className='NavBtns' to='/OurTeam'> 
                                                <div className='NavBtnText'><h4>Team</h4></div>
                                            </NavLink>   

                                            <NavLink exact="true" activeclassname="active" className='NavBtns' to='/ContactMe'> 
                                                <div className='NavBtnText lastChild'><h4>Contact</h4></div>
                                            </NavLink>   
                                     </nav>

                        
                        <div className="donate-btn-box">
                                <div className="donateBtn">
                                    <Link to='donate-to-lakshaydeep' className='donateBtnLink'>Donate</Link>
                                </div>
                        </div>
                            
                </div>
        </div>

    ) : ( 
    <div className={toggleBtnChange ? 'navigation-container' : 'opened-nav-container'} >
        <div className="upperBar">
                <div className="writtenInfo">
                        <div className="text-info">
                            <FontAwesomeIcon icon={faLocationDot} className='textIcon' />
                            <p>Itahari-6, Sunsari</p>
                        </div>
                        <div className="text-info">
                            <FontAwesomeIcon icon={faMobileAlt} className='textIcon' />
                            <p>+977 (980) 9999 888</p>
                        </div>
                        <div className="text-info">
                            <FontAwesomeIcon icon={faEnvelope} className='textIcon' />
                            <p>Lakshya.deep@gmail.com</p>
                        </div>
                </div>

                <div className="socialHandles">
                        <div className="socialBoxes firstSocialIcon">
                            <a href="https://www.facebook.com/lakshyadeep.eca">
                                <FontAwesomeIcon icon={faFacebookF} className='socialIcons'/>
                            </a> 
                        </div>
                        <div className="socialBoxes">
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className='socialIcons'/>
                            </a> 
                        </div>
                        <div className="socialBoxes">
                            <a href="#">
                                <FontAwesomeIcon icon={faYoutube} className='socialIcons'/>
                            </a> 
                        </div>
                        <div className="socialBoxes">
                            <a href="#">
                                <FontAwesomeIcon icon={faEnvelopesBulk} className='socialIcons'/>
                            </a> 
                        </div>
                </div>
        </div>

        <div className="lowerBar">
                            
                            <div className="ld-image-container">
    
                                <img
                                 src={lakshadeepImg} 
                                alt="Lakshyadeeps Png Image" 
                                />
    
                            </div>
    
                            <nav>
                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active" className='NavBtns' to='/'> 
                                                <div className='NavBtnText'><h4>Home</h4></div>
                                            </NavLink>   

                                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active" className='NavBtns' to='/AboutUs'> 
                                                <div className='NavBtnText'><h4>About Us</h4></div>
                                            </NavLink>   

                                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active   " className='NavBtns' to='/Events'> 
                                                <div className='NavBtnText'><h4>Events</h4></div>
                                            </NavLink>   

                                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active" className='NavBtns' to='/OurFeatures'> 
                                                <div className='NavBtnText'><h4>Features</h4></div>
                                            </NavLink>   
                                            
                                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active" className='NavBtns' to='/OurTeam'> 
                                                <div className='NavBtnText'><h4>Team</h4></div>
                                            </NavLink>   

                                            <NavLink onClick={toggleOfNavbar} exact="true" activeclassname="active" className='NavBtns' to='/ContactMe'> 
                                                <div className='NavBtnText lastChild'><h4>Contact</h4></div>
                                            </NavLink>  
                                     </nav>
    
                            
                            <div className="donate-btn-box">
                                    <div className="donateBtn">
                                        <Link to='donate-to-lakshaydeep' className='donateBtnLink'>Donate</Link>
                                    </div>
                            </div>
                                
                    </div>
</div>

)
}
</>

    );

}

export default NavigationBar;