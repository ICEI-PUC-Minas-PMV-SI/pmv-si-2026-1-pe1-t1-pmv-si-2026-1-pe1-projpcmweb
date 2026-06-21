/* =====================================================
LOCALSTORAGE
===================================================== */

const _comprasRaw = JSON.parse(
    localStorage.getItem("compras")
) || [];

// Normaliza registros existentes para garantir compatibilidade:
// - mantém `qtd` como Number
// - transforma `valor` legado em `valorUnitario` quando necessário
// - calcula `valorTotal = qtd * valorUnitario`
const compras = _comprasRaw.map(c => {

    const qtd = Number(c.qtd) || 0;

    // Valor unitário pode já estar em `valorUnitario` ou no campo legado `valor`.
    const valorUnitario = c.valorUnitario !== undefined
        ? Number(c.valorUnitario)
        : Number(c.valor || 0);

    // Se houver `valorTotal` use-o; caso contrário calcule a partir do unitário.
    const valorTotal = c.valorTotal !== undefined
        ? Number(c.valorTotal)
        : Number((valorUnitario * qtd));

    return {
        ...c,
        qtd,
        valorUnitario,
        valorTotal
    };
});

/* =====================================================
ELEMENTOS
===================================================== */

const tbody = document.getElementById("tbody");

const totalCompras = document.getElementById("totalCompras");

const comprasMes = document.getElementById("comprasMes");

const pedidos = document.getElementById("pedidos");

const modal = document.getElementById("modal");

const btnCompra = document.getElementById("btnCompra");

const fecharModal = document.getElementById("fecharModal");

const salvarCompra = document.getElementById("salvarCompra");

/* =====================================================
INPUTS
===================================================== */

const idCompra = document.getElementById("idCompra");

const produtoCompra = document.getElementById("produtoCompra");

const qtdCompra = document.getElementById("qtdCompra");

const valorCompra = document.getElementById("valorCompra");

const dataCompra = document.getElementById("dataCompra");

/* =====================================================
SALVAR LOCALSTORAGE
===================================================== */

function salvarCompras(){

    localStorage.setItem(
        "compras",
        JSON.stringify(compras)
    );
}

/* =====================================================
TABELA
===================================================== */

function atualizarTabela(){

    tbody.innerHTML = "";

    compras.forEach((c, index) => {

        tbody.innerHTML += `

            <tr>

                <td>${c.id}</td>

                <td>${c.produto}</td>

                        <td>${c.qtd}</td>

                        <td>R$ ${c.valorTotal.toFixed(2)}
                            <span style="display:block;font-size:0.85em;color:#475569;">(R$ ${c.valorUnitario.toFixed(2)}/un)</span>
                        </td>

                <td>${formatarData(c.data)}</td>

                <td>

                    <button
                        class="delete-btn"
                        onclick="removerCompra(${index})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </td>

            </tr>
        `;
    });

    atualizarCards();

    atualizarGrafico();
}

/* =====================================================
CARDS
===================================================== */

function atualizarCards(){

    let total = 0;

    let totalMes = 0;

    const mesAtual = new Date().getMonth();

    const anoAtual = new Date().getFullYear();

    compras.forEach(c => {

        total += Number(c.valorTotal) || 0;

        const dataObj = new Date(c.data);

        if(

            dataObj.getMonth() === mesAtual &&

            dataObj.getFullYear() === anoAtual

        ){

            totalMes += Number(c.valorTotal) || 0;
        }
    });

    totalCompras.textContent =
        `R$ ${total.toFixed(2)}`;

    comprasMes.textContent =
        `R$ ${totalMes.toFixed(2)}`;

    pedidos.textContent =
        compras.length;
}

/* =====================================================
MODAL
===================================================== */

btnCompra.addEventListener("click", () => {

    modal.style.display = "flex";
});

/* FECHAR */

fecharModal.addEventListener("click", fecharModalFunc);

function fecharModalFunc(){

    modal.style.display = "none";

    limparCampos();
}

/* FECHAR AO CLICAR FORA */

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        fecharModalFunc();
    }
});

/* =====================================================
SALVAR COMPRA
===================================================== */

salvarCompra.addEventListener("click", () => {

    const qtd = Number(qtdCompra.value);

    const valorUnitario = Number(valorCompra.value);

    const novaCompra = {

        id: idCompra.value,

        produto: produtoCompra.value,

        qtd: qtd,

        valorUnitario: valorUnitario,

        valorTotal: Number((qtd * valorUnitario)),

        data: dataCompra.value
    };

    /* VALIDAÇÃO */

    if(

        !novaCompra.id ||

        !novaCompra.produto ||

        isNaN(novaCompra.qtd) ||

        isNaN(novaCompra.valorUnitario) ||

        !novaCompra.data

    ){

        alert("Preencha todos os campos.");

        return;
    }

    /* ADICIONA */

    compras.push(novaCompra);

    /* SALVA */

    salvarCompras();

    /* ATUALIZA */

    atualizarTabela();

    /* FECHA MODAL */

    fecharModalFunc();

    alert("Compra cadastrada com sucesso!");
});

/* =====================================================
REMOVER
===================================================== */

function removerCompra(index){

    const confirmar = confirm(
        "Deseja remover esta compra?"
    );

    if(confirmar){

        compras.splice(index, 1);

        salvarCompras();

        atualizarTabela();
    }
}

/* =====================================================
LIMPAR CAMPOS
===================================================== */

function limparCampos(){

    idCompra.value = "";

    produtoCompra.value = "";

    qtdCompra.value = "";

    valorCompra.value = "";

    dataCompra.value = "";
}

/* =====================================================
FORMATAR DATA
===================================================== */

function formatarData(data){

    const novaData = new Date(data);

    return novaData.toLocaleDateString("pt-BR");
}

/* =====================================================
GRÁFICO
===================================================== */

const ctx = document.getElementById("graficoCompras");

const grafico = new Chart(ctx, {
    type: "bar",

    data: {
        labels: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"
        ],

        datasets: [{
            label: "Gastos Mensais",
            data: new Array(12).fill(0),

            /* Azul do padrão */
            backgroundColor: "#2563eb",

            /* Borda */
            borderColor: "#1d4ed8",
            borderWidth: 1,

            borderRadius: 6
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                labels: {
                    /* Cor escura para aparecer no fundo branco */
                    color: "#1e293b",

                    font: {
                        size: 14
                    }
                }
            }
        },

        scales: {
            x: {
                ticks: {
                    /* Meses visíveis */
                    color: "#1e293b"
                },

                grid: {
                    color: "#e5e7eb"
                }
            },

            y: {
                beginAtZero: true,

                ticks: {
                    /* Valores visíveis */
                    color: "#1e293b",

                    callback: function(value) {
                        return "R$ " + value;
                    }
                },

                grid: {
                    color: "#e5e7eb"
                }
            }
        }
    }
});
/* =====================================================
ATUALIZAR GRÁFICO
===================================================== */

function atualizarGrafico(){

    const valoresMes = new Array(12).fill(0);

    compras.forEach(c => {

        const data = new Date(c.data);

        const mes = data.getMonth();

        valoresMes[mes] += Number(c.valorTotal) || 0;
    });

    grafico.data.datasets[0].data = valoresMes;

    grafico.update();
}

/* =====================================================
INICIAR SISTEMA
===================================================== */

atualizarTabela();

/*=======================================================
LOGOUT
======================================================*/
function logout() {     window.location.href = "index.html"; }
