import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const DadosBens = () => {
  const [quantidadeTotal, setQuantidadeTotal] = useState(0);

  function somarQuantidade(e) {
    try {
      let valorAux = Number(e.target.value);
      setQuantidadeTotal((valorAnterior) => valorAnterior + valorAux);
    } catch {
      alert("No campo de quantidade, apenas números são aceitos");
    }
  }

  return (
    <>
      <fieldset className="border p-4 my-3">
        <legend className="mb-4">Descrição dos bens</legend>
        <div className="container">
          <div className="row">
            <div className="col">
              <strong>Descrição dos bens</strong>
            </div>
            <div className="col">
              <strong>Quantidade</strong>
            </div>
          </div>

          {[...Array(8)].map((_, index) => (
            <>
              <div className="row " key={index}>
                <div className="col d-flex">
                  <label>{index}. </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(event) => somarQuantidade(event)}
                  />
                </div>
              </div>
            </>
          ))}
          <div className="row flex-wrap d-flex">
            <div className="col">
              <label>Peso Total: </label>
              <input type="text" className="form-control" />
            </div>

            <div className="col">
              <label>Valor Total: </label>
              <input type="text" className="form-control" />
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
