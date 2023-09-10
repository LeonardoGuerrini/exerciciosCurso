let nomePrimeiroVeiculo = window.prompt("Insira o nome do primeiro veículo")
let nomeSegundoVeiculo = window.prompt("Insira o nome do segundo veículo")

let velocidadePrimeiroVeiculo = parseInt(window.prompt("Insira a velocidade do primeiro veículo"))
let velocidadeSegundoVeiculo = parseInt(window.prompt("Insira a velocidade do segundo veículo"))


if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
    window.alert(`O ${nomePrimeiroVeiculo} é mais rápido que ${nomeSegundoVeiculo}.`)
} else if (velocidadePrimeiroVeiculo === velocidadeSegundoVeiculo) {
    window.alert(`Os dois veículos possuem a mesma velocidade.`)
} else {
    window.alert(`O ${nomeSegundoVeiculo} é mais rapido que ${nomePrimeiroVeiculo}`)
}