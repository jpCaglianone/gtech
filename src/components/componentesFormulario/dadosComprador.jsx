import React, { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

const DadosComprador = (props) => {

    const [unid, setUnid] = useState(props.unidade)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                let unidadesDesejadas = response.data.detalhesUnidades.map(unidade => Object.keys(unidade)[0]);
                setUnid(unidadesDesejadas)

            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-2">
                        <select className="form-select form-unidadesInfo" aria-label="Default select example">
                            <option value="" selected>-- SELECIONE --</option>
                            {Array.isArray(unid) && unid.map(u => (
                                <option key={u} value={u}>{u}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}


export default DadosComprador;