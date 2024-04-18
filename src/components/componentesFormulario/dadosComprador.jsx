import React, { useEffect, useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DadosFormulario } from '../../App';
import { UserContext } from "../principal";

const DadosComprador = (props) => {
    const { dadosGerais } = useContext(DadosFormulario);
    const {unidadeSelecionada} = useContext(DadosFormulario);
    const [selectedSubUnidade, setSelectedSubUnidade] = useState('');
    const [subUnidades, setSubUnidades] = useState([]);
    const [infoOpcoes, setInfoOpcoes] = useState([]);
    const {nomeComprador, setNomeComprador} = useContext(DadosFormulario);
    const {cepComprador, setCepComprador}= useContext(DadosFormulario);
    const {enderecoComprador, setEnderecoComprador} = useContext(DadosFormulario);
    const {cnpj, setCnpj} = useContext(DadosFormulario);
    const [infoAux, setInfoAux] = useState();
   
    useEffect(() => {
        if (unidadeSelecionada && dadosGerais) {
            console.log(dadosGerais)
            for (let i in dadosGerais) {
                if (Object.keys(dadosGerais[i]).toString().toLowerCase() === unidadeSelecionada.toLowerCase()) {
                    setSubUnidades(dadosGerais[i]);
                    break;
                }
            }
        }
    }, [unidadeSelecionada, dadosGerais]);

    useEffect(() => {
        const newInfoOpcoes = [];
        for (let i in subUnidades) {
            let aux = subUnidades[i];
            setInfoAux(aux);
            for (let j in aux) {
                const unidMaiuscula = unidadeSelecionada.charAt(0).toUpperCase() + unidadeSelecionada.slice(1);
                newInfoOpcoes.push(unidMaiuscula + " | " + aux[j].extensao);
            }
        }
        setInfoOpcoes(newInfoOpcoes);
    }, [subUnidades, unidadeSelecionada]);

    const handleSubUnidadeChange = (e) => {
        let index = e.target.value;
        let selectedText = e.target.options[e.target.selectedIndex].text;
        setSelectedSubUnidade(selectedText);
        setEnderecoComprador(infoAux[index].endereco);
        setNomeComprador(infoAux[index].nomeFantasia);
        setCepComprador(infoAux[index].cep);
        setCnpj(infoAux[index].cnpj);
    };

    return (
        <>
            <fieldset className="border p-4 my-3">
                <legend className="mb-4">Dados do Comprador</legend>
                <div className="container ">
                    <div className="container">
                        <div className="row my-4">
                            <div className="col-12 d-flex justify-content-around">
                                <div className="col-6">
                                    <select className="form-select form-unidadesInfo" 
                                            aria-label="Default select example"  
                                            onChange={handleSubUnidadeChange}>
                                        <option value="" disabled selected>-- SELECIONE --</option>
                                        {infoOpcoes.map((op, index) => (
                                            <option key={index} value={index} label={op}>{selectedSubUnidade}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="cnpj">CNPJ: {cnpj}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-12 d-flex justify-content-around">
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome: {nomeComprador}</label>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className="form-group">
                                    <label htmlFor="cep">CEP: {cepComprador}</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="endereco">Endereço: {enderecoComprador}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default DadosComprador;
