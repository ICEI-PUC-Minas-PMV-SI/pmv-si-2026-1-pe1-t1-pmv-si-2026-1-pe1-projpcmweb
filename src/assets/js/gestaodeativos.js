function abrirModal(){

    document
        .getElementById("modal")
        .style.display = "flex";
}

function fecharModal(){

    document
        .getElementById("modal")
        .style.display = "none";
}

function salvarAtivo(){

    let nome =
        document
        .getElementById("nomeAtivo")
        .value;

    let codigo =
        document
        .getElementById("codigoAtivo")
        .value;

    if(nome === "" || codigo === ""){

        alert("Preencha todos os campos.");

        return;
    }

    let novoAtivo = {

        codigo: codigo,

        nome: nome
    };

    let ativos =
        JSON.parse(
            localStorage.getItem("ativos")
        ) || [];

    ativos.push(novoAtivo);

    localStorage.setItem(
        "ativos",
        JSON.stringify(ativos)
    );

    alert("Ativo cadastrado com sucesso!");

    fecharModal();
}

function listarAtivos(){

    let ativos =
        JSON.parse(
            localStorage.getItem("ativos")
        ) || [];

    console.log(ativos);
}

function mostrarDados(){

    document
        .getElementById("conteudo")
        .innerHTML = `

        <table>

            <tr>
                <th>Campo</th>
                <th>Informação</th>
            </tr>

            <tr>
                <td>Código</td>
                <td>EQ-001</td>
            </tr>

            <tr>
                <td>Setor</td>
                <td>Fundição</td>
            </tr>

            <tr>
                <td>Criticidade</td>
                <td>Alta</td>
            </tr>

            <tr>
                <td>Fabricante</td>
                <td>Metalúrgica Brasil</td>
            </tr>

        </table>
    `;
}

function mostrarComponentes(){

    document
        .getElementById("conteudo")
        .innerHTML = `

        <table>

            <tr>
                <th>Componente</th>
                <th>Status</th>
            </tr>

            <tr>
                <td>Motor Principal</td>
                <td>Operando</td>
            </tr>

            <tr>
                <td>Sensor Temperatura</td>
                <td>Alerta</td>
            </tr>

            <tr>
                <td>Painel Elétrico</td>
                <td>Operando</td>
            </tr>

        </table>
    `;
}

function mostrarDocumentos(){

    document
        .getElementById("conteudo")
        .innerHTML = `

        <table>

            <tr>
                <th>Documento</th>
                <th>Tipo</th>
            </tr>

            <tr>
                <td>Manual Operacional</td>
                <td>PDF</td>
            </tr>

            <tr>
                <td>Diagrama Elétrico</td>
                <td>DWG</td>
            </tr>

            <tr>
                <td>Histórico de Manutenção</td>
                <td>XLSX</td>
            </tr>

        </table>
    `;
}

function logout() {
    window.location.href = "login.html";
}
