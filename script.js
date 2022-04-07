function inserirCartas(){
    const quantCartas = Number(prompt("Com quantas cartas você que jogar?"));
    const verificarPar= quantCartas % 2;
    const max =(quantCartas / 2) - 1;
    for(let i = 0; i<= max ; i++){
        if(quantCartas>= 4 && quantCartas<= 14 && verificarPar === 0 ){
        let cartas = document.querySelector(".linha");
        cartas.innerHTML+= `<div class="carta">
        <div class="frente face" >
          <img src="imagens/front.png" alt="">
        </div>
        <div class="costas face">
          costas
        </div>
      </div>`
      cartas = document.querySelector(".linha2");
      cartas.innerHTML+= `<div class="carta">
      <div class="frente face" >
        <img src="imagens/front.png" alt="">
      </div>
      <div class="costas face">
        costas
      </div>
    </div>`} else{
          alert("Por favor, insira um número par entre 4 e 14");
          inserirCartas();
          break
      }
    }
}
inserirCartas()