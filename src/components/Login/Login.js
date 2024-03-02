import React from 'react';
import './Login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    let navigate = useNavigate();

    const handleCreateNewAccount = () => {
        navigate("/register");
    }

    return (
        <body>
            <div className='Control'>
                <div className="login-container ">
                    <div className="container">
                        <div className="row">
                            <div className="container-loging col-7 mx-auto my-auto d-flex flex-column gap-3 py-5">
                                <input type="text" className="form-control fw-lighter" placeholder="Email Address or Username" />
                                <input type="password" className="form-control fw-lighter" placeholder='Password' />
                                <button className="btn btn-primary">Login</button>
                                <span className='text-center fst-italic '>
                                    <a className="forgot-password" href='#'>Forgotten password?</a>
                                </span>
                                <hr />
                                <button className='btn btn-secondary'>
                                    Play as Guest
                                    <FontAwesomeIcon icon={faDiscord} />
                                </button>
                                <button className="btn btn-danger" onClick={() => handleCreateNewAccount()}>
                                    Create new account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Login;