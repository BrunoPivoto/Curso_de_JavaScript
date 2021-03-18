var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var seg = agora.getSeconds()
console.log(`Agora são ${hora}:${min}:${seg}`)
if (hora < 12) {
    console.log("Bom dia")
} else if (hora <18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}
