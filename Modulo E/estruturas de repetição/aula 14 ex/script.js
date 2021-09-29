
// chamando função pelo botton

function contar() {
    // recebendo valores dos inputs.
    let ini = document.getElementById("txt1")
    let fim = document.getElementById("txt2")
    let passo = document.getElementById("txt3")
    let res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'impossivel contar verifique os campos.'
        res.innerHTML += `\u{1F446}`
    }else{
        res.innerHTML = 'contando: '
        let inii = Number(ini.value)
        let fimi = Number(fim.value)
        let passoi = Number(passo.value)

        if (inii < fimi){
            //contagem crescente
            for(let contador = inii; contador <= fimi; contador += passoi){
                res.innerHTML += `${contador} \u{1f449}`
            }
        }else{
            //contagem regressiva
            for(let contador = inii; contador >= fimi; contador -= passoi){
                res.innerHTML += `${contador} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f47D}`

    }

}