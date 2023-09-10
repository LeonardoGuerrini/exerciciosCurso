let nomePersonagem = window.prompt("Insira o nome do personagem")
let poderAtaquePersonagem = parseInt(window.prompt("Insira o poder de ataque do personagem"))

let nomeAdversario = window.prompt("Insira o nome do adversário")
let pontosVidaAdversario = parseInt(window.prompt("Insira quantos pontos de vida o adversário tem"))
let poderDefesaAdversario = parseInt(window.prompt("Insira o poder de defesa do adversário"))
let escudoAdversario = window.prompt("O adversário possui um escudo? (s/n)")

let danoCausado

if (poderAtaquePersonagem > poderDefesaAdversario && escudoAdversario === "n") {
    danoCausado = poderAtaquePersonagem - poderDefesaAdversario
    window.alert(danoCausado)
} else if (poderAtaquePersonagem > poderDefesaAdversario && escudoAdversario === "s") {
    danoCausado = (poderAtaquePersonagem - poderDefesaAdversario) / 2
    window.alert(danoCausado)
} else if (poderAtaquePersonagem <= poderDefesaAdversario) {
    danoCausado = 0
    window.alert(danoCausado)
}