let num = document.querySelector("input#num")
let lista = document.querySelector("select#selc")
let res = document.querySelector("div#res")
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adc() {
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Número ${num.value} adcionado`
        lista.appendChild(item)
    } else {
        alert("Inválido ou já na lista")
    }
    num.value = ' '
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Lista vazia")
    } else {
        let lot = valores.length
        res.innerHTML = " "
        res.innerHTML = `Ao todo, fora cadastrados: ${lot} números</br>`
        valores.sort()
        menor = valores[0]
        maior = valores[0]
        let soma =0
        for (let c in valores) {
            soma += valores[c]
            if (valores[c] > maior) {
                maior = valores[c]
            }
            if (valores[c] <  menor) {
                menor = valores[c]
            }
        }

        res.innerHTML += `Menor valor: ${menor} </br>`
        res.innerHTML += `Maior valor: ${maior} </br>`
        res.innerHTML += `Soma dos valores: ${soma} </br>`
        res.innerHTML += `Média dos valores: ${soma/valores.length} </br>`
    }
}
