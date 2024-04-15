import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Unidade from './unidade';
import Formulario from './formulario'
import React, { useState, useEffect } from "react";
import axios from 'axios';

const Principal = () => {
    const [data, setData] = useState(null);
    const [unidade, setUnidade] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                const detalhesUnidades = response.data.detalhesUnidades;
                const nomesUnidades = detalhesUnidades.map(unidade => Object.keys(unidade)[0]);
                setData(nomesUnidades); 
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const [tela, setTela] = useState("unidade");

    function confirmarUnidade(unidadeSelecionada) {
        setTela("formulario");
        setUnidade(unidadeSelecionada)
    }

    return (
        <>
            {tela === "unidade" ? <Unidade onClick={confirmarUnidade} dataCombo = {data}/>
             : <Formulario unidadeSelecionada={unidade} />}
        </>
    );
}

export default Principal;
