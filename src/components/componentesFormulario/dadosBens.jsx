import React, { useState, useContext } from "react";
import { DadosFormulario } from '../../App';

const DadosBens = () => {

  const { quantidadeTotal,
    setQuantidadeTotal,
    itens,
    pesoTotal, setPesoTotal } = useContext(DadosFormulario);
  const { dadosBens, setDadosBens } = useContext(DadosFormulario);
 
  function somarQuantidade(e, index) {


    try {
      let valorAux = Number(e.target.value);
      const newDadosBens = [...dadosBens];
      newDadosBens[index].quantidade = valorAux;
      setDadosBens(newDadosBens);
      if (newDadosBens[index].descricao.toLowerCase().includes('par')) {
        newDadosBens[index].quantidade *= 2;
      }
      let total = newDadosBens.reduce((acc, item) => acc + (item.quantidade || 0), 0);
      setQuantidadeTotal(total);
    } catch {
      alert("No campo de quantidade, apenas números são aceitos");
    }
    
  }

  function quantificarDescricaoBens(e, index) {
    const newDadosBens = [...dadosBens];
    newDadosBens[index].descricao = e.target.value;
    setDadosBens(newDadosBens);
  }

  function handlePeso(e) {
    setPesoTotal(e.target.value)
  }

  const [centavos, setCentavos] = useState('');

  const handleCentavos = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    setCentavos(inputValue);
  };

  const formatCurrency = (value) => {
    const valorEmReais = parseFloat(value) / 100; // Convertendo centavos para reais
    if (!isNaN(valorEmReais)) {
      return valorEmReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      return "R$ 0,00";
    }
  };
  

  return (
    <>
      <fieldset className="border p-4 my-3">
        <legend className="mb-4">Descrição dos bens</legend>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <strong>Descrição dos bens</strong>
            </div>
            <div className="col-2">
              <strong>Quantidade</strong>
            </div>
          </div>

          {dadosBens.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-9 d-flex">
                <label>{index + 1}. </label>
                <input
                  type="text"
                  className="form-control"
                  value={item.descricao}
                  onChange={(event) => quantificarDescricaoBens(event, index)}
                />
                <select
                  id={`combo-${index}`}
                  className="col-4"
                  onChange={(event) => quantificarDescricaoBens(event, index)}
                  value={item.descricao}
                >
                  <option value="">Selecione...</option>
                  {itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col-3">
                <input
                  id = "quantidadeBens"
                  type="number"
                  className="col-4 form-control"
                  value={item.quantidade}
                  onChange={(event) => somarQuantidade(event, index)}
                />
              </div>
            </div>
          ))}
          <div className="row flex-wrap d-flex">
            <div className="col">
              <label>Peso Total: {pesoTotal} </label>
              <input type="number" className="form-control" onChange={handlePeso} />
            </div>

            <div className="col">
              <label>Valor Total: </label>
              <input type="text" className="form-control" value={formatCurrency(centavos)} onChange={handleCentavos} />
            </div>

          </div>
          <div className="col d-flex">
            <label>Quantidade Total: {quantidadeTotal} gr </label>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DadosBens;
