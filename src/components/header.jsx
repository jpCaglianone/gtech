import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css'

const Header = () => {

    return (
        <>
            <header>
                <div className='container bg-black'>
                    <figure className='d-flex justify-content-center'> {/* virou background, assim que a imagem correta vier, tira do background e descomenta a linha abaixo, com o caminho correto */}
                        <img className='logo' src='/assets/logoProvisoria.jpeg' alt="GTech Logo" />
                    </figure>
                </div>
            </header>
        </>
    );
};

export default Header;
