import React, { useContext, useState, useEffect } from 'react';
import './contract.css';
import { DadosFormulario } from '../App';

const ContractComponent = () => {
  const [isReady, setIsReady] = useState(false); // Estado para controlar se o componente está pronto para imprimir
  const {
    quantidadeTotal,
    nomeComprador,
    cepComprador,
    enderecoComprador,
    cnpj,
    pixChecked,
    transfChecked,
    dinChecked,
    nomeVendedor,
    cpf,
    dataNascimento,
    cepVendedor,
    enderecoVendedor,
    complemento,
    numero,
    telefone,
    email,
    dadosBens,
    pagamentoBancario,
    pagamentoPix,
    valorTotal,
    pesoTotal
  } = useContext(DadosFormulario);

  // Função para ativar a impressão
  function ativarPrint() {
   
    setTimeout(function () {
      window.print();
    }, 3000);
  }

  ativarPrint()

  const [dia] = useState(new Date().getDate());
  const [mes] = useState(new Date().getMonth() + 1);
  const [ano] = useState(new Date().getFullYear());

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const conteudoParaImprimir = ( 
    <div>
      <div className="c19 doc-content page-break" >
        <p className="c16 c11">
          <img alt="" src="/assets/image2.png" style={{ width: '130px', height: '50px', marginRight:'5px' }} />
          <span className="c46">CONTRATO DE COMPRA E VENDA DE JOIAS</span>
          <img alt="" src="/assets/image1.png" style={{ width: '130px', height: '50px',  marginLeft:'5px'}} />
        </p>

        <p className="c16 c11">
          <span className="c0">PARTES CONTRATANTES</span>
        </p>
        <p className="c5 c11">
          <span className="c8">COMPRADOR:</span>
        </p>
        <p className="c5 c11">
          <span className="c3">Nome:{nomeComprador}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="c3">CNPJ: {cnpj}</span>
        </p>
        <p className="c5 c11 br">
          <span className="c3">Endereço: {enderecoComprador} | {cepComprador} </span> <span className="c3"></span>
        </p>
        <p className="c5 c11 ">
          <span className="c8">VENDEDOR:</span>
        </p>
        <table className="c25">
          <tbody>
            <tr className="c40">
              <td className="c37">
                <p className="c5"><span className="c3">Nome</span></p>
              </td>
              <td className="c44" colSpan="4">
                <p className="c5"><span className="c3">{nomeVendedor}</span></p>
              </td>
            </tr>
            <tr className="c21">
              <td className="c37">
                <p className="c5"><span className="c3">CPF</span></p>
              </td>
              <td className="c17">
                <p className="c5"><span className="c3">{cpf}</span></p>
              </td>
              <td className="c24">
                <p className="c5"><span className="c3">E-mail:</span></p>
              </td>
              <td className="c2" colSpan="2">
                <p className="c5"><span className="c3">{email}</span></p>
              </td>
            </tr>
            <tr className="c23">
              <td className="c37">
                <p className="c5"><span className="c3">Endereço</span></p>
              </td>
              <td className="c17">
                <p className="c5"><span className="c3">{enderecoVendedor} - {complemento} - {numero}</span></p>
              </td>
              <td className="c24">
                <p className="c5"><span className="c3">CEP</span></p>
              </td>
              <td className="c2" colSpan="2">
                <p className="c5"><span className="c3">{cepVendedor}</span></p>
              </td>
            </tr>
            <tr className="c14">
              <td className="c37">
                <p className="c5"><span className="c3">Telefone</span></p>
              </td>
              <td className="c17">
                <p className="c5"><span className="c3">{telefone}</span></p>
              </td>
              <td className="c48" >
                <p className="c5"><span className="c3">Data de nascimento</span></p>
              </td>
              <td className="c29">
                <p className="c5"><span className="c3">{dataNascimento}</span></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c11 c41">
          <span className="c0">OBJETO DO CONTRATO</span>
        </p>
        <p className="c31 c11">
          <span className="c0">O VENDEDOR concorda em vender ao COMPRADOR e o COMPRADOR concorda em comprar os seguintes bens:</span>
        </p>
        <p className="c31 c11">
          <span className="c0">Dados dos Bens:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Quantidade de Bens: {quantidadeTotal}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Peso total: {pesoTotal}</span>
        </p>
        <table className="c25">
          <tbody>
            {dadosBens.map((item, index) => (
              <tr className="c36" key={index}>
                <td className="c22">
                  <p className="c16"><span className="c3">Descrição dos bens</span></p>
                </td>
                <td className="c18">
                  <p className="c5"><span className="c33">{item.descricao}</span></p>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        <p className="c41 c11">
          <span className="c0">VALOR E FORMA DE PAGAMENTO</span>
        </p>
        <table className="c25">
          <tbody>
            <tr className="c34">
              <td className="c39">
                <p className="c5"><span className="c20">O valor total é de: </span></p>
              </td>
              <td className="c38">
                <p className="c5"><span className="c3">R$ {valorTotal}</span></p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="c5 c11">
          <span className="c3">O VENDEDOR concorda em receber o valor acima descrito, que será pago pelo COMPRADOR da seguinte forma:</span>
        </p>
        <p className="c5 c11">
          <span className="c3">Dinheiro <strong>{dinChecked ? " X " : " "}</strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Pix <strong> {pixChecked ? " X " : " "} </strong>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Transferência Bancária
            <strong>{transfChecked ? " X " : " "} </strong></span>
        </p>

        <tbody>
          <tr className="c34">

            <td className="c39a">
              <p className="c5">
                <span className="c20"> Agencia: {transfChecked ? pagamentoBancario.agencia : "   "}
                </span> &nbsp;&nbsp;<span className="c20">Conta: {transfChecked ? pagamentoBancario.conta : "   "}</span></p>
              <p className="c5"><span className="c3">Banco: {transfChecked ? pagamentoBancario.bancoTransf : "   "}</span></p>
            </td>

            <td className="c38">
              <p className="c5">
                <span className="c20"> Chave Pix: {pixChecked ? pagamentoPix.chavePix : "   "}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="c3">Banco: {pixChecked ? pagamentoPix.bancoPix : "   "}</span>
              </p>
              <p className="c5">
                <span className="c3">agencia: {pixChecked ? pagamentoPix.agenciaPix : "   "}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="c20">Conta: {pixChecked ? pagamentoPix.contaPix : "   "}</span>
              </p>
            </td>

          </tr>
        </tbody>
        <table className="c25">
          <tbody>

          </tbody>
        </table>
        <div >
          <p className="c16 c11">
            <span className="c0">CLÁUSULA DE RESPONSABILIDADE LEGAL</span>
          </p>
          <p className="c13 c11">
            <span className="c0">
              O VENDEDOR declara e garante que as joias vendidas neste contrato não são produto de qualquer ato ilícito, incluindo roubo, furto, fraude ou atividades ilegais.
              Garante que as joias são legítimas, de sua propriedade e não estão envolvidas em qualquer disputa legal.
              O VENDEDOR está ciente que caso oculte ou falte com a verdade a respeito da procedência legal dos bens negociados neste contrato, violará as leis aplicáveis ao comércio de produtos, concorrendo ao crime disposto no Artigo 180 do Código Penal e se compromete a indenizar e isentar de toda e qualquer responsabilidade legal o COMPRADOR no caso de as joias aqui negociadas serem posteriormente determinadas como produto de origem ilícita.
            </span>
          </p>
        </div>

        <p className="c16 c11">
          <span className="c0">DISPOSIÇÕES FINAIS</span>
        </p>

        <p className="c13 c11">
          <span className="c0">
            Este contrato representa o acordo completo entre as partes. E foi redigido em consonância ao disposto no Artigo 5º da Lei Ordinária 7005 de maio de 2015.
            Qualquer alteração a este contrato deve ser feita por escrito e assinada por ambas as partes.
            O VENDEDOR declara ter recebido a importância negociada neste contrato, por parte do COMPRADOR e, portanto, transfere neste ato a propriedade dos bens ao COMPRADOR, dando QUITAÇÃO AO CONTRATO em conformidade com os Artigos 481 e 1267 do Código de Processo Civil.
            Por estarem, assim, cientes e de pleno acordo com os termos deste contrato, as partes assinam, firmando um compromisso de confiança e respeito mútuo.
          </span>
        </p>
        <p className="c16 c11"><span className="c3">RIO DE JANEIRO {dia} de {meses[mes]} de {ano}</span></p>
        <p className="c16 c11"><span className="c3">___________________________________________________</span></p>
        <p className="c16 c11"><span className="c43">ASSINATURA DO VENDEDOR</span></p>
      </div>

    </div>
  );

  return conteudoParaImprimir;
};

export default ContractComponent;
