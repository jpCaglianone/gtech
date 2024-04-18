import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DadosFormulario } from '../../App';

const DadosPagamento = () => {
  const {pixChecked, setPixChecked} = useContext(DadosFormulario);
  const {transfChecked, setTransfChecked} = useContext(DadosFormulario);
  const {dinChecked, setDinChecked} = useContext(DadosFormulario);
  const {pagamentoBancario, setPagamentoBancario} = useContext(DadosFormulario);
  const {pagamentoPix, setPagamentoPix} = useContext(DadosFormulario);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="dinheiroCheckbox"
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
              onChange={() => setPixChecked(!pixChecked)}
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
              onChange={() => setTransfChecked(!transfChecked)}
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
            <div className="mb-3">
              <label htmlFor="chavePix" className="form-label">
                Chave Pix:
              </label>
              <input type="text" className="form-control" id="chavePix" />
            </div>
            <div className="mb-3">
              <label htmlFor="bancoPix" className="form-label">
                Banco:
              </label>
              <input type="text" className="form-control" id="bancoPix" />
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
              <input type="text" className="form-control" id="bancoTransf" />
            </div>
            <div className="mb-3">
              <label htmlFor="agencia" className="form-label">
                Agência:
              </label>
              <input type="text" className="form-control" id="agencia" />
            </div>
            <div className="mb-3">
              <label htmlFor="conta" className="form-label">
                Conta:
              </label>
              <input type="text" className="form-control" id="conta" />
            </div>
          </fieldset>
        )}
      </div>

      
    </div>
  );
};

export default DadosPagamento;
