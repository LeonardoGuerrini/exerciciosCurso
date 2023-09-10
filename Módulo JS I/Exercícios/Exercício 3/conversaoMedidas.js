let valor = parseFloat(window.prompt("Informe um valor em metros"))

let unidadeEscolhida = window.prompt(
    `
    Escolha uma unidade de medida

    mm
    cm
    dm
    dam
    hm
    km
    `
)

switch (unidadeEscolhida) {
    case "mm":
        let mm = valor * 1000
        alert(mm)
        break

    case "cm":
        let cm  = valor * 100
        alert(cm)
        break

    case "dm":
        let dm = valor * 10
        alert(dm)
        break

    case "dam":
        let dam = valor / 10
        alert(dam)

    case "hm":
        let hm = valor / 100
        alert(hm)
        break

    case "km":
        let km = valor / 1000
        alert(km)
        break

    default:
        alert("Opção inválida.")
        break
}