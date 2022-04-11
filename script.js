let arrayParrots =[];
let cartasViradas=[];
let contador =0;
const listaCartas = [];
const cartas = document.querySelector(".linha");
const cartasCostas= ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif", "metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"]


function pedirCartas(){
let quantCartas = Number(prompt("Com quantas cartas você que jogar? (insira um número par entre 4-14)"));
const verificarPar= quantCartas % 2;


 if(quantCartas>= 4 && quantCartas<= 14 && verificarPar === 0 ){
      for(let i=0; i<quantCartas; i++){
         let card =`<div class="carta " >
          <div class=" face" onclick="chama3(this)"  >
          <div class=" costas face">
           <img src="imagens/${cartasCostas[i]}" alt="">
          </div>
           <div class= "frente face"><img src="imagens/front.png" > </div>
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
 elemento.lastElementChild.classList.add("sumir");
 verificarCarta(elemento);
}

function desvirar(cartasViradas){
let ultimaCartaVirada=cartasViradas[cartasViradas.length-1];
 let penultimaCartaVirada=cartasViradas[cartasViradas.length-2];
  console.log(ultimaCartaVirada)
  ultimaCartaVirada.classList.remove("sumir");
  penultimaCartaVirada.classList.remove("sumir");
}
function verificarCarta(elemento){
  arrayParrots.push(elemento.firstElementChild.innerHTML)
  cartasViradas.push(elemento.lastElementChild)
 const verificarPar= cartasViradas.length % 2;
 let ultimaCartaVirada=arrayParrots[arrayParrots.length-1];
 let penultimaCartaVirada=arrayParrots[arrayParrots.length-2];
 console.log(cartasViradas)
 
 if(verificarPar!== 1 && cartasViradas.length>=2){
     if(ultimaCartaVirada!==penultimaCartaVirada){
     setTimeout(desvirar, 1000, cartasViradas)
     setTimeout(timeoutClick, 1000, cartasViradas)
    }else{
      setTimeout(displayCounter, 100)
    }
 }  
}

function timeoutClick(carta){
 carta.document.querySelector("onclick").remove("onclick='chama3(this)'")
 setTimeout(toBackClick, 1000, cartas)
}
function toBackClick(carta){
  carta.document.querySelector("onclick").add("onclick='chama3(this)'")
}
function chama3(botao){
  virar(botao);
  counterClick();
  
}

function counterClick(){
  contador++;
  console.log(contador)
}

function displayCounter(){
  
 let fim = document.querySelectorAll(".sumir")
 console.log("fim")

 if(fim.length===listaCartas.length){
  alert(`Parabéns! Você ganhou em ${contador} jogadas!`)
}
  }
function comparador() { 
	return Math.random() - 0.5; 
}
