# Testes do Sistema

## Visão Geral

Neste projeto foram realizados dois tipos de testes:

* Testes de Software
* Testes de Usabilidade

O objetivo foi verificar se as principais funcionalidades do sistema operam corretamente e se a experiência de uso é intuitiva para os usuários.

---

# Testes de Software

Os testes de software foram executados para validar as funcionalidades principais da aplicação, incluindo autenticação, gestão de ativos, manutenção preventiva, estoque e compras.

## Plano de Testes

| Caso de Teste                     | Procedimento                                                                      | Requisito Associado                      | Resultado Esperado                            | Dados de Entrada                                        | Resultado Obtido |
| --------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------- | ------------------------------------------------------- | ---------------- |
| CT01 - Realizar Login             | Acessar a tela de login, preencher usuário e senha e clicar em Entrar             | RF-01 - Autenticação do Usuário          | Permitir acesso à tela principal              | Usuário e senha válidos                                 | Sucesso          |
| CT02 - Cadastrar Ativo            | Acessar Gestão de Ativos, clicar em Adicionar Ativo, preencher os campos e salvar | RF-02 - Cadastro de Ativo                | Cadastrar o ativo com sucesso                 | Código e nome do ativo                                  | Sucesso          |
| CT03 - Visualizar Dados do Ativo  | Acessar as abas Dados, Componentes e Documentos                                   | RF-03 - Consulta de Informações do Ativo | Exibir as informações do ativo selecionado    | Navegação entre abas                                    | Sucesso          |
| CT04 - Cadastrar Plano Preventivo | Acessar Manutenção Preventiva, preencher os campos e salvar                       | RF-04 - Cadastro de Plano Preventivo     | Salvar o plano na lista de planos cadastrados | Nome, equipamento, tipo, frequência, data e responsável | Sucesso          |
| CT05 - Adicionar Peça ao Estoque  | Acessar Estoque, clicar em Adicionar Peça e preencher os campos                   | RF-05 - Cadastro de Peça no Estoque      | Adicionar a peça corretamente                 | Nome da peça, quantidade e demais informações           | Sucesso          |
| CT06 - Registrar Compra           | Acessar Compras, clicar em Nova Compra e preencher os dados                       | RF-06 - Registro de Compra               | Registrar a compra e atualizar o painel       | Dados da compra e valor                                 | Sucesso          |

---

## Evidências dos Testes

As evidências podem ser armazenadas em uma pasta específica do projeto, como:

```text
/docs/evidencias/
```

### CT01 - Realizar Login

**Requisito:** RF-01 - Autenticação do Usuário

**Evidência:** Inserir link ou imagem

### CT02 - Cadastrar Ativo

**Requisito:** RF-02 - Cadastro de Ativo

**Evidência:** Inserir link ou imagem

### CT03 - Visualizar Dados do Ativo

**Requisito:** RF-03 - Consulta de Informações do Ativo

**Evidência:** Inserir link ou imagem

### CT04 - Cadastrar Plano Preventivo

**Requisito:** RF-04 - Cadastro de Plano Preventivo

**Evidência:** Inserir link ou imagem

### CT05 - Adicionar Peça ao Estoque

**Requisito:** RF-05 - Cadastro de Peça no Estoque

**Evidência:** Inserir link ou imagem

### CT06 - Registrar Compra

**Requisito:** RF-06 - Registro de Compra

**Evidência:** Inserir link ou imagem

---

## Avaliação dos Testes de Software

Os testes realizados demonstraram que as funcionalidades principais do sistema estão operando conforme o esperado.

### Pontos Fortes

* Processo de autenticação funcional.
* Cadastro e consulta de ativos funcionando corretamente.
* Cadastro de planos preventivos concluído com sucesso.
* Operações de estoque e compras executadas sem falhas.
* Estrutura modular com telas separadas por funcionalidade.

### Oportunidades de Melhoria

* Implementação de validações adicionais nos formulários.
* Aprimoramento da navegação entre telas.
* Revisão das informações exibidas em tabelas e cards.
* Tratamento de mensagens de erro e feedback ao usuário.

---

# Testes de Usabilidade

Os testes de usabilidade tiveram como objetivo avaliar a facilidade de uso da aplicação e verificar se os usuários conseguem executar as principais tarefas propostas.

## Cenários Avaliados

### Cenário 1 - Realizar Login

O usuário deve acessar a aplicação utilizando usuário e senha válidos.

### Cenário 2 - Cadastrar um Novo Ativo

O usuário deve acessar a tela de Gestão de Ativos e registrar um novo equipamento.

### Cenário 3 - Consultar Informações de um Ativo

O usuário deve localizar um ativo e navegar entre as abas de dados, componentes e documentos.

### Cenário 4 - Cadastrar Plano de Manutenção Preventiva

O usuário deve acessar a tela de Manutenção Preventiva e cadastrar um novo plano.

---

## Registro dos Testes de Usabilidade

| Cenário           | Usuário   | Taxa de Sucesso | Satisfação (1-5) | Tempo   |
| ----------------- | --------- | --------------- | ---------------- | ------- |
| Cenário 1 - Login | Usuário 1 | Sim             | 5                | 20s     |
| Cenário 1 - Login | Usuário 2 | Sim             | 4                | 25s     |
| Cenário 1 - Login | Usuário 3 | Sim             | 5                | 18s     |
| **Média**         | -         | **100%**        | **4,6**          | **21s** |

> Repita a mesma estrutura para os demais cenários avaliados.

---

## Avaliação dos Testes de Usabilidade

De modo geral, os participantes conseguiram concluir as tarefas propostas sem dificuldades significativas.

### Aspectos Positivos

* Navegação simples e intuitiva.
* Organização adequada das funcionalidades.
* Facilidade para localizar recursos importantes.
* Fluxo de utilização consistente entre as telas.

### Aspectos a Melhorar

* Tornar os formulários mais explicativos.
* Melhorar textos de apoio e mensagens do sistema.
* Padronizar elementos visuais e componentes da interface.
* Aprimorar a experiência do usuário em dispositivos de diferentes tamanhos.

---

## Conclusão

Os testes de software e usabilidade indicam que o sistema atende aos requisitos funcionais propostos para a gestão de manutenção industrial. As funcionalidades essenciais foram validadas com sucesso e os usuários demonstraram facilidade na execução das tarefas principais.
As melhorias identificadas serão consideradas em versões futuras com o objetivo de aumentar a eficiência, a consistência visual e a experiência geral de utilização da aplicação.
