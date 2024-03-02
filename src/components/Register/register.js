import React from 'react';
import './register.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare,faUserTag,faEnvelopeCircleCheck, faMobileScreen, faUnlockKeyhole, faKeyboard} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Resgister = (props) =>
{
    let navigate = useNavigate();
    const handleLogin = () => 
    {
        navigate("/Login");
    }
    return (

        <body>
    <div class='Control'>
        <div className="register-container ">
            <div className ="container">
                <div className="row">
                    <div className="container-registering col-7 mx-auto my-auto d-flex flex-column gap-3 py-5">
                                    <div className='header-container'>
                                    <p>Registration is easy!</p>
                                    <p>Just fill out the form below and you're good to go!</p>
                                    </div>
                        <hr/>

                        <div className="form-group">
                            <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUserTag} style={{ fontSize: '20px', width: '20px', height: '13px' }} className="me-2" />
                            <input type="text" className="form-control fw-lighter custom-style" placeholder="Username"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faEnvelopeCircleCheck} style={{ fontSize: '20px', width: '20px', height: '13px' }} className="me-2" />
                            <input type="text" className="form-control fw-lighter custom-style" placeholder="Email Address"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faMobileScreen} style={{ fontSize: '20px', width: '20px', height: '13px' }} className="me-2" />
                            <input type="text" className="form-control fw-lighter custom-style" placeholder="Phone Number"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faUnlockKeyhole} style={{ fontSize: '20px', width: '20px', height: '13px' }} className="me-2" />
                            <input type="password" className="form-control fw-lighter custom-style" placeholder="Password"/>
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faKeyboard} style={{ fontSize: '20px', width: '20px', height: '13px' }} className="me-2" />
                            <input type="password" className="form-control fw-lighter custom-style" placeholder="Re-enter password"/>
                            </div>
                        </div>

                        
                        <hr/>
                        <button class="btn btn-danger" onClick={() => handleLogin()}>
                            SIGNUP<FontAwesomeIcon icon={faShareFromSquare} className='ms-2'/>
                            
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </body>
    )
}
export default Resgister;