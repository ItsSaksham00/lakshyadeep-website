import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css'
import teamInfo from './teamInfo';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Team = () => {

    return(
        <>
            <div className="team-container">
                <h1>
                    Meet <span>Our </span>Team
                </h1>
                <p>
                They are not just a team; they are part of our family, helping us build and grow this wonderful organization.
                </p>
                {/* <button>
                    Hi
                </button> */}
            </div>


            <div className="team-info-holder">

                {
                    teamInfo.map((e) => {
                        return(
                            <div className="teamBox" key={e.id}>
                                <img
                                 src={e.img}
                                  alt={e.name}
                                  />
                                  
                                  <h1>{e.name}</h1>
                                  <p>
                                    {e.about}
                                  </p>
                            <div className='boxFoot'>
                                   <a href={e.fblink} className='teamLink'>
                                    <FontAwesomeIcon icon={faFacebookF}  />
                                   </a>
                                 </div>

                                  
                        </div>
                        )
                    })
                }

            </div>
        </>
    );
}

export default Team;