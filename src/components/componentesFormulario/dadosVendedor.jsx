import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import InputMask from "react-input-mask";
import validaCpf from "../../js/validadorCpf";
import { DadosFormulario } from '../../App';
import { validaCampoIndependente } from '../../js/validadacaoEntradas';


const DadosVendedor = () => {
  const {
    nomeVendedor, setNomeVendedor,cpf, setCpf,
    dataNascimento, setDataNascimento,
    cepVendedor, setCepVendedor,
    enderecoVendedor, setEnderecoVendedor,
    complemento, setComplemento,
    numero, setNumero, telefone, setTelefone,
    email, setEmail
  } = useContext(DadosFormulario);

  const [campoVazio, setCampoVazio] = useState({
    nome : true,
    cpf: true,
    email: true,
    dataNascimento : true
  });

  
  function validarCampoVazio(e, nomeCampo) {
    let obj = nomeCampo;
    setCampoVazio((anterior) => {
      const novoEstado = { ...anterior, [obj]: validaCampoIndependente(e) };
      console.log(novoEstado);
      return novoEstado;
    });
  }

  const handleCpfChange = (event) => {
    const novoCpf = event.target.value.replace(/\D/g, "");
    setCpf(novoCpf);
    if (novoCpf.length === 11 && !validaCpf(novoCpf)) {
      alert("CPF inválido!");
      setCpf("");
    }
  };

  const handleCepChange = async (event) => {
    const novoCep = event.target.value.replace(/\D/g, ""); 
    setCepVendedor(novoCep);
    if (novoCep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${novoCep}/json/`
        );
        const { logradouro, complemento, localidade, uf } = response.data;
        if (logradouro === undefined) {
          alert("CEP incorreto");
          setCepVendedor("");
          setEnderecoVendedor("");
          setComplemento("");
        } else {
          setEnderecoVendedor(`${logradouro}, ${localidade} - ${uf}`);
          setComplemento(complemento);
        }
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
        setCepVendedor("");
        setEnderecoVendedor("");
        setComplemento("");
      }
    }
  };

  
  return (
    <fieldset className="border p-4">
      <legend className="mb-4">Dados do Vendedor</legend>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            value={nomeVendedor}
            onChange={(e) => setNomeVendedor(e.target.value)}
            onBlur={(e) => validarCampoVazio(e.target.value, "nome")}            
          />
          {campoVazio.nome ? null : <p className="text-danger"> <strong >Campo Obrigatório</strong></p>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="text"
            id="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            onBlur={(e) => validarCampoVazio(e.target.value, "email")}            
            />
            {campoVazio.email ? null : <p className="text-danger"> <strong >Campo Obrigatório</strong></p>}
          
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cpf" className="form-label">CPF:</label>
          <InputMask
            mask="999.999.999-99"
            inputMode="numeric"
            value={cpf}
            className="form-control"
            onChange={handleCpfChange}      
            onBlur={(e) => validarCampoVazio(e.target.value, "cpf")}            
          />
          {campoVazio.cpf ? null : <p className="text-danger"> <strong >Campo Obrigatório</strong></p>}
        
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="dataNascimento" className="form-label">Data de Nascimento:</label>
          <InputMask
            mask="99/99/9999"
            inputMode="numeric"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            
            className="form-control"
            onBlur={(e) => validarCampoVazio(e.target.value, "dataNascimento")}            
            />
            {campoVazio.dataNascimento ? null : <p className="text-danger"> <strong >Campo Obrigatório</strong></p>}
          
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="cep" className="form-label">CEP:</label>
          <InputMask
            mask="99999-999"
            inputMode="numeric"
            value={cepVendedor}
            onChange={handleCepChange}      
            className="form-control"
            onBlur={(e) => validarCampoVazio(e.target.value, "cep")}            
            />
            {campoVazio.cep ? null : <p className="text-danger"> <strong >Campo Obrigatório</strong></p>}
          
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="endereco" className="form-label">Endereço:</label>
          <input
            type="text"
            id="endereco"
            className="form-control"
            value={enderecoVendedor}
                  
            readOnly
          />
           
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="complemento" className="form-label">Complemento:</label>
          <input
            type="text"
            id="complemento"
            className="form-control"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="numero" className="form-label">Número:</label>
          <input
            type="text"
            id="numero"
            className="form-control"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="telefone" className="form-label">Telefone:</label>
          <InputMask
            mask="(99) 9 9999-9999"
            inputMode="numeric"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            
            className="form-control"
          />
           
        </div>
      </div>
    </div>
    </fieldset>
  );
};

export default DadosVendedor;
