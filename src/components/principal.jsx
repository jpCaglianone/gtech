import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Unidade from './unidade';
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { DadosFormulario } from '../App';

export const UserContext = React.createContext();

const Principal = () => {
    const [data, setData] = useState(null);
    const {dadosGerais, setDadosGerais} = useContext(DadosFormulario);
    const {itens, setItens} = useContext(DadosFormulario);
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                setDadosGerais(response.data.detalhesUnidades)
                const detalhesUnidades = response.data.detalhesUnidades;
                const nomesUnidades = detalhesUnidades.map(unidade => Object.keys(unidade)[0]);
                setData(nomesUnidades);

                const response2 = await axios.get('/data/itens.json');
                setItens(response2.data.itens)
                console.log(itens)
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
       };

        fetchData();
    }, []);

    return (
        <>
            <UserContext.Provider value={{data,dadosGerais}}>

               <Unidade dataCombo={data} />

            </UserContext.Provider>
        </>
    );
}

export default Principal;