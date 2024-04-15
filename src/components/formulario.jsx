import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DadosBens from "./componentesFormulario/dadosBens";
import DadosComprador from "./componentesFormulario/dadosComprador";
import DadosVendedor from "./componentesFormulario/dadosVendedor";
import DadosPagamento from "./componentesFormulario/dadosPagamento";
import DadosRodape from "./componentesFormulario/dadosRodape";

const Formulario = (props) => {
    
   return (

    <div className="container formulario">

                <section className="dadosComprador">
                    <DadosComprador />
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
                
                <section className="dadosRodape">
                    <DadosRodape />
                </section>
            </div>
   )
} 

export default Formulario;