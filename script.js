const listaCartas = [];
const cartas = document.querySelector(".linha");
const cartasCostas= ["bobrossparrot.gif","bobrossparrot.gif","explodyparrot.gif","explodyparrot.gif","fiestaparrot.gif","fiestaparrot.gif", "metalparrot.gif","metalparrot.gif","revertitparrot.gif","revertitparrot.gif","tripletsparrot.gif","tripletsparrot.gif","unicornparrot.gif","unicornparrot.gif"]
function comparador() { 
	return Math.random() - 0.5; 
}
function inserirCartas(){
let quantCartas = Number(prompt("Com quantas cartas você que jogar? (insira um número par entre 4-14)"));
const verificarPar= quantCartas % 2;
const max =quantCartas  - 1;

 if(quantCartas>= 4 && quantCartas<= 14 && verificarPar === 0 ){
      for(let i=0; i<=max; i++){
         let card =`<div class="carta " onclick="virar(this)"  >
      <div class=" frente face" >
        <img src="imagens/front.png" alt="">
      </div>
      <div class=" costas face">
      <img src="imagens/${cartasCostas[i]}" alt="">
      </div>
        </div>`;
        listaCartas.push(card)
      }
      embaralhar();
    }else{
          alert("Por favor, insira um número par entre 4 e 14"); 
          inserirCartas();
        }
}
inserirCartas()

function embaralhar(){
 listaCartas.sort(comparador);
      cartas.innerHTML =listaCartas.join('');
}

function virar(elemento){
  
  console.log(elemento)
}

let contador =0;
function counterClick(){
  contador++;
}

function displayCounter(){
  
}



















/* cartas.innerHTML+= `<div class="carta" onclick="counterClick()" >
        <div class="frente face">
          <img src="imagens/front.png" alt="">
        </div>
        <div class="costas face">
          costas${i}
        </div>
          </div>`;
        cartas = document.querySelector(".linha2");
        cartas.innerHTML+= `<div class="carta" onclick="displayCounter()">
      <div class="frente face" >
        <img src="imagens/front.png" alt="">
      </div>
      <div class="costas face">
        costas${i}  
      </div>
          </div>`; */