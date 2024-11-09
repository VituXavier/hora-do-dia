function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.scr = 'fotomanha.png'
        document.body.style.background = '#d6a97e'
        msg.innerHTML += '<p>BOM DIA!!</p>'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#2c2417'
        msg.innerHTML += '<p>BOA TARDE!!</p>'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#202315'
        msg.innerHTML += '<p>BOA NOITE!!</p>'
    }
}