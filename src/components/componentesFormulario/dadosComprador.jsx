import React, { useEffect, useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import { UserContext } from "../principal";

const DadosComprador = (props) => {
    const { dadosGerais } = useContext(UserContext);
    const [unid, setUnid] = useState(props.unidade);
    const [selectedSubUnidade, setSelectedSubUnidade] = useState('');
    const [subUnidades, setSubUnidades] = useState([]);
    const [infoOpcoes, setInfoOpcoes] = useState([]);
    const [infoComprador, setInfoComprador] = useState();
    const [nome, setNome] = useState();
    const [cep, setCep] = useState();
    const [endereco, setEndereco] = useState();
    const [cnpj, setCnpj] = useState();
    const [infoAux, setInfoAux] = useState();

    useEffect(() => {
        // Verifica se a unidade está selecionada e os dados gerais estão disponíveis
        if (unid && dadosGerais) {
            for (let i in dadosGerais) {
                if (Object.keys(dadosGerais[i]).toString().toLowerCase() === unid.toLowerCase()) {
                    setSubUnidades(dadosGerais[i]);
                    break;
                }
            }
        }
    }, [unid, dadosGerais]);

    useEffect(() => {
        // Construir a lista de opções de informação
        const newInfoOpcoes = [];
        for (let i in subUnidades) {
            let aux = subUnidades[i];
            setInfoAux(aux);
            for (let j in aux) {
                const unidMaiuscula = unid.charAt(0).toUpperCase() + unid.slice(1);
                newInfoOpcoes.push(unidMaiuscula + " | " + aux[j].extensao);
            }
        }
        setInfoOpcoes(newInfoOpcoes);
    }, [subUnidades, unid]);

    const handleSubUnidadeChange = (e) => {
        let index = e.target.value;
        const selectedText = e.target.options[e.target.selectedIndex].text;
        setSelectedSubUnidade(selectedText);
        setEndereco(infoAux[index].endereco);
        setNome(infoAux[index].nomeFantasia);
        setCep(infoAux[index].cep);
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
                                <div className="col-7">
                                    <select className="form-select form-unidadesInfo" aria-label="Default select example" value={selectedSubUnidade} onChange={handleSubUnidadeChange}>
                                        <option value="" disabled>-- SELECIONE --</option>
                                        {infoOpcoes.map((op, index) => (
                                            <option key={index} value={index}>{op}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label htmlFor="cnpj">CNPJ: {cnpj}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-12 d-flex justify-content-around">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome: {nome}</label>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="form-group">
                                    <label htmlFor="cep">CEP: {cep}</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="endereco">Endereço: {endereco}</label>
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
