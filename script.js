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
          <div class=" face" onclick="virar(this)"  >
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

let click =0 ;
 function virar(elemento){
  console.log(elemento.id)
   
   click ++;
   if(click<=2){
 elemento.lastElementChild.classList.add("sumir");
  console.log("eu sou o click" + click)
  verificarCarta(elemento);
  counterClick();
}
}


function desvirar(cartasViradas){
let ultimaCartaVirada=cartasViradas[cartasViradas.length-1];
 let penultimaCartaVirada=cartasViradas[cartasViradas.length-2];
  console.log(ultimaCartaVirada)
  ultimaCartaVirada.classList.remove("sumir");
  penultimaCartaVirada.classList.remove("sumir");
  click = 0
}
function verificarCarta(elemento){
  arrayParrots.push(elemento.firstElementChild.innerHTML)
  cartasViradas.push(elemento.lastElementChild)
 const verificarPar= cartasViradas.length % 2;
 let ultimaCartaVirada=arrayParrots[arrayParrots.length-1];
 let penultimaCartaVirada=arrayParrots[arrayParrots.length-2];
 if(verificarPar!== 1 && cartasViradas.length>=2){
  
     if(ultimaCartaVirada===penultimaCartaVirada){
      setTimeout(displayCounter, 100)
      click = 0
    }else{
      setTimeout(desvirar, 1000, cartasViradas)
     cartasViradas = []
    }
 } 
 teste=[]
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
  recomecar()
  }
}
function recomecar(){
  let recomecar = prompt("Jogar de novo? sim ou não?")
  if (recomecar === "sim"){
  location.reload()
  teste=[]
}else if(recomecar === "não"){
  alert("Game Over")
} else{
  alert("Não entendi, por favor insira apenas sim ou não")
  displayCounter()
}
}
function comparador() { 
	return Math.random() - 0.5; 
}
