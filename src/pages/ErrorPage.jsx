import React from 'react'
import { default as Errorimg } from '../assets/404.svg';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='projects-container'>

            <div className="error-wrapper">
                <div className="error-img">
                    <img src={Errorimg} alt="" />
                </div>

                <div className="error-text">
                    <p>Oops, it seems you have attempted to visit a page that does not exist. <span onClick={() => navigate('/')}>Click here</span> to return to homepage.</p>

                </div>
            </div>

        </div>
    )
}

export default ErrorPage