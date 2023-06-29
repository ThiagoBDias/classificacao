const regression = require('regression');

const grau = 9;

function enviar (){
    
   
    var dados = parseFloat(document.getElementById("calculateRegression").value) + 119;

    const result = (dados * 7.48304776782061) + 
    (Math.pow(dados,2) * -1.37642280840453)
    + (Math.pow(dados,3) *0.126355740908135)
    +
    (Math.pow(dados,4)*-0.00623744026986718)
    + (Math.pow(dados,5) *0.000175716304417529)
    +
     (Math.pow(dados,6) *-0.00000289610474400899)
     + (Math.pow(dados,7) * 0.0000000274860984238922)
     + 
     (Math.pow(dados,8) *-0.000000000138517170616155)
     + (Math.pow(dados,9) *0.000000000000286200693214027)
      - -4.14506610156968;

    window.alert(result.toFixed(2));


}   