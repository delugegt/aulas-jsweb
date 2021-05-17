

//colocar a variavel em cima ou em baixa faz diferença
//var nome = "Jorge Lopexs";
//alert("meu primeiro JS na web!!!" + nome);
//var nome2 = "Juliana Lops";
//posso reposicionar a string
//console.log(nome.replace("Jorge", "Juliana"));



//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop("maçã");
//console.log(lista);
//console.log(lista.toString()/*[0]*/ );
//console.log(lista.join(" - ")); 


//dicionario
//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas);

//condicionais
/*
var idade = prompt("qual sua idade?");
if ( idade > 18){
  alert("maior de idade");
} else {
  alert("menor de idade");
};
*/ 



//enquanto
/*
var count = 0;
while (count <= 6){
  console.log(count);
  alert(count);
  count++;
};
*/


//para...
/*
var count;
for(count=0; count <= 5; count++){
  alert(count);
};

*/ 
//DATAS
/*
var d = new Date();
alert(d);
*/



//função 
/* 
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão!!!", "Japão", "Brasil"));
*/ 

//função e escopo
/* 
var validar;
function validaIdade(idade){
 // var validar;
  if (idade >= 18){
    validar = true
  } else{
    validar = false
  }
  return validar;
}

var idade = prompt("Qual sua Idade?");
validaIdade(idade)
console.log(validaIdade(idade));
*/

//se eu chamar a var validar para o console log estarei lidando com escopo,portanto é necessário declarar a var globalmente


function clicou(){
  //alert("Obrigado por clicar");
  //document.getElementById("agradecimento");
  //console.log(document.getElementById("agradecimento"));
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>";
}

//window open
function redirecionar(){
  window.open("https://www.behance.net/derickred"); //outra aba
  //window.location.href = ""; //também funciona mesma janela
}

function mouseOn(){
  alert("Foi!!!");
}