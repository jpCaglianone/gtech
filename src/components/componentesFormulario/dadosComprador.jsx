import React, { useEffect, useState, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { DadosFormulario } from '../../App';
import "../../styles.css";

const DadosComprador = (props) => {
    const { dadosGerais } = useContext(DadosFormulario);
    const { unidadeSelecionada } = useContext(DadosFormulario);
    const [selectedSubUnidade, setSelectedSubUnidade] = useState('');
    const [subUnidades, setSubUnidades] = useState([]);
    const [infoOpcoes, setInfoOpcoes] = useState([]);
    const { nomeComprador, setNomeComprador } = useContext(DadosFormulario);
    const { cepComprador, setCepComprador } = useContext(DadosFormulario);
    const { enderecoComprador, setEnderecoComprador } = useContext(DadosFormulario);
    const { cnpj, setCnpj } = useContext(DadosFormulario);
    const [infoAux, setInfoAux] = useState();
    const { setImagem } = useContext(DadosFormulario)


    useEffect(() => {
        if (unidadeSelecionada && dadosGerais) {
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

        let urlImg
        if (infoAux[index].extensao.trim().toLowerCase() === "second hand") {
            urlImg = "/assets/image_REV.png";
        } else if (infoAux[index].extensao.trim().toLowerCase() === "24k") {
            urlImg = "/assets/image_24K.png";
        } else if (infoAux[index].extensao.trim().toLowerCase() === "gti") {
            urlImg = "/assets/image_GTI.png";
        } else if (infoAux[index].extensao.trim().toLowerCase() === "gtt") {
            urlImg = "/assets/image_GTT.png";
        } else if (infoAux[index].extensao.trim().toLowerCase() === "scrap") {
            urlImg = "/assets/image2.png";
        }
        else{
            urlImg="/assets/logo_GTech.png"
        }
        setImagem(urlImg)

    };
    return (
        <>
            <fieldset className="border p-4 my-3">
                <legend className="mb-4">Dados do Comprador</legend>
                <div className="container">
                    <div className="row my-4 flex-wrap">
                        <div className="col-12 col-sm-6 mb-3"> {/* Defina a largura para ocupar 100% na tela pequena e metade na tela grande */}
                            <select className="form-select form-unidadesInfo"
                                aria-label="Default select example"
                                onChange={handleSubUnidadeChange}>
                                <option value="" disabled selected>-- SELECIONE --</option>
                                {infoOpcoes.map((op, index) => (
                                    <option key={index} value={index} label={op}>{selectedSubUnidade}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-sm-6 mb-3"> {/* Defina a largura para ocupar 100% na tela pequena e metade na tela grande */}
                            <div className="d-flex align-items-center">
                                <label htmlFor="nome">Nome:</label>
                                <span>{nomeComprador}</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-3"> {/* Defina a largura para ocupar 100% na tela pequena e metade na tela grande */}
                            <div className="d-flex  align-items-center">
                                <label htmlFor="cep">CEP:</label>
                                <span>{cepComprador}</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-3">
                            <div className="d-flex align-items-center">
                                <label htmlFor="endereco">Endereço:</label>
                                <span>{enderecoComprador}</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 mb-3"> {/* Defina a largura para ocupar 100% na tela pequena e metade na tela grande */}
                            <div className="d-flex align-items-center">
                                <label htmlFor="cnpj">CNPJ: </label>
                                <span>{cnpj}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

        </>
    )
}

export default DadosComprador;
