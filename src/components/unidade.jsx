import React, { useState} from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css';


const Unidade = (props) => {
    const [habilitarBotao, setHabilitarBotao] = useState(true);

    function seletorUnidade(event) {
        const unidadeSelecionada = event.target.value.toLowerCase();
        if (unidadeSelecionada === "ipanema" ||
            unidadeSelecionada === "meier" ||
            unidadeSelecionada === "tijuca" ){
                setHabilitarBotao(false)
            }
        else{
            setHabilitarBotao(true)
        }
    }

    return (
        <>
            <main>
                <div className="container col-8 mx-auto text-center">
                    <h2>Antes de continuar, escolha a unidade: </h2>
                    <div className='col-6 mx-auto text-center select-unidade'>
                        <div className="input-group">
                            <select className="form-select" aria-label="Default select example" onChange={seletorUnidade}>
                                <option value="" selected>-- SELECIONE --</option>
                                <option value="Ipanema">Ipanema</option>
                                <option value="Meier">Meier</option>
                                <option value="Tijuca">Tijuca</option>
                            </select>
                            <button className='button btn btn-warning' disabled={habilitarBotao} onClick={props.onClick}>Continuar</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Unidade;
