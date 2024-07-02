function numeroPorExtenso(numero) {
    var unidades = [
      "",
      "um",
      "dois",
      "três",
      "quatro",
      "cinco",
      "seis",
      "sete",
      "oito",
      "nove",
    ];
    var especiais = [
      "dez",
      "onze",
      "doze",
      "treze",
      "quatorze",
      "quinze",
      "dezesseis",
      "dezessete",
      "dezoito",
      "dezenove",
    ];
    var dezenas = [
      "",
      "dez",
      "vinte",
      "trinta",
      "quarenta",
      "cinquenta",
      "sessenta",
      "setenta",
      "oitenta",
      "noventa",
    ];
    var centenas = [
      "cem",
      "cento",
      "duzentos",
      "trezentos",
      "quatrocentos",
      "quinhentos",
      "seiscentos",
      "setecentos",
      "oitocentos",
      "novecentos",
    ];
    var milhares = ["", "mil", "milhão(s)"];

    function porExtenso(num) {
      if (num < 10) return unidades[num];
      else if (num < 20) return especiais[num - 10];
      else if (num < 100)
        return (
          dezenas[Math.floor(num / 10)] +
          (num % 10 !== 0 ? " e " + unidades[num % 10] : "")
        );
      else
       var cemNome
       if (num%100 === 0 && num/100 === 1){
        cemNome = 0
       }
       else{
          cemNome = Math.floor(num / 100)
       }
 
        return (
          "e " + centenas[cemNome] +
          (num % 100 !== 0 ? " e " + porExtenso(num % 100) : "")
        );

    }

    var reais = Math.floor(numero);
    var centavos = Math.round((numero - reais) * 100);

    var reaisPorExtenso = "";
    var centavosPorExtenso = "";

    if (reais === 0) {
      reaisPorExtenso = "zero reais";
    } else {
      var partes = [];
      var parte;

      while (reais > 0) {
        parte = reais % 1000;
        reais = Math.floor(reais / 1000);
        partes.unshift(parte);
      }

      for (var i = 0; i < partes.length; i++) {
        if (partes[i] !== 0) {
          reaisPorExtenso +=
            porExtenso(partes[i]) + " " + milhares[partes.length - i - 1] + " ";
        }
      }
      reaisPorExtenso = reaisPorExtenso.trim();
    }

    reaisPorExtenso += " reais";

    if (centavos > 0) {
      centavosPorExtenso = "e " + porExtenso(centavos) + " centavo(s)";
    }

    return reaisPorExtenso + " " + centavosPorExtenso;
  } 

export default numeroPorExtenso;
