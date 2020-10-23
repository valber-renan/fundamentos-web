let nome = window.document.getElementById("nome")
let email=document.querySelector("#email")
let experiencia =document.querySelector("#experiencia")
let nomeOk = false
let emailOk = false
let experienciaOk = false
let mapa = document.querySelector("#mapa")


nome.style.width = '100%'
email.style.width= "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3){
        txtNome.innerHTML= "Nome Inválido"
        txtNome.style.color="red"
    }else{
        txtNome.innerHTML="Nome Válido"
        txtNome.style.color="green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML= "E-mail Inválido"
        txtEmail.style.color= "red "
    }else {
        txtEmail.innerHTML= "E-mail válido"
        txtEmail.style.color="green "
        emailOk = true
    }
}

function validaExperiencia(){
    let txtExperiencia = document.querySelector('#txtExperiencia')

    if(experiencia.value.length >=100){
        txtExperiencia.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres "
        txtExperiencia.style.color = "red"
        txtExperiencia.style.display = "block"
    }else{
        txtExperiencia.style.display = "none"
        experienciaOk =true
    }
}
function cadastrar(){
    if (nomeOk == true && emailOk ==true && experienciaOk==true){
        alert ("Formulário enviado com Sucesso !!")
    }else{
        alert ("Preencha o formulário corretamente antes de enviar !!")
    }
}

function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

function mudaFoto(foto){
    document.getElementById("icone").src=foto;
}
function mudaFoto2(foto){
    document.getElementById("icone2").src=foto;
}
