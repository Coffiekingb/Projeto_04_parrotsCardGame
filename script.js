let contador =0;
const listaCartas = [];
const cartas = document.querySelector(".linha");
const cartasCostas= ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif", "metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"]


function pedirCartas(){
let quantCartas = Number(prompt("Com quantas cartas você que jogar? (insira um número par entre 4-14)"));
const verificarPar= quantCartas % 2;


 if(quantCartas>= 4 && quantCartas<= 14 && verificarPar === 0 ){
      for(let i=0; i<quantCartas; i++){
         let card =`<div class="carta "  onclick="verificarCarta()">
          <div class=" costas face">
           <img src="imagens/${cartasCostas[i]}" alt="">
          </div>
          <div class=" frente face" onclick="chama3(this)"  >
           <img src="imagens/front.png" >
          </div>
         </div>`;
        listaCartas.push({card})  
        
      }
      adcImg(quantCartas)
      embaralhar();
      inserirCarta();
    }else{
          alert("Por favor, insira um número par entre 4 e 14"); 
          pedirCartas();
        }
}
pedirCartas()
function adcImg(elemento){
  for(let i=0; i<elemento; i++){
  listaCartas[i].imagem= cartasCostas[i];
  }
}
function embaralhar(){
 listaCartas.sort(comparador);
}

function inserirCarta(){
  let teste =listaCartas.length;
  for(let i= 0; i<=listaCartas.length-1; i++){
    cartas.innerHTML +=listaCartas[i].card;
    console.log(listaCartas)
  }
 
}

function virar(elemento){
 elemento.classList.add("sumir");

 
 setTimeout(desvirar, 1000, elemento)
  console.log(elemento)
  
}
function desvirar(bla){
  console.log("rodei")
  bla.classList.remove("sumir");
}
function verificarCarta(){
  console.log("rodei tbm")

}
function chama3(botao){
  virar(botao);
  

}

function counterClick(){
  contador++;
  console.log(contador)
}

function displayCounter(){

  alert(`Parabéns! Você ganhou em ${contador} jogadas!`)
}
function comparador() { 
	return Math.random() - 0.5; 
}
