function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('fano')
    var res = document.getElementById('res')


    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Favor verificar o ano de nascimento inserido.')
    }   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')


        if(fsex[0].checked){
            genero = 'Homen'
             if(idade <=0 || idade < 12){
                genero = 'criança'
                img.setAttribute('src', 'assets/img1m.jpg')
            }
            else if(idade < 21){
                genero = 'jovem'
                img.setAttribute('src', 'assets/img2m.jpg')
            }
            else if(idade < 40){
                genero = 'Adulto'
                img.setAttribute('src', 'assets/img3m.jpg')

            }
            else {
                genero = 'Idoso'
                img.setAttribute('src', 'assets/img4m.jpg')

            }
        } else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade <=0 && idade < 12){
                genero = 'criança'
                img.setAttribute('src', 'assets/img1f.jpg')

            }
            else if(idade < 21){
                genero = 'jovem'
                img.setAttribute('src', 'assets/img2f.jpg')

            }
            else if(idade < 40){
                genero = 'Adulta'
                img.setAttribute('src', 'assets/img3f.jpg')

            }
            else {
                genero = 'Idosa'
                img.setAttribute('src', 'assets/img4f.jpg')

            }
        }

        res.innerHTML= `Você tem ${idade} anos. e você é ${genero}`
        res.appendChild(img)
        res.style.textAlign = 'center'
        
    }
}
