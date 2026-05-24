# Especificações do Projeto

## Perfis de Usuários

| Perfil | Descrição | Necessidades |
|---|---|---|
| Técnicos de manutenção | Responsáveis pela execução das manutenções preventivas e corretivas dos equipamentos. | Organizar histórico de manutenção; Registrar chamados técnicos; Atualizar status das manutenções; Reduzir erros de registros manuais. |
| Supervisores de manutenção | Responsáveis pelo acompanhamento das atividades de manutenção e distribuição de tarefas. | Acompanhar manutenções preventivas; Distribuir chamados; Organizar execução das atividades; Melhorar comunicação entre setores. |
| Engenheiros de produção | Responsáveis pelo acompanhamento operacional e análise de falhas dos equipamentos. | Acessar informações centralizadas; Analisar histórico de falhas; Alinhar ações entre setores; Melhorar eficiência operacional. |
| Gestores de operações | Responsáveis pela visão estratégica e definição de prioridades operacionais. | Monitorar manutenções em aberto; Definir prioridades; Evitar inconsistências; Acompanhar indicadores operacionais. |

## Histórias de Usuários

| Eu como... | Quero/Desejo... | Para... |
|---|---|---|
| Técnico de manutenção | Registrar uma manutenção realizada | Não perder o histórico do equipamento. |
| Técnico de manutenção | Atualizar o status de um chamado | Informar o andamento da manutenção. |
| Supervisor de manutenção | Acompanhar as manutenções preventivas registradas | Evitar atrasos nas entregas. |
| Supervisor de manutenção | Distribuir chamados entre os técnicos | Organizar a execução das atividades. |
| Engenheiro de produção | Acessar informações centralizadas sobre as manutenções | Alinhar as ações entre os setores envolvidos. |
| Engenheiro de produção | Analisar histórico de falhas dos equipamentos | Identificar padrões de problemas. |
| Gestor de operações | Ter visão geral das manutenções em aberto | Definir prioridades operacionais. |
| Gestor de operações | Monitorar alterações durante a operação | Evitar inconsistências nos registros. |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

 ID | Descrição | Prioridade |
|---|---|---|
| RF-01 | O sistema deve possuir uma tela de Gestão de Ativos para cadastro técnico dos equipamentos industriais. | Alta |
| RF-02 | O sistema deve permitir o cadastro de planos de manutenção preventiva. | Alta |
| RF-03 | O sistema deve apresentar indicadores operacionais no módulo PCM. | Alta |
| RF-04 | O sistema deve permitir o acompanhamento de ordens de serviço e backlog operacional. | Alta |
| RF-05 | O sistema deve possibilitar a visualização de componentes e documentos técnicos dos ativos. | Média |
| RF-06 | O sistema deve permitir a organização hierárquica dos equipamentos por setor e planta industrial. | Média |
| RF-07 | O sistema deve possuir navegação lateral entre os módulos do sistema. | Média |
| RF-08 | O sistema deve permitir o cadastro de novas manutenções através de formulários interativos. | Alta |


### Requisitos Não Funcionais

| ID | Descrição | Prioridade |
|---|---|---|
| RNF-01 | O sistema deve possuir interface intuitiva e de fácil utilização. | Alta |
| RNF-02 | O sistema deve possuir layout responsivo para diferentes resoluções de tela. | Alta |
| RNF-03 | O sistema deve garantir organização visual das informações operacionais. | Média |
| RNF-04 | O sistema deve utilizar armazenamento local para persistência temporária dos dados. | Média |
| RNF-05 | O sistema deve possuir navegação rápida entre telas e funcionalidades. | Média |
| RNF-06 | O sistema deve manter padronização visual entre os módulos desenvolvidos. | Média |

 ## Gestão do Projeto e Metodologias Ágeis

| Área | Ferramenta / Metodologia | Aplicação no Projeto |
|---|---|---|
| Metodologia Ágil | Scrum + Kanban | Organização incremental do desenvolvimento com acompanhamento contínuo das tarefas. |
| Gestão de Tarefas | Trello | Organização semanal das atividades utilizando modelo Kanban. |
| Comunicação Oficial | Microsoft Teams | Reuniões, alinhamentos técnicos e compartilhamento de informações do projeto. |
| Comunicação Secundária | WhatsApp | Dúvidas rápidas e comunicação emergencial entre os integrantes. |
| Reuniões de Desenvolvimento | Reuniões semanais | Acompanhamento realizado duas vezes por semana para validação do progresso. |
| Versionamento | GitHub | Controle de versões e colaboração do código-fonte. |
| Prototipação e Design | Figma | Desenvolvimento dos wireframes e identidade visual das telas. |
| Organização do Desenvolvimento | Desenvolvimento incremental | Divisão das funcionalidades em pequenas entregas contínuas. |
| Controle de Entregas | Sprints semanais | Organização das implementações por etapas e prioridades. |
| Validação | Revisão colaborativa | Verificação das funcionalidades e alinhamento da equipe durante as reuniões. |

