function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
               res.innerHTML="Impossibru"
    } else {
        res.innerHTML = '<p>Contando: </p>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            alert("Passo inválido, vou considerar como passo 1")
            p=1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` //pega o codigo no google UNICODE
            }

        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} ` //pega o codigo no google UNICODE
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}