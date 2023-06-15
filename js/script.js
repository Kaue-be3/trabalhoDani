let conteudo6 = document.getElementById("conteudo6")
let conteudo1 = document.getElementById("conteudo2")
let conteudo2 = document.getElementById("conteudo3")
function abrir(){
    if(conteudo6.style.display == "none"){
        conteudo6.style.display = "flex"
    }
    else{
        conteudo6.style.display = "none"
    }
}
function abrir2(){
    if(conteudo1.style.display == "none"){
        conteudo1.style.display = "flex"
    }
    else{
        conteudo1.style.display = "none"
    }
}
function abrir3(){
    if(conteudo2.style.display == "none"){
        conteudo2.style.display = "flex"
    }
    else{
        conteudo2.style.display = "none"
    }
}
function abrir11(){
    conteudo6.style.display = 'flex'
}
function abrir22(){
    conteudo1.style.display = 'flex'
}
function abrir33(){
    conteudo2.style.display = 'flex'
}

let equipe = document.getElementById("todaequipe")
function verequipe(){
    if(equipe.style.display == 'none'){
        equipe.style.display = 'flex'
    }
    else{
        equipe.style.display = 'none'
    }
}