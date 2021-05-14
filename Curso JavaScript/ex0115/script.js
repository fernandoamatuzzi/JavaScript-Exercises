function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                // Bebe
                img.setAttribute('src', 'foto_homem_bebe.png')
            } else if (idade < 10) {
                // Crianca
                img.setAttribute('src', 'foto_homem_crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto_homem_jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'foto_homem_adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto_homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                //Bebe
                img.setAttribute('src', 'foto_mulher_bebe.png')
            } else if (idade < 10) {
                // Crianca
                img.setAttribute('src', 'foto_mulher_crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto_mulher_jovem.png')
            } else if (idade < 60) {
                // Adulto
                img.setAttribute('src', 'foto_mulher_adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto_mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}