let saldoAtual = parseFloat(prompt("Informe o seu saldo inicial."))
let quantOpcao
let menu

do {
    menu = prompt(`
    Saldo disponível: R$${saldoAtual}

    Opções:

    a) Adicionar saldo
    b) Remover Saldo
    c) Sair do programa
    `)

    switch (menu) {
        case "a":
            quantOpcao = parseFloat(prompt("Informe a quantia a ser adicionada"))

            saldoAtual = saldoAtual + quantOpcao
            alert("Saldo atual: R$" + saldoAtual)
            break
    
        case "b":
            quantOpcao = parseFloat(prompt("Informe a quantia a ser removida"))
            saldoAtual = saldoAtual - quantOpcao
            alert("Saldo atual: R$" + saldoAtual)
            break

        case "c":
            alert("Encerrando o programa...")
            break

        default:
            alert("Erro no programa.")
    }
} while (menu !== "c")