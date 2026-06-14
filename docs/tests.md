Testes

Neste projeto, foram realizados dois tipos de testes: teste de software e teste de usabilidade. O objetivo foi verificar se as principais telas do sistema funcionam corretamente e se o uso delas está fácil para o usuário.

Teste de Software

Nesta etapa, foram testadas as principais funcionalidades do sistema, como login, cadastro de ativo, cadastro de plano preventivo, busca em estoque e acesso à área de compras.

Plano de Testes de Software

Caso de teste	Procedimento	Requisito associado	Resultado esperado	Dados de entrada	Resultado obtido
CT01 - Realizar login	Acessar a tela de login, preencher usuário e senha e clicar em entrar	RF-01 - Autenticação do usuário	O sistema deve permitir o acesso à tela principal	Usuário e senha válidos	Sucesso
CT02 - Cadastrar ativo	Abrir a tela de Gestão de Ativos, clicar em adicionar ativo, preencher os campos e salvar	RF-02 - Cadastro de ativo	O ativo deve ser cadastrado com sucesso	Código e nome do ativo	Sucesso
CT03 - Visualizar dados do ativo	Na tela de Gestão de Ativos, acessar as abas de dados, componentes e documentos	RF-03 - Consulta de informações do ativo	O sistema deve exibir as informações do ativo selecionado	Clique nas abas da tela	Sucesso
CT04 - Cadastrar plano preventivo	Abrir a tela de Manutenção Preventiva, preencher os campos do plano e salvar	RF-04 - Cadastro de plano preventivo	O plano deve ser salvo na lista de planos cadastrados	Nome, equipamento, tipo, frequência, data e responsável	Sucesso
CT05 - Adicionar peça no estoque	Abrir a tela de Estoque, clicar em adicionar peça e preencher os campos	RF-05 - Cadastro de peça no estoque	A peça deve ser adicionada corretamente	Nome da peça, quantidade e demais dados do formulário	Sucesso
CT06 - Registrar compra	Abrir a tela de Compras, clicar em nova compra e preencher os dados	RF-06 - Registro de compra	A compra deve ser registrada e atualizada no painel	Dados da compra e valor	Sucesso
Registro dos Testes de Software

Os testes foram executados nas principais telas do sistema. Para cada caso de teste, foi registrado o funcionamento da funcionalidade por meio de vídeo ou imagem.

Exemplo de preenchimento:

CT01 - Realizar login
Requisito associado: RF-01 - Autenticação do usuário
Link do teste realizado: inserir link aqui

CT02 - Cadastrar ativo
Requisito associado: RF-02 - Cadastro de ativo
Link do teste realizado: inserir link aqui

CT03 - Visualizar dados do ativo
Requisito associado: RF-03 - Consulta de informações do ativo
Link do teste realizado: inserir link aqui

CT04 - Cadastrar plano preventivo
Requisito associado: RF-04 - Cadastro de plano preventivo
Link do teste realizado: inserir link aqui

CT05 - Adicionar peça no estoque
Requisito associado: RF-05 - Cadastro de peça no estoque
Link do teste realizado: inserir link aqui

CT06 - Registrar compra
Requisito associado: RF-06 - Registro de compra
Link do teste realizado: inserir link aqui

Avaliação dos Testes de Software

Os testes mostraram que as telas principais do sistema estão funcionando de forma correta. O login permite acessar o sistema, o cadastro de ativos funciona, o plano preventivo pode ser salvo e as áreas de estoque e compras também apresentam suas funções principais.

Como ponto forte, o sistema está organizado e possui telas separadas para cada parte da manutenção. Como ponto fraco, algumas telas ainda podem ser melhoradas para ficar mais claras e mais fáceis de usar. Em próximas versões, a ideia é melhorar a validação dos campos, deixar a navegação mais intuitiva e revisar melhor os dados exibidos nas tabelas e cards.

Teste de Usabilidade

O objetivo dos testes de usabilidade foi verificar se os usuários conseguem usar o sistema com facilidade, principalmente nas telas mais importantes do projeto.

Foram avaliados cenários ligados às principais funcionalidades da aplicação, como login, cadastro de ativo, cadastro de plano preventivo e consulta de informações nas telas.

Cenários de Teste de Usabilidade

Você é um usuário do sistema e precisa entrar na aplicação. Realize o login com usuário e senha.
Você precisa cadastrar um novo ativo no sistema. Acesse a tela de Gestão de Ativos e faça o cadastro.
Você precisa consultar informações de um ativo. Acesse a tela de Gestão de Ativos e navegue pelas abas de dados, componentes e documentos.
Você precisa cadastrar um plano de manutenção preventiva. Acesse a tela de Manutenção Preventiva e salve um novo plano.
Registro dos Testes de Usabilidade

Para cada cenário, foi observado:

Taxa de sucesso: se o usuário conseguiu concluir a tarefa.
Satisfação subjetiva: nota dada pelo usuário de 1 a 5.
Tempo para conclusão: tempo gasto para finalizar a tarefa.
Exemplo de preenchimento:

Cenário	Usuário	Taxa de sucesso	Satisfação subjetiva	Tempo
Cenário 1 - Login	Usuário 1	Sim	5	20s
Cenário 1 - Login	Usuário 2	Sim	4	25s
Cenário 1 - Login	Usuário 3	Sim	5	18s
Média		100%	4,6	21s
Você pode repetir esse padrão para os outros cenários.

Avaliação dos Testes de Usabilidade

De modo geral, os usuários conseguiram realizar as tarefas propostas sem grandes dificuldades. As telas principais do sistema foram consideradas organizadas e objetivas.
