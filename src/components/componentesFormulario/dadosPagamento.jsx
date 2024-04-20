import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DadosFormulario } from '../../App';

const DadosPagamento = () => {
  const {
    pixChecked, setPixChecked,
    transfChecked, setTransfChecked,
    pagamentoBancario, setPagamentoBancario,
    pagamentoPix, setPagamentoPix,
    dinChecked, setDinChecked,
    cpf, telefone
  } = useContext(DadosFormulario);


  const handleInputChange = (e, field, type) => {
    const value = e.target.value;
    if (type === "bancario") {
      setPagamentoBancario(prevState => ({
        ...prevState,
        [field]: value
      }));
    } else if (type === "pix") {
      setPagamentoPix(prevState => ({
        ...prevState,
        [field]: value
      }));
    }
  };

  function pixChange(e, field) {
    let evento = e.target.value;
    let value = evento === "CPF" ? cpf : evento === "Telefone" ? telefone : "";
    if (evento === "CPF" || evento === "Telefone") {
      setPagamentoPix(prevState => ({
        ...prevState,
        [field]: value
      }));
    }
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="dinheiroCheckbox"
              checked={dinChecked}
              onChange={() => {
                setDinChecked(!dinChecked);
              }}
            />
            <label className="form-check-label" htmlFor="dinheiroCheckbox">
              Dinheiro
            </label>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="pixCheckbox"
              checked={pixChecked}
              onChange={() => {
                setPixChecked(!pixChecked);
              }}
            />
            <label className="form-check-label" htmlFor="pixCheckbox">
              Pix
            </label>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="transfCheckbox"
              checked={transfChecked}
              onChange={() => {
                setTransfChecked(!transfChecked);
              }}
            />
            <label className="form-check-label" htmlFor="transfCheckbox">
              Transferência bancária
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {pixChecked && (

          <fieldset className="col-sm-6" disabled={!pixChecked}>

            <legend>Pix</legend>

            <label htmlFor="chavePix" className="form-label">
              Chave Pix:
            </label>

            <div className="col-12 mb-3 d-flex">

              <input
                type="text"
                className="form-control"
                id="chavePix"
                onChange={(e) => handleInputChange(e, "chavePix", "pix")}
                value={pagamentoPix.chavePix || ""}
              />
              <select className="form-select form-unidadesInfo"
                onChange={(e) => pixChange(e, "chavePix")}
                aria-label="Default select example"
              >
                <option value="" disabled selected>-- SELECIONE --</option>
                <option value="CPF">CPF</option>
                <option value="Telefone">Telefone</option>
              </select>
            </div>

            <div className="container d-flex ">

              <div className="col-6">
                <label htmlFor="bancoPix" className="form-label">
                  Banco:
                </label>
                <div className="col-11 mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="bancoPix"
                    onChange={(e) => handleInputChange(e, "bancoPix", "pix")}
                    value={pagamentoPix.bancoPix || ""}
                  />
                </div>
              </div>

              <div className="col-6">
                <label htmlFor="agenciaPix" className="form-label">
                  Agencia:
                </label>
                <div className="col-11 mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="agenciaPix"
                    onChange={(e) => handleInputChange(e, "agenciaPix", "pix")}
                    value={pagamentoPix.agenciaPix || ""}
                  />
                </div>
              </div>

              <div className="col-6">
                <label htmlFor="contaPix" className="form-label">
                  Conta:
                </label>
                <div className="col-11 mb-3 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="contaPix"
                    onChange={(e) => handleInputChange(e, "contaPix", "pix")}
                    value={pagamentoPix.contaPix || ""}
                  />
                </div>
              </div>


            </div>

          </fieldset>
        )}

        {transfChecked && (
          <fieldset className="col-sm-6" disabled={!transfChecked}>
            <legend>Transferência bancária</legend>
            <div className="mb-3">
              <label htmlFor="bancoTransf" className="form-label">
                Banco:
              </label>
              <input
                type="text"
                className="form-control"
                id="bancoTransf"
                onChange={(e) => handleInputChange(e, "bancoTransf", "bancario")}
                value={pagamentoBancario.bancoTransf || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="agencia" className="form-label">
                Agência:
              </label>
              <input
                type="text"
                className="form-control"
                id="agencia"
                onChange={(e) => handleInputChange(e, "agencia", "bancario")}
                value={pagamentoBancario.agencia || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="conta" className="form-label">
                Conta:
              </label>
              <input
                type="text"
                className="form-control"
                id="conta"
                onChange={(e) => handleInputChange(e, "conta", "bancario")}
                value={pagamentoBancario.conta || ""}
              />
            </div>
          </fieldset>
        )}
      </div>
    </div>
  );
};

export default DadosPagamento;
