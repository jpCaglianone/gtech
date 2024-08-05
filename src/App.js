import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContractComponent from './components/ContractComponent';
import Home from "./components/home";
import React, { useState, createContext } from 'react';
import Formulario from './components/formulario'

export const DadosFormulario = createContext();

const QTD_BENS = 16;

function App() {
  const [camposPreenchidos, setCamposPreenchidos] = useState(false);
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);
  const [selectedSubUnidade, setSelectedSubUnidade] = useState('');
  const [nomeComprador, setNomeComprador] = useState();
  const [cepComprador, setCepComprador] = useState();
  const [enderecoComprador, setEnderecoComprador] = useState();
  const [cnpj, setCnpj] = useState();
  const [infoAux, setInfoAux] = useState();
  const [pixChecked, setPixChecked] = useState(false);
  const [transfChecked, setTransfChecked] = useState(false);
  const [dinChecked, setDinChecked] = useState(false);
  const [pagamentoBancario, setPagamentoBancario] = useState([]);
  const [ pagamentoPix, setPagamentoPix] = useState([]);
  const [nomeVendedor, setNomeVendedor] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cepVendedor, setCepVendedor] = useState("");
  const [enderecoVendedor, setEnderecoVendedor] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [itens, setItens] = useState([]);
  const [dadosGerais, setDadosGerais] = useState([]);
  const [valorTotal, setValorTotal] = useState();
  const [pesoTotal, setPesoTotal] = useState(0);
  const[unidadeSelecionada, setUnidadeSelecionada] = useState();
  const [dadosBens, setDadosBens] = useState(Array.from({ length: QTD_BENS }, () => ({ descricao: "", quantidade: "" })));
  const [valorPorExtenso, setValorPorExtenso] = useState();
  const [imagem, setImagem] = useState();

  return (
    <DadosFormulario.Provider value={{
      camposPreenchidos,
      setCamposPreenchidos,
      quantidadeTotal,
      setQuantidadeTotal,
      selectedSubUnidade,
      setSelectedSubUnidade,
      nomeComprador,
      setNomeComprador,
      cepComprador,
      setCepComprador,
      enderecoComprador,
      setEnderecoComprador,
      cnpj,
      setCnpj,
      infoAux,
      setInfoAux,
      pixChecked,
      setPixChecked,
      transfChecked,
      setTransfChecked,
      dinChecked,
      setDinChecked,
      pagamentoBancario, 
      setPagamentoBancario,
      pagamentoPix, 
      setPagamentoPix,
      nomeVendedor,
      setNomeVendedor,
      cpf,
      setCpf,
      dataNascimento,
      setDataNascimento,
      cepVendedor,
      setCepVendedor,
      enderecoVendedor,
      setEnderecoVendedor,
      complemento,
      setComplemento,
      numero,
      setNumero,
      telefone,
      setTelefone,
      email, 
      setEmail,
      dadosBens,
      setDadosBens,
      dadosGerais, 
      setDadosGerais,
      itens,
      setItens,
      valorTotal,
      setValorTotal,
      unidadeSelecionada, 
      setUnidadeSelecionada,
      pesoTotal, setPesoTotal,
      setValorPorExtenso, valorPorExtenso,
      imagem, setImagem
    }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/resultado" element={<ContractComponent />} />
        </Routes>
      </Router>
    </DadosFormulario.Provider>
  );
}

export default App;
