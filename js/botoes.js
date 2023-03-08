function clicks(act, numeroString) {

    //funcao serve só para calcular o numero e retornar o numero que tem que aparecer na tela
    numeroD = parseInt(numeroString);

    if (act === "Aumentar") {
        numeroD += 1;
    }
    else if (act === "Diminuir") {
        numeroD -= 1;
    }
    else {
        numeroD = 0;
    }

    return numeroD;
}

function colocaCor(n) {
    //pega e coloca a cor
    let cor = "teste";
    if (+n > 0)
        cor = "darkgreen"
    else if (+n < 0)
        cor = "darkred"
    else
        cor = "black"

    return cor
}


const numero = document.querySelector("#Numero");
const botoes = document.querySelectorAll(".botao");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {
        numero.innerHTML = clicks(botao.id, numero.innerHTML);
        numero.style.color = colocaCor(numero.innerHTML);
    })
})