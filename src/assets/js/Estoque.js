/* =====================================================
ELEMENTOS
===================================================== */

const btnAdicionar =
document.getElementById("btnAdicionar");

const modal =
document.getElementById("modal");

const fecharModal =
document.getElementById("fecharModal");

const salvarPeca =
document.getElementById("salvarPeca");

const tbody =
document.getElementById("tbody");

const totalPecas =
document.getElementById("totalPecas");

const pesquisa =
document.getElementById("pesquisa");

pesquisa.addEventListener("input", () => {

    const query =
pesquisa.value.trim().toLowerCase();

    const linhas =
tbody.querySelectorAll("tr");

    linhas.forEach((linha) => {

        const id =
        linha.children[0].textContent.trim().toLowerCase();

        linha.style.display =
        query === "" || id.includes(query)
            ? ""
            : "none";

    });

});

/* =====================================================
ABRIR MODAL
===================================================== */

btnAdicionar.addEventListener("click", () => {

    modal.style.display = "flex";

});

/* =====================================================
FECHAR MODAL
===================================================== */

fecharModal.addEventListener("click", () => {

    fecharModalFunc();

});

/* =====================================================
FECHAR CLICANDO FORA
===================================================== */

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        fecharModalFunc();
    }

});

/* =====================================================
FUNÇÃO FECHAR MODAL
===================================================== */

function fecharModalFunc(){

    modal.style.display = "none";

    limparCampos();
}

/* =====================================================
LIMPAR CAMPOS
===================================================== */

function limparCampos(){

    document.getElementById("idPeca").value = "";

    document.getElementById("nomePeca").value = "";

    document.getElementById("qtdPeca").value = "";

    document.getElementById("minPeca").value = "";
}

/* =====================================================
ATUALIZAR CONTADOR
===================================================== */

function atualizarTotal(){

    const totalLinhas =
    tbody.querySelectorAll("tr").length;

    totalPecas.textContent = totalLinhas;
}

/* =====================================================
GERAR STATUS
===================================================== */

function gerarStatus(qtd, min){

    if(qtd < min){

        return `
            <span class="low">
                Estoque baixo
            </span>
        `;
    }

    return `
        <span class="ok">
            Em estoque
        </span>
    `;
}

/* =====================================================
ATUALIZAR STATUS
===================================================== */

function atualizarStatus(linha){

    const qtd =
    Number(linha.children[2].textContent);

    const min =
    Number(linha.children[3].textContent);

    linha.children[4].innerHTML =
    gerarStatus(qtd, min);
}

/* =====================================================
SALVAR ESTOQUE NO LOCALSTORAGE
===================================================== */

function salvarEstoque(){

    const estoque = [];

    const linhas = tbody.querySelectorAll("tr");

    linhas.forEach((linha) => {

        estoque.push({

            id: linha.children[0].textContent,

            nome: linha.children[1].textContent,

            qtd: linha.children[2].textContent,

            min: linha.children[3].textContent

        });

    });

    localStorage.setItem(
        "estoque",
        JSON.stringify(estoque)
    );
}

/* =====================================================
EVENTOS DOS BOTÕES
===================================================== */

function adicionarEventosLinha(linha){

    const menosBtn =
    linha.querySelector(".menos-btn");

    const maisBtn =
    linha.querySelector(".mais-btn");

    const deleteBtn =
    linha.querySelector(".delete-btn");

    /* BOTÃO MENOS */

    menosBtn.addEventListener("click", () => {

        const qtdTd =
        linha.children[2];

        let qtd =
        Number(qtdTd.textContent);

        if(qtd > 0){

            qtd--;

            qtdTd.textContent = qtd;

            atualizarStatus(linha);

            salvarEstoque();
        }
    });

    /* BOTÃO MAIS */

    maisBtn.addEventListener("click", () => {

        const qtdTd =
        linha.children[2];

        let qtd =
        Number(qtdTd.textContent);

        qtd++;

        qtdTd.textContent = qtd;

        atualizarStatus(linha);

        salvarEstoque();
    });

    /* BOTÃO DELETE */

    deleteBtn.addEventListener("click", () => {

        linha.remove();

        atualizarTotal();

        salvarEstoque();
    });
}

/* =====================================================
CARREGAR ESTOQUE DO LOCALSTORAGE
===================================================== */

function carregarEstoque(){

    const estoque =
    JSON.parse(localStorage.getItem("estoque")) || [];

    estoque.forEach((peca) => {

        const novaLinha =
        document.createElement("tr");

        novaLinha.innerHTML = `

            <td>${peca.id}</td>

            <td>${peca.nome}</td>

            <td>${peca.qtd}</td>

            <td>${peca.min}</td>

            <td>
                ${gerarStatus(
                    Number(peca.qtd),
                    Number(peca.min)
                )}
            </td>

            <td class="acoes">

                <button class="menos-btn">

                    <i class="fa-solid fa-minus"></i>

                </button>

                <button class="mais-btn">

                    <i class="fa-solid fa-plus"></i>

                </button>

                <button class="delete-btn">

                    <i class="fa-solid fa-trash"></i>

                </button>

            </td>
        `;

        tbody.appendChild(novaLinha);

        adicionarEventosLinha(novaLinha);

    });

    atualizarTotal();
}

/* =====================================================
SALVAR PEÇA
===================================================== */

salvarPeca.addEventListener("click", () => {

    const id =
    document.getElementById("idPeca").value.trim();

    const nome =
    document.getElementById("nomePeca").value.trim();

    const qtd =
    document.getElementById("qtdPeca").value.trim();

    const min =
    document.getElementById("minPeca").value.trim();

    /* VALIDAÇÃO */

    if(!id || !nome || !qtd || !min){

        alert("Preencha todos os campos!");

        return;
    }

    /* CRIAR LINHA */

    const novaLinha =
    document.createElement("tr");

    novaLinha.innerHTML = `

        <td>${id}</td>

        <td>${nome}</td>

        <td>${qtd}</td>

        <td>${min}</td>

        <td>
            ${gerarStatus(
                Number(qtd),
                Number(min)
            )}
        </td>

        <td class="acoes">

            <button class="menos-btn">

                <i class="fa-solid fa-minus"></i>

            </button>

            <button class="mais-btn">

                <i class="fa-solid fa-plus"></i>

            </button>

            <button class="delete-btn">

                <i class="fa-solid fa-trash"></i>

            </button>

        </td>
    `;

    tbody.appendChild(novaLinha);

    adicionarEventosLinha(novaLinha);

    atualizarTotal();

    salvarEstoque();

    fecharModalFunc();

    alert("Peça cadastrada com sucesso!");
});

/* =====================================================
INICIAR SISTEMA
===================================================== */

carregarEstoque();

/* ====================================================
LOGOUT
========================================= */
function logout() {     window.location.href = "index.html"; }
