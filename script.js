const frases = [
    "DevOps une desenvolvimento e operações.",
    "Automação acelera entregas.",
    "Integração contínua melhora a qualidade.",
    "Deploy rápido e seguro."
];

let index = 0;

const elementoFrase = document.getElementById("frase");

setInterval(() => {

    index++;

    if(index >= frases.length){
        index = 0;
    }

    elementoFrase.innerText = frases[index];

}, 3000);