import React, { useState, useContext, useEffect } from "react";
import { DadosFormulario } from '../../App';
const DadosBens = () => {
  const { quantidadeTotal,
    setQuantidadeTotal,
    itens,
    valorTotal,
    setValorTotal,
    pesoTotal, setPesoTotal } = useContext(DadosFormulario);
  const { dadosBens, setDadosBens } = useContext(DadosFormulario);

  function somarQuantidade(e, index) {
    try {
      let valorAux = Number(e.target.value);
      const newDadosBens = [...dadosBens];
      newDadosBens[index].quantidade = valorAux;
      setDadosBens(newDadosBens);

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

  function handleValor(e) {
    setValorTotal(e.target.value)
  }

  function handlePeso(e) {
    setPesoTotal(e.target.value)
  }

  return (
    <>
      <fieldset className="border p-4 my-3">
        <legend className="mb-4">Descrição dos bens</legend>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <strong>Descrição dos bens</strong>
            </div>
            <div className="col-2">
              <strong>Quantidade</strong>
            </div>
          </div>

          {dadosBens.map((item, index) => (
            <div className="row" key={index}>
              <div className="col-10 d-flex">
                <label>{index}. </label>
                <input
                  type="text"
                  className="form-control"
                  value={item.descricao}
                  onChange={(event) => quantificarDescricaoBens(event, index)}
                />
                <select
                  id={`combo-${index}`}
                  onChange={(event) => quantificarDescricaoBens(event, index)}
                  value={item.descricao}
                >
                  <option value="">Selecione...</option>
                  {itens.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col">
                <input
                  type="number"
                  className="col-2 form-control"
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
              <label>Valor Total: {valorTotal}</label>
              <input type="number" className="form-control" onChange={handleValor} />
            </div>
          </div>
          <div className="col d-flex">
            <label>Quantidade Total: {quantidadeTotal} </label>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default DadosBens;
