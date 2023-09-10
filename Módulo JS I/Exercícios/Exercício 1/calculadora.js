let primeiroValor = parseFloat(window.prompt("Insira o primeiro valor"));
let segundoValor = parseFloat(window.prompt("Insira o segundo valor"));

let soma = primeiroValor + segundoValor;
let sub = primeiroValor - segundoValor;
let mult = primeiroValor * segundoValor;
let div = primeiroValor / segundoValor;

window.alert(
    `
    Resultado das operações:

    Soma: ${soma}
    Subtração: ${sub}
    Multiplicação: ${mult}
    Divisão: ${div}
    `
);