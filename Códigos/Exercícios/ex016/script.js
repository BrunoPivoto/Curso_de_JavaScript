function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Caixa Vazia")
    } else{
        res.innerHTML = '<p>Contando: </p>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for(var c = i; c<= f; c+=p){
            res.innerHTML += `${c} ` 
        }
    }

}