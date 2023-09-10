let nome = window.prompt("Insira o seu nome");
let pergunta = window.prompt("Você já visitou alguma cidade anteriormente? (s/n)");
let cidades = ""
let contagem = 0

while (pergunta === "s") {
    let cidadeVisitada = window.prompt("Qual o nome da cidade visitada?");
    cidades += " - " + cidadeVisitada + "\n";
    contagem++
    let pergunta = window.prompt("Você visitou outra cidade anteriormente? (s/n)");
    if (pergunta === "n") {
        break
    };

};

alert(
    `
    Turista: ${nome}
    Quantidade de cidades visitadas: ${contagem}
    Cidades visitadas:\n${cidades}
    `
)