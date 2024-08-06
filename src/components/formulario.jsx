
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import DadosBens from "./componentesFormulario/dadosBens";
import DadosComprador from "./componentesFormulario/dadosComprador";
import DadosVendedor from "./componentesFormulario/dadosVendedor";
import DadosPagamento from "./componentesFormulario/dadosPagamento";
import Header from "./header";
import Footer from "./footer";



import '../styles.css';

const Formulario = (props) => {
   
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
                    <Link to="/resultado" className="btn btn-success mt-6 col-6">Exibir documento </Link>
                </section>
                <section className="btnImprimir d-flex justify-content-center">
                    
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Formulario;
