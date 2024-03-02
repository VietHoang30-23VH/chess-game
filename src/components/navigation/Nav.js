import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Nav = (props) => {
    let navigate = useNavigate();

    const handleSign = () => {
        navigate("/login");
    }

    return (
    
            <div className="topnav">
                <div className='row'>
                    <div className='col-7'>
                <NavLink  to="/" exact>Home</NavLink>
        
                <NavLink  to="/puzzle">Puzzle</NavLink>
                <NavLink  to="/analyze">Analyze</NavLink>
                <NavLink  to="/profile">Profile</NavLink>
                <NavLink  to="/upgrade">Upgrade</NavLink> 
                    </div>
                    <div className='col-5 text-end pr-9'>
                <button class="btn btn-outline-secondary custom-size" onClick={() => handleSign()}>Sign in</button>
                    </div>
                </div>

                </div>
        
    );
}

export default Nav;