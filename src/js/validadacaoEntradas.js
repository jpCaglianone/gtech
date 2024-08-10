

// function validaVazioDependente(campoDependente, campoVerificado){

    

//     if (campoDependente.trim() === ""){
//         if (campoVerificado.trim() != ""){
        
//             return true;
//         }
//         else{
//             alert (`Campo {nomeCampo}`)
//         }
//     else{

//     }
//     }

//     return false;
// }

export function validaCampoIndependente (campo){   
    if (campo.trim() === "") {
        return false;
    }
    else{
        return true;
    }
}


export function validarTodosCampos(nomeVendedor,cpf,dataNascimento,cep,enderecoVendedor,telefone, valorTotal, pesoTotal){
    return true
}

