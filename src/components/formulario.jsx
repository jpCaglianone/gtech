import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DadosBens from "./componentesFormulario/dadosBens";
import DadosComprador from "./componentesFormulario/dadosComprador";
import DadosVendedor from "./componentesFormulario/dadosVendedor";
import DadosPagamento from "./componentesFormulario/dadosPagamento";
import '../styles.css';


const Formulario = (props) => {

   return (

    <div className="container formulario">

                <section className="dadosComprador">
                    <DadosComprador unidade={props.unidadeSelecionada}/>
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
                    <button className="btn btn-success mt-6 col-3 ">Imprimir</button>
                </section>

               
                

            </div>
   )
} 

export default Formulario;