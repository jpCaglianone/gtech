import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; //tem
import InputMask from "react-input-mask"; //tem que instalar
import validaCpf from "../../js/validadorCpf"; // Importa a função validadorCpf do arquivo validador.js

const DadosVendedor = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [numero, setNumero] = useState("");
  const [telefone, setTelefone] = useState("");
  const [validadorDados, setValidadorDados] = useState(false);

  const handleCpfChange = (event) => {
    let novoCpf = event.targer.value
    if (novoCpf.lenght === 11){
      const novoCpf = event.target.value;
      setCpf(novoCpf);
      if (!validaCpf(novoCpf)) {
        alert("CPF inválido!");
        setCpf("");
      }}
  };

  const handleCepChange = async (event) => {
    const novoCep = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setCep(novoCep);

    if (novoCep.length === 8) {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${novoCep}/json/`,
        );
        const { logradouro, complemento, localidade, uf } = response.data;
        if (logradouro === undefined) {
          alert("cep incorreto");
          setCep("");
          setEndereco("");
          setComplemento("");
        } else {
          setEndereco(`${logradouro}, ${localidade} - ${uf}`);
          setComplemento(complemento);
        }
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
        setEndereco("");
        setComplemento("");
      }
    }

 
  };

  return (
    <div>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <InputMask
          mask="999.999.999-99"
          value={cpf}
          onChange={handleCpfChange}
        />
      </div>
      <div>
        <label htmlFor="dataNascimento">Data de Nascimento:</label>
        <InputMask
          mask="99/99/9999"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cep">CEP:</label>
        <InputMask mask="99999-999" value={cep} onChange={handleCepChange} />
      </div>
      <div>
        <label htmlFor="endereco">Endereço:</label>
        <input type="text" id="endereco" value={endereco} readOnly />
      </div>
      <div>
        <label htmlFor="complemento">Complemento:</label>
        <input type="text" id="complemento" value={complemento} />
      </div>
      <div>
        <label htmlFor="numero">Número:</label>
        <input
          type="text"
          id="numero"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <InputMask
          mask="(99) 9 9999-9999"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
    </div>
  );
}

export default DadosVendedor;
