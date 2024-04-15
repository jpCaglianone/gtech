import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Unidade from './unidade'
import React, { useState } from "react"


const Principal = () => {

    const [tela, setTela] = useState("unidade")

    function confirmarUnidade() {
        setTela("formulario")
    }

    return (
        <>

            {tela === "unidade" ? <Unidade onClick={confirmarUnidade} />

                : <h1>proxima tela</h1>}

        </>
    )
}

export default Principal;