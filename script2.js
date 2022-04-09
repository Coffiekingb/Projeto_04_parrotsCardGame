const cartas={}

function pedirCartas(){
    let qntCartas= Number(prompt("Quantas Cartas você deseja?"));
    let validadorPar= qntCartas % 2;
    if(validadorPar !==1){
        for(let i = 0; i <= qntCartas; i++){
        let linha= document.querySelector(".linha");
        linha.innerHTML += 1
        cartas.nome=`jose${i}`;
        console.log(cartas)
        }
        console.log(" é par")
    } else{
        console.log(" Não é par")
    }
}
pedirCartas()