import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'

const Header = () => {

    return (
        <>
            <header>
                <div className='container bg-black'>
                    <figure className='d-flex justify-content-center'>
                        <img className='logo' src='/assets/logo_GTech.png' alt="GTech Logo" />
                    </figure>
                </div>
            </header>
        </>
    );
};

export default Header;
