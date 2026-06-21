const chavePlanos = "planosPCM";

const planosPadrao = [
    {
        nome: "Manutencao Forno",
        equipamento: "Forno Industrial",
        responsavel: "Joao",
        prioridade: "Alta",
        status: "Em execucao",
        horas: 4
    },
    {
        nome: "Preventiva Gerador",
        equipamento: "Gerador Diesel",
        responsavel: "Carlos",
        prioridade: "Media",
        status: "Pendente",
        horas: 2
    },
    {
        nome: "Revisao Torno",
        equipamento: "Torno Mecanico",
        responsavel: "Ana",
        prioridade: "Baixa",
        status: "Concluido",
        horas: 1
    }
];

let planos = JSON.parse(localStorage.getItem(chavePlanos)) || planosPadrao;

const modal = document.getElementById("modal");
const tbodyPlanos = document.getElementById("tbodyPlanos");

const nomePlano = document.getElementById("nomePlano");
const equipamentoPlano = document.getElementById("equipamentoPlano");
const responsavelPlano = document.getElementById("responsavelPlano");
const prioridadePlano = document.getElementById("prioridadePlano");
const statusPlano = document.getElementById("statusPlano");
const horasPlano = document.getElementById("horasPlano");

function abrirModal(){

    modal.style.display = "flex";
}

function fecharModal(){

    modal.style.display = "none";

    limparCampos();
}

function salvarPlanos(){

    localStorage.setItem(
        chavePlanos,
        JSON.stringify(planos)
    );
}

function salvarPlano(){

    const novoPlano = {
        nome: nomePlano.value.trim(),
        equipamento: equipamentoPlano.value.trim(),
        responsavel: responsavelPlano.value.trim(),
        prioridade: prioridadePlano.value,
        status: statusPlano.value,
        horas: Number(horasPlano.value)
    };

    if(
        !novoPlano.nome ||
        !novoPlano.equipamento ||
        !novoPlano.responsavel ||
        !novoPlano.prioridade ||
        !novoPlano.status ||
        horasPlano.value === "" ||
        isNaN(novoPlano.horas) ||
        novoPlano.horas < 0
    ){
        alert("Preencha todos os campos.");

        return;
    }

    planos.push(novoPlano);

    salvarPlanos();

    atualizarTabela();

    fecharModal();

    alert("Plano cadastrado com sucesso!");
}

function atualizarTabela(){

    tbodyPlanos.innerHTML = "";

    planos.forEach((plano, index) => {

        tbodyPlanos.innerHTML += `
            <tr>
                <td>${plano.equipamento}</td>
                <td>${plano.responsavel}</td>
                <td>${plano.prioridade}</td>
                <td>
                    <span class="status ${classeStatus(plano.status)}">
                        ${plano.status}
                    </span>
                </td>
                <td>${plano.horas}h</td>
                <td>
                    <button
                        class="delete-btn"
                        onclick="removerPlano(${index})"
                        title="Remover plano"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

function removerPlano(index){

    const confirmar = confirm("Deseja remover este plano?");

    if(confirmar){

        planos.splice(index, 1);

        salvarPlanos();

        atualizarTabela();
    }
}

function limparCampos(){

    nomePlano.value = "";
    equipamentoPlano.value = "";
    responsavelPlano.value = "";
    prioridadePlano.value = "";
    statusPlano.value = "";
    horasPlano.value = "";
}

function classeStatus(status){

    if(status === "Em execucao" || status === "Em execução"){
        return "ativo";
    }

    if(status === "Pendente"){
        return "pendente";
    }

    return "concluido";
}

modal.addEventListener("click", (event) => {

    if(event.target === modal){

        fecharModal();
    }
});

function logout() {
    window.location.href = "index.html";
}

salvarPlanos();
atualizarTabela();
