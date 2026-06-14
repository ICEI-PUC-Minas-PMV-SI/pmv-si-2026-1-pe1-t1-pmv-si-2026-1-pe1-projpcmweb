const usuarios = [
    { login: "davi", senha: "1234" },
    { login: "vivian", senha: "1234" },
    { login: "vitor", senha: "1234" },
    { login: "joao", senha: "1234" },
    { login: "aline", senha: "1234" }
]

const campoLogin = document.getElementById("usuario")
const campoSenha = document.getElementById("pw")
const botaoEntrar = document.getElementById("bot")
const botaoOlho = document.getElementById("mostrarSenha")
const mensagemErro = document.getElementById("erro")

function verificarLogin() {

    const loginDigitado = campoLogin.value
    const senhaDigitada = campoSenha.value

    let encontrou = false

    for (let i = 0; i < usuarios.length; i++) {

        const usuario = usuarios[i]

        if (
            loginDigitado == usuario.login &&
            senhaDigitada == usuario.senha
        ) {

            encontrou = true

            mensagemErro.textContent = ""

            window.location.href = "dashboard.html"

            break
        }
    }

    if (encontrou == false) {
        mensagemErro.textContent = "Usuário ou senha inválidos"
    }
}

function olho() {

    if (campoSenha.type == "password") {

        campoSenha.type = "text"

        botaoOlho.classList.remove("bi-eye-slash")
        botaoOlho.classList.add("bi-eye")

    } else {

        campoSenha.type = "password"

        botaoOlho.classList.remove("bi-eye")
        botaoOlho.classList.add("bi-eye-slash")

    }

}
botaoEntrar.addEventListener("click", verificarLogin)
botaoOlho.addEventListener("click", olho)
campoSenha.addEventListener("keydown", function(event) {

    if (event.key == "Enter") {
        verificarLogin()
    }

})

