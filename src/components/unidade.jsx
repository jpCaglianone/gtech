import React, { useContext, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles.css';
import { Link } from 'react-router-dom';
import { DadosFormulario } from '../App';

const Unidade = (props) => {
    const [habilitarBotao, setHabilitarBotao] = useState(true);
    const { setUnidadeSelecionada } = useContext(DadosFormulario)

    function seletorUnidade(event) {
        const unid = event.target.value.toLowerCase();
        if (["ipanema", "meier", "tijuca"].includes(unid) ) {
            
            setHabilitarBotao(false);
            setUnidadeSelecionada(unid);
        } else {
            setHabilitarBotao(true);
            setUnidadeSelecionada(null);
        }
    }

    function seletorTipoDoc () {

    }
    


    let options = [];
    if (props.dataCombo && Array.isArray(props.dataCombo)) {
        options = props.dataCombo.map(element => (
            <option key={element} value={element.toLowerCase()}>{element}</option>
        ));
    }

    return (
        <>

            <main>
                <div className="container mx-auto text-center">
                    <h1>Antes de continuar, escolha a unidade e o tipo do documento solicitado: </h1>
                    <div className='col-12 col-md-6 mx-auto text-center select-unidade'> 
                        <div className="input-group text-center">
                            <h2>Unidade: </h2> 
                            <div className='col-1'></div>
                            <select className="form-select" aria-label="Default select example" onChange={seletorUnidade}>
                                <option value="" selected>-- SELECIONE --</option>
                                {options}
                            </select>
                        </div>
                        <div className='row my-3'></div>
                        <div className="input-group text-center">
                            <h2>Tipo do orçamento: </h2> 
                            <div className='col-1'></div>
                            <select className="form-select" aria-label="Default select example" onChange={seletorTipoDoc}>
                                <option value="" selected>-- SELECIONE --</option>
                                <option key="bolsas" value="bolsas">Bolsas</option>
                                <option key="joias" value="joias">Jóias</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            { habilitarBotao ? 
                            "" : <Link to="/formulario">
                            <button className='button btn btn-warning' disabled={habilitarBotao}>Continuar</button>
                        </Link>}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Unidade;
