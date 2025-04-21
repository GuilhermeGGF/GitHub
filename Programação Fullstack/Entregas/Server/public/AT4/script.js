// Gera número aleatório entre 0 e 99
const numeroSecreto = Math.floor(Math.random() * 100);
console.log("Numero correto:", numeroSecreto);

function verificar() {
    const input = document.getElementById("inputNumero");
    const valor = parseInt(input.value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor < 0 || valor > 99) { //Nao aceita valor nulo, ou menor que zero, ou maior que 99
        resultado.textContent = "Digite um número entre 0 e 99.";
        resultado.style.setProperty("background-color", "yellow");
        return;
    }

    if (valor === numeroSecreto) {
        resultado.textContent = "Parabéns! Você acertou!!";
        resultado.style.setProperty("background-color", "lightgreen");
    } else {
        resultado.textContent = valor < numeroSecreto 
            ? "Tente um número maior." 
            : "Tente um número menor.";
        resultado.style.setProperty("background-color", "red");
    }
}
