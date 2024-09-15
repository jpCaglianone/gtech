import React, { useContext, useEffect, useState, useRef } from 'react';
import './contract.css';
import { DadosFormulario } from '../App';
import { useReactToPrint } from "react-to-print";
import numeroPorExtenso from '../js/valorPorExtenso'
import html2pdf from 'html2pdf.js';

export const ContractComponent = () => {

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        pageStyle: `
            @media print {
                @page {
                    size: letter;
                    margin: -0.2in 0.25in -0.2in 0.1in; /* Margens: [top, right, bottom, left] */
                }
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        `,
    });


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
        valorPorExtenso,
        setValorPorExtenso,
        email,
        dadosBens,
        pagamentoBancario,
        pagamentoPix,
        valorTotal,
        pesoTotal,
        imagem,
        tipoDocumento
    } = useContext(DadosFormulario);

    //#region conts
    const [dia] = useState(new Date().getDate());
    const [mes] = useState(new Date().getMonth());
    const [ano] = useState(new Date().getFullYear());
    const [hora] = useState(new Date().getHours());
    const [minuto] = useState(new Date().getMinutes());
    const [segundo] = useState(new Date().getSeconds());
    const [cpfFormatado, setCpfFormatado] = useState();
    const [cepVendedorFormatado, setCepVendedorFormatado] = useState("");
    const [cepCompradorFormatado, setCepCompradorFormatado] = useState("");
    //#endregion

    const printRef = useRef()

    const formatCPF = (cpf) => {

        const cleanedCPF = cpf.replace(/\D+/g, '');

        const formattedCPF = cleanedCPF
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        return formattedCPF;
    }

    function formatCEP(cep) {

        const cleanedCEP = cep.replace(/\D+/g, '');

        const formattedCEP = cleanedCEP
            .replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');

        return formattedCEP;
    }


    useEffect(() => {

        const handleDownload = () => {
            if (printRef.current) {
                const options = {
                    margin: [-0.2, 0.25, -0.2, 0.1],
                    filename: `orcGTech_${nomeVendedor} - ${nomeComprador} - ${dia}${mes}${ano}${hora}${minuto}${segundo}.pdf`,
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf()
                    .from(printRef.current)
                    .set(options)
                    .save(`orcGTech_${nomeVendedor} - ${nomeComprador} - ${dia}${mes}${ano}${hora}${minuto}${segundo}.pdf`);
            }
        }

        function stringComVirgulaParaNumero(str) {
            str = str.replace('R$', '').trim();
            str = str.replace(/\./g, '');
            str = str.replace(',', '.');

            return parseFloat(str);
        }

        if (valorTotal) {
            let numExtenso = stringComVirgulaParaNumero(valorTotal).toString();
            numExtenso = numeroPorExtenso(numExtenso);
            setValorPorExtenso(String(numExtenso));
        }

        setCpfFormatado(formatCPF(cpf));
        setCepVendedorFormatado(formatCEP(cepVendedor));
        setCepCompradorFormatado(formatCEP(cepComprador));

        setTimeout(() => {
            handlePrint();
            handleDownload();
        }, 1000);

    }, [cepComprador, cepVendedor, cpf, setValorPorExtenso, handlePrint, valorTotal, ano, mes, dia, hora, minuto, segundo, nomeComprador, nomeVendedor]);



    return (
        <>

            <div id='conteudo' ref={printRef}>
                <br />
                <div className="c19 doc-content page-break" >
                    <p className="c16a c11 d-flex" style={{ margin: '0 auto' }}>
                        <img alt="" src={imagem} style={{ width: '185px', height: '50px', marginRight: '6px' }} />


                        {tipoDocumento === "joias" ?

                            <span className="c46">CONTRATO DE COMPRA E VENDA DE JOIAS</span>
                            :

                            tipoDocumento === "bolsas" ?

                                <span className="c46 col-5">CONTRATO DE AVALIAÇÃO, COMPRA E VENDA
                                    DE BOLSAS E ARTIGOS DE LUXO
                                </span>

                                :

                                <script>
                                    alert("Houve um erro com a configuração do produto!")
                                </script>

                        }

                        <img alt="" src="/assets/image1.png" style={{ width: '185px', height: '50px', marginLeft: '6px' }} />
                    </p>
                    <p className="c16 c11">
                        <br />
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
                        <span className="c3">Endereço: {enderecoComprador} | {cepCompradorFormatado} </span> <span className="c3"></span>
                    </p>
                    <div className='br'> </div><div className='br'> </div>
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
                                    <p className="c5"><span className="c3">{cpfFormatado}</span></p>
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
                                    <p className="c5"><span className="c3">{cepVendedorFormatado}</span></p>
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
                    &nbsp;&nbsp;&nbsp;
                    <p className="c11 c41">
                        <span className="c0">OBJETO DO CONTRATO</span>
                    </p>
                    <p className="c31 c11">
                        <span className="c0">O VENDEDOR concorda em vender ao COMPRADOR e o COMPRADOR concorda em comprar os seguintes bens:</span>
                    </p>
                    <p className="c31 c11">
                        <span className="c0">Dados dos Bens:
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Quantidade de Bens: {quantidadeTotal}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Peso total: {pesoTotal} gr</span>
                    </p>
                    <table className="c25">
                        <tbody>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6'>
                                        {dadosBens.slice(0, Math.ceil(dadosBens.length / 2)).map((item, index) => (
                                            <tr className="c36" key={index}>
                                                <td className="c22">
                                                    <p className="c16"><span className="c3">Item {index + 1}.</span></p>
                                                </td>
                                                <td className="c18">
                                                    <p className="c5"><span className="c33">{item.descricao}</span></p>
                                                </td>
                                                <td className="c22a">
                                                    <p className="c5"><span className="c33">Qtd.</span></p>
                                                </td>
                                                <td className="c22">
                                                    <p className="c5"><span className="c33">{item.quantidade}</span></p>
                                                </td>
                                            </tr>
                                        ))}
                                    </div>
                                    <div className='col-6'>
                                        {dadosBens.slice(Math.ceil(dadosBens.length / 2)).map((item, index) => (
                                            <tr className="c36" key={index + Math.ceil(dadosBens.length / 2)}>
                                                <td className="c22">
                                                    <p className="c16"><span className="c3">Item {index + Math.ceil(dadosBens.length / 2) + 1}.</span></p>
                                                </td>
                                                <td className="c18">
                                                    <p className="c5"><span className="c33">{item.descricao}</span></p>
                                                </td>
                                                <td className="c22a">
                                                    <p className="c5"><span className="c33">Qtd.</span></p>
                                                </td>
                                                <td className="c22">
                                                    <p className="c5"><span className="c33">{item.quantidade}</span></p>
                                                </td>
                                            </tr>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </tbody>
                    </table>
                    <div className='br'> </div>
                    <div className='br'> </div>
                    <div className='br'> </div>
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
                                    <p className="c5"><span className="c3">{valorTotal} - {valorPorExtenso}</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='br'> </div><div className='br'> </div>
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
                    <div className='br'> </div><div className='br'> </div>
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
                        &nbsp;&nbsp;&nbsp;
                        {

                            tipoDocumento === "joias" ?

                                <div id="clausula-contrato">
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

                                    <p className="c16 c11">
                                        <span className="c0">DISPOSIÇÕES FINAIS</span>
                                    </p>

                                    <p className="c13 c11 br">
                                        <span className="c0 ">
                                            Este contrato representa o acordo completo entre as partes. E foi redigido em consonância ao disposto no Artigo 5º da Lei Ordinária 7005 de maio de 2015.
                                            Qualquer alteração a este contrato deve ser feita por escrito e assinada por ambas as partes.
                                            O VENDEDOR declara ter recebido a importância negociada neste contrato, por parte do COMPRADOR e, portanto, transfere neste ato a propriedade dos bens ao COMPRADOR, dando QUITAÇÃO AO CONTRATO em conformidade com os Artigos 481 e 1267 do Código de Processo Civil.
                                            Por estarem, assim, cientes e de pleno acordo com os termos deste contrato, as partes assinam, firmando um compromisso de confiança e respeito mútuo.
                                        </span>
                                    </p>


                                </div>


                                :

                                tipoDocumento === "bolsas" ?

                                    <div id="clausula-contrato">

                                        <p className="c13 c11">
                                            <span className="c0">
                                                <strong>CLÁUSULA DE RESPONSABILIDADE LEGAL: </strong>
                                                O VENDEDOR declara ciência de que deixa suas peças para avaliação de autenticidade do COMPRADOR e que somente após laudo positivo receberá a quantia acordada neste documento. Caso o laudo seja negativo, o VENDEDOR compromete-se a arcar com os custos do documento de autenticidade (U$ 45,00 na cotação vigente atualizada) e retirar suas peças sem obrigatoriedade do COMPRADOR em seguir com a negociação e não tendo ônus financeiro para o mesmo.
                                                O VENDEDOR declara e garante que as bolsas e/ou artigos de luxo vendidos neste contrato não são produto de qualquer ato ilícito, incluindo roubo, furto, fraude ou atividades ilegais.
                                                Garante que as bolsas e/ou artigos de luxo são legítimos, de sua propriedade e não estão envolvidos em qualquer disputa legal.
                                                O VENDEDOR está ciente que caso oculte ou falte com a verdade a respeito da procedência legal dos bens negociados neste contrato, violará as leis aplicáveis ao comércio de produtos, concorrendo ao crime disposto no Artigo 180 do Código Penal e se compromete a indenizar e isentar de toda e qualquer responsabilidade legal o COMPRADOR no caso de as bolsas e/ou artigos de luxo aqui negociados serem posteriormente determinados como produto de origem ilícita.
                                                <br />
                                                <strong>DISPOSIÇÕES FINAIS</strong>
                                                Este contrato representa o acordo completo entre as partes. E foi redigido em consonância ao disposto no Artigo 5º da Lei Ordinária 7005 de maio de 2015.
                                                Qualquer alteração a este contrato deve ser feita por escrito e assinada por ambas as partes.
                                                O VENDEDOR declara ter recebido a importância negociada neste contrato, por parte do COMPRADOR e, portanto, transfere neste ato a propriedade dos bens ao COMPRADOR, dando QUITAÇÃO AO CONTRATO em conformidade com os Artigos 481 e 1267 do Código de Processo Civil.
                                                Por estarem, assim, cientes e de pleno acordo com os termos deste contrato, as partes assinam, firmando um compromisso de confiança e respeito mútuo.

                                            </span>
                                        </p>
                                    </div>

                                    : "Erro ao redigir a clausula - tipo de documento não selecionado"

                        }


                        <div className='br'> </div><div className='br'> </div>


                    </div>
                    <p className="c16 c11 "><span className="c3">RIO DE JANEIRO {dia} de {meses[mes]} de {ano}</span></p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <p className="c16 c11"><span className="c3">___________________________________________________</span></p>
                    <p className="c16 c11"><span className="c43">ASSINATURA DO VENDEDOR</span></p>
                </div>

            </div>
        </>
    )
}
