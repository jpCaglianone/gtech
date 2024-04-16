function validaCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ""); // Remove caracteres não numéricos
    if (cpf === "" || cpf.length !== 11) {
      return false; // CPF deve ter 11 dígitos
    }
  
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    if (
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999" ||
      cpf === "00000000000"
    ) {
      return false;
    }
    // Calcula os dígitos verificadores
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digito1 = resto === 10 || resto === 11 ? 0 : resto;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digito2 = resto === 10 || resto === 11 ? 0 : resto;
  
    if (
      parseInt(cpf.charAt(9)) !== digito1 ||
      parseInt(cpf.charAt(10)) !== digito2
    ) {
      return false;
    }
  
    return true;
  }
  
  export default validaCpf;
  