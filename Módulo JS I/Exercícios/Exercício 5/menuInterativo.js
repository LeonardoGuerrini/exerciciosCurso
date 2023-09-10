let menu = window.prompt(`
==== SELECIONE UMA OPÇÃO ====

a) Opção 1
b) Opção 2
c) Opção 3
d) Opção 4
e) Encerrar
`)

do {
    alert("A opção escolhida foi: " + menu)
    menu = window.prompt(`
    ==== SELECIONE UMA OPÇÃO ====
    
    a) Opção 1
    b) Opção 2
    c) Opção 3
    d) Opção 4
    e) Encerrar
    `)
} while (menu !== "e")

alert("O sistema está sendo encerrado.")