```javascript
const chaveLocalStorage = "ordemServico";

const form = document.querySelector("form");
const mensagem = document.getElementById("mensagem");
const btnLimpar = document.querySelector(".cancel-btn");
const btnNovaOS = document.querySelector(".topbar button");

const campoMaquina = document.getElementById("maquina");
const campoTecnico = document.getElementById("tecnico");
const campoStatus = document.getElementById("status");
const campoDataInicio = document.getElementById("data_inicio");
const campoDataConclusao = document.getElementById("data_conclusao");
const campoDescricao = document.getElementById("descricao");
const campoPecas = document.getElementById("pecas");

function salvarOrdemServico(event) {
    event.preventDefault();

    const ordemServico = {
        maquina: campoMaquina.value,
        tecnico: campoTecnico.value,
        status: campoStatus.value,
        data_inicio: campoDataInicio.value,
        data_conclusao: campoDataConclusao.value,
        descricao: campoDescricao.value,
        pecas: campoPecas.value,
        data_salvamento: new Date().toISOString()
    };

    try {
        localStorage.setItem(
            chaveLocalStorage,
            JSON.stringify(ordemServico)
        );

        baixarArquivoJSON(ordemServico);

        exibirMensagem(
            "OS salva com sucesso. O arquivo JSON foi gerado."
        );

    } catch (erro) {
        console.error(
            "Erro ao salvar a ordem de serviço:",
            erro
        );

        exibirMensagem(
            "Não foi possível salvar a ordem de serviço."
        );
    }
}

function carregarOrdemServico() {
    const dadosSalvos = localStorage.getItem(chaveLocalStorage);

    if (!dadosSalvos) {
        return;
    }

    try {
        const ordemServico = JSON.parse(dadosSalvos);

        campoMaquina.value = ordemServico.maquina || "";
        campoTecnico.value = ordemServico.tecnico || "";
        campoStatus.value = ordemServico.status || "";
        campoDataInicio.value = ordemServico.data_inicio || "";
        campoDataConclusao.value = ordemServico.data_conclusao || "";
        campoDescricao.value = ordemServico.descricao || "";
        campoPecas.value = ordemServico.pecas || "";

    } catch (erro) {
        console.error(
            "Erro ao carregar a ordem de serviço:",
            erro
        );

        localStorage.removeItem(chaveLocalStorage);
    }
}

function baixarArquivoJSON(ordemServico) {
    const conteudoJSON = JSON.stringify(
        ordemServico,
        null,
        4
    );

    const arquivo = new Blob(
        [conteudoJSON],
        {
            type: "application/json;charset=utf-8"
        }
    );

    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");

    link.href = url;
    link.download = gerarNomeArquivo();
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(function () {
        URL.revokeObjectURL(url);
    }, 5000);
}

function gerarNomeArquivo() {
    const agora = new Date();

    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const dia = String(agora.getDate()).padStart(2, "0");
    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");
    const segundo = String(agora.getSeconds()).padStart(2, "0");

    return (
        "ordem-servico-" +
        ano + "-" +
        mes + "-" +
        dia + "_" +
        hora + "-" +
        minuto + "-" +
        segundo +
        ".json"
    );
}

function exibirMensagem(texto) {
    mensagem.textContent = texto;
    mensagem.style.display = "block";

    setTimeout(function () {
        mensagem.style.display = "none";
    }, 3000);
}

function limparFormulario() {
    form.reset();
    localStorage.removeItem(chaveLocalStorage);
    mensagem.style.display = "none";
}

function novaOrdemServico() {
    limparFormulario();
    campoMaquina.focus();
}

function logout() {
    window.location.href = "login.html";
}

form.addEventListener(
    "submit",
    salvarOrdemServico
);

if (btnLimpar) {
    btnLimpar.addEventListener(
        "click",
        limparFormulario
    );
}

if (btnNovaOS) {
    btnNovaOS.addEventListener(
        "click",
        novaOrdemServico
    );
}

carregarOrdemServico();
```
