let nome = window.prompt("Informe o seu primeiro nome");
let sobrenome = window.prompt("Informe o seu sobrenome");
let campoEstudo = window.prompt("Informe o seu campo de estudo");
let anoNascimento = window.prompt("Informe o seu ano de nascimento");

let idade = 2023 - anoNascimento;

window.alert(
    `
    Nome completo: ${nome + "" + sobrenome}
    Campo de estudo: ${campoEstudo}
    Idade: ${idade}
    `
);