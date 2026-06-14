let planos = JSON.parse(localStorage.getItem("planos")) || [];

const campoNomePlano = document.getElementById("nomePlano");
const campoEquipamento = document.getElementById("equipamento");
const campoTipo = document.getElementById("tipo");
const campoFrequencia = document.getElementById("frequencia");
const campoDataInicio = document.getElementById("dataInicio");
const campoResponsavel = document.getElementById("responsavel");
const campoObservacoes = document.getElementById("observacoes");

const tabelaPlanos = document.getElementById("tabelaPlanos");

const cardTotal = document.getElementById("total");
const cardAtivas = document.getElementById("ativas");
const cardConcluidas = document.getElementById("concluidas");

function salvarPlano() {
    const plano = {
        nomePlano: campoNomePlano.value,
        equipamento: campoEquipamento.value,
        tipo: campoTipo.value,
        frequencia: campoFrequencia.value,
        dataInicio: campoDataInicio.value,
        responsavel: campoResponsavel.value,
        observacoes: campoObservacoes.value,
        status: "Ativo"
    };

    planos.push(plano);

    localStorage.setItem("planos", JSON.stringify(planos));

    mostrarPlanos();
    atualizarCards();
    limparCampos();
}

function mostrarPlanos() {
    tabelaPlanos.innerHTML = "";

    for (let i = 0; i < planos.length; i++) {
        let classeStatus = "ativo";
        let botao = "";

        if (planos[i].status === "Concluído") {
            classeStatus = "concluido";
        }

        if (planos[i].status === "Ativo") {
            botao = `
                <button class="action-btn" onclick="concluirPlano(${i})">
                    Concluir
                </button>
            `;
        }

        tabelaPlanos.innerHTML += `
            <tr>
                <td>${planos[i].nomePlano}</td>
                <td>${planos[i].equipamento}</td>
                <td><span class="status ${classeStatus}">${planos[i].status}</span></td>
                <td>${planos[i].dataInicio}</td>
                <td>${botao}</td>
            </tr>
        `;
    }
}

function concluirPlano(indice) {
    planos[indice].status = "Concluído";

    localStorage.setItem("planos", JSON.stringify(planos));

    mostrarPlanos();
    atualizarCards();
}

function atualizarCards() {
    let total = planos.length;
    let ativas = 0;
    let concluidas = 0;

    for (let i = 0; i < planos.length; i++) {
        if (planos[i].status === "Ativo") {
            ativas++;
        }

        if (planos[i].status === "Concluído") {
            concluidas++;
        }
    }

    cardTotal.textContent = total;
    cardAtivas.textContent = ativas;
    cardConcluidas.textContent = concluidas;
}

function limparCampos() {
    campoNomePlano.value = "";
    campoEquipamento.value = "";
    campoTipo.value = "";
    campoFrequencia.value = "";
    campoDataInicio.value = "";
    campoResponsavel.value = "";
    campoObservacoes.value = "";
}

function logout() {
    window.location.href = "login.html";
}

mostrarPlanos();
atualizarCards();