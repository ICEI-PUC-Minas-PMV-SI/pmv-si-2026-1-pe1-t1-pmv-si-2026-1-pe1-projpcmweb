const pecas = [
    {id:323, item:"Rolamento", qtd:3, min:10},
    {id:123, item:"Peça", qtd:33, min:30},
    {id:543, item:"Graxa", qtd:28, min:25},
    {id:752, item:"Manivela", qtd:9, min:15},
];

/* =====================================================
   ELEMENTOS HTML
===================================================== */

const pesquisa = document.getElementById("pesquisa");

const tbody = document.getElementById("tbody");

const totalPecas = document.getElementById("totalPecas");

const btnAdicionar = document.getElementById("btnAdicionar");

const modal = document.getElementById("modal");

const fecharModal = document.getElementById("fecharModal");

const salvarPeca = document.getElementById("salvarPeca");

const idPeca = document.getElementById("idPeca");

const nomePeca = document.getElementById("nomePeca");

const qtdPeca = document.getElementById("qtdPeca");

const minPeca = document.getElementById("minPeca");

/* =====================================================
   ATUALIZAR TABELA
===================================================== */

function atualizarTabela(filtro = ""){

    tbody.innerHTML = "";

    pecas.forEach((p, index) => {

        /* PESQUISA */

        const textoBusca = filtro.toLowerCase();

        const itemEncontrado =
            p.item.toLowerCase().includes(textoBusca) ||
            String(p.id).includes(textoBusca);

        if(!itemEncontrado){

            return;
        }

        /* STATUS */

        const status =
        p.qtd >= p.min
        ? `<span class="ok">Em estoque</span>`
        : `<span class="low">Estoque baixo</span>`;

        /* LINHA DA TABELA */

        tbody.innerHTML += `
            <tr>

                <td>${p.id}</td>

                <td>${p.item}</td>

                <td>${p.qtd}</td>

                <td>${p.min}</td>

                <td>${status}</td>

                <td class="acoes">

                    <!-- BAIXAR -->

                    <button
                        class="menos-btn"
                        onclick="baixarPeca(${index})"
                    >
                        <i class="fa-solid fa-minus"></i>
                    </button>

                    <!-- ADICIONAR -->

                    <button
                        class="mais-btn"
                        onclick="adicionarQuantidade(${index})"
                    >
                        <i class="fa-solid fa-plus"></i>
                    </button>

                    <!-- REMOVER -->

                    <button
                        class="delete-btn"
                        onclick="removerPeca(${index})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </td>

            </tr>
        `;
    });

    totalPecas.textContent = pecas.length;
}

/* =====================================================
   PESQUISA
===================================================== */

pesquisa.addEventListener("input", () => {

    atualizarTabela(pesquisa.value);
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

fecharModal.addEventListener("click", fecharModalFunc);

function fecharModalFunc(){

    modal.style.display = "none";

    limparCampos();
}

/* =====================================================
   FECHAR AO CLICAR FORA
===================================================== */

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        fecharModalFunc();
    }
});

/* =====================================================
   SALVAR PEÇA
===================================================== */

salvarPeca.addEventListener("click", () => {

    const novaPeca = {

        id: idPeca.value,

        item: nomePeca.value,

        qtd: Number(qtdPeca.value),

        min: Number(minPeca.value)
    };

    /* VALIDAÇÃO */

    if(

        !novaPeca.id ||

        !novaPeca.item ||

        isNaN(novaPeca.qtd) ||

        isNaN(novaPeca.min)

    ){

        alert("Preencha todos os campos.");

        return;
    }

    /* ADICIONA NO ARRAY */

    pecas.push(novaPeca);

    /* ATUALIZA TABELA */

    atualizarTabela(pesquisa.value);

    /* FECHA MODAL */

    fecharModalFunc();
});

/* =====================================================
   LIMPAR CAMPOS
===================================================== */

function limparCampos(){

    idPeca.value = "";

    nomePeca.value = "";

    qtdPeca.value = "";

    minPeca.value = "";
}

/* =====================================================
   REMOVER PEÇA
===================================================== */

function removerPeca(index){

    const confirmar = confirm(
        "Deseja remover esta peça?"
    );

    if(confirmar){

        pecas.splice(index, 1);

        atualizarTabela(pesquisa.value);
    }
}

/* =====================================================
   BAIXAR PEÇA
===================================================== */

function baixarPeca(index){

    if(pecas[index].qtd > 0){

        pecas[index].qtd--;

        atualizarTabela(pesquisa.value);
    }
}

/* =====================================================
   ADICIONAR QUANTIDADE
===================================================== */

function adicionarQuantidade(index){

    pecas[index].qtd++;

    atualizarTabela(pesquisa.value);
}

/* =====================================================
   INICIAR SISTEMA
===================================================== */

atualizarTabela();