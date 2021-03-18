function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("Erro, verifique os dados")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancahomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolehomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultohomem.jpg')
            } else {
                img.setAttribute('src', 'idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criancamulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'adolemulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adultomulher.jpg')
            } else {
                img.setAttribute('src', 'idosomulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}