import React from 'react';

export default function Index() {
    return (
        <div>
            <div className="login-wrapper">
                <div className="login-div">
                    <img src="img/groupe-1-10@1x.png" alt="" />

                    <div className="loggin-wrap">
                        <form action="">
                            <div className="single-input">
                                <i className="fas fa-envelope"></i>
                                <input type="eamil" placeholder='Email' />
                            </div>
                            <div className="single-input">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder='Mot de pass' />
                            </div>

                            <div className="single-btn">
                                <button id='send-btn' type='submit'>Connexio</button>
                            </div>
                            <div className="single-btn">
                                <button className='forget-pass'>Mot de pass oublie?</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
