function comparador() { 
	return Math.random() - 0.5; 
}

function inserirCartas(){
const quantCartas = Number(prompt("Com quantas cartas você que jogar? (insira um número par entre 4-14)"));
const verificarPar= quantCartas % 2;
const max =(quantCartas / 2) - 1;

 if(quantCartas>= 4 && quantCartas<= 14 && verificarPar === 0 ){
      const listaCartas = []
      const cartas = document.querySelectorAll(".h");
      for(let i=0; i<=max; i++){
         let card =`<div class="carta" onclick="counterClick()" >
      <div class="frente face">
        <img src="imagens/front.png" alt="">
      </div>
      <div class="costas face">
        costas${i}
      </div>
        </div>`;
        console.log(listaCartas)
        listaCartas.push(card)
      }
      listaCartas.sort(comparador);
      for(let i=0; i<=cartas.length-1; i++){
        
        cartas[i].innerHTML =listaCartas.join('');
      }
    }else{
          alert("Por favor, insira um número par entre 4 e 14"); 
          inserirCartas();
        }
}
function embaralhar(){
  let cartas = document.querySelectorAll(".h");
  console.log(cartas)
}
embaralhar();

inserirCartas()
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