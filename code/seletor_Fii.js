/* CONSTANTES */
const ss = SpreadsheetApp.getActiveSpreadsheet();
const b_dados = ss.getSheetByName("Base de Dados");

/* ATUALIZAR FII's */
function Atualiza_IMPORTHTML() {
  var Hora_Agora = new Date();// Pega no sistema a hora atual.
  var importHTML_Funcao = '=IFNA((IMPORTHTML("http://www.clubefii.com.br/fundos_imobiliarios_ranking";"table";1));(IMPORTHTML("https://www.clubefii.com.br/fundos_imobiliarios_ranking";"table";1)))';// Insere todos os argumentos dentro da função ImportHtml.

  // Fazendo a automação
  b_dados.getRange("B4").clearContent();// Limpa o conteudo da celulua B4.
  SpreadsheetApp.flush();// Atualiza a planilha.
  b_dados.getRange("B4").setValue(importHTML_Funcao);// Insere a função import html na celula A1
  b_dados.getRange("F2").setValue(Hora_Agora.toLocaleDateString()+" "+Hora_Agora.toLocaleTimeString());// Insere a hora da atulaização na celula H2.
  console.log("atualiza db");
}

function Atulaizar(e){
  var ss = e.source.getActiveSheet();
  var range = e.range.getA1Notation();
 
  if (ss.getName() != 'Base de Dados' || range != 'K3'){return}

  if (ss.getRange('K3')){
    Atualiza_IMPORTHTML();
    ss.getRange('K3').clearContent();
  }

}
