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
        if (["ipanema", "meier", "tijuca"].includes(unid)) {
            setHabilitarBotao(false);
            setUnidadeSelecionada(unid);
        } else {
            setHabilitarBotao(true);
            setUnidadeSelecionada(null);
        }
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
                    <h2 >Antes de continuar, escolha a unidade: </h2>
                    <div className='col-12 col-md-6 mx-auto text-center select-unidade'> {/* Alteração na classe aqui */}
                        <div className="input-group">
                            <select className="form-select" aria-label="Default select example" onChange={seletorUnidade}>
                                <option value="" selected>-- SELECIONE --</option>
                                {options}
                            </select>
                        </div>
                        <div className="mt-3"> {/* Adicionando espaço para o botão em telas menores */}
                            <Link to="/formulario">
                                <button className='button btn btn-warning' disabled={habilitarBotao}>Continuar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
};

export default Unidade;
