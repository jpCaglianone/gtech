import React from 'react';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

class DocumentGenerator extends React.Component {
    generateDocument = async () => {
        try {
            // Carregar o arquivo DOCX
            const docxFile = require('../../docs-modelo/24K_JOIAS_REVENDA.docx');
            
            // Carregar o conteúdo do arquivo DOCX em um modelo
            const zip = new PizZip(docxFile);
            const doc = new Docxtemplater();
            doc.loadZip(zip);

            // Dados para substituição
            const data = {
                NOME: 'João da Silva',
                CPF: '123.456.789-00',
                // Outros campos...
            };

            // Realizar substituições
            doc.setData(data);
            doc.render();

            // Gerar o arquivo final
            const output = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });

            // Salvar o arquivo gerado
            saveAs(output, 'documento_gerado.docx');
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <button onClick={this.generateDocument}>Gerar Documento</button>
        );
    }
}

export default DocumentGenerator;
