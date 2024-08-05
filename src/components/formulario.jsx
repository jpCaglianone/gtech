import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DadosBens from "./componentesFormulario/dadosBens";
import DadosComprador from "./componentesFormulario/dadosComprador";
import DadosVendedor from "./componentesFormulario/dadosVendedor";
import DadosPagamento from "./componentesFormulario/dadosPagamento";
import Header from "./header";
import Footer from "./footer";

import { validarTodosCampos } from '../js/validadacaoEntradas';


import '../styles.css';

import { DadosFormulario } from '../App';

const Formulario = (props) => {
    const {nomeVendedor,cpf,dataNascimento,cep,enderecoVendedor,telefone, valorTotal, pesoTotal} = useContext(DadosFormulario);

    return (
        <>
            <Header />
            <Link to="/">
                <button className="btn btn-danger">Voltar</button>
            </Link>
            <div className="container formulario">
                <section className="dadosComprador">
                    <DadosComprador unidade={props.unidadeSelecionada} />
                </section>
                <section className="dadosVendedor">
                    <DadosVendedor />
                </section>
                <section className="dadosBens">
                    <DadosBens />
                </section>
                <section className="dadosPagamento">
                    <DadosPagamento />
                </section>
                <section className="btnImprimir d-flex justify-content-center">
                    <Link
                        to={validarTodosCampos ? "#" : "/resultado"}
                        className={`btn btn-success mt-6 col-6 ${validarTodosCampos(nomeVendedor,cpf,dataNascimento,cep,enderecoVendedor,telefone, valorTotal, pesoTotal) ? "disabled" : ""}`}
                        aria-disabled={validarTodosCampos(nomeVendedor,cpf,dataNascimento,cep,enderecoVendedor,telefone, valorTotal, pesoTotal) ? "true" : "false"}
                        onClick={(e) => validarTodosCampos(nomeVendedor,cpf,dataNascimento,cep,enderecoVendedor,telefone, valorTotal, pesoTotal) && e.preventDefault()}
                    >
                        Exibir documento
                    </Link>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Formulario;
