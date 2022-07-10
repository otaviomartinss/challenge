> ![Logo Kinvo](https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg)

## Instruções para executar

### Comandos

Com o node já instalado, basta rodar os comandos abaixo:

`git clone https://github.com/otaviomartinss/node.js-challenge.git`

`npm install`

`npm run build`

`npm run start:dev`

Pronto, agora é só entrar no insomnia!

### Endpoints

/api/movimentacao
  POST adiciona movimentação
  GET lista todas as movimentações

/api/movimentacao/:id
  PUT atualiza movimentação
  DELETE deleta movimentação

/api/movimentacao/:page
  GET utiliza paginação para listar as movimentações troque :page pelo número da página que deseja acessar (cada página vai listar 10 movimentações)

/api/inicial/:dataInicial/:dataFinal
  GET filtra e lista todas as movimentações entre a data inicial e a data final da mais antiga para a mais recente (para usar paginação é só adicionar /:page e trocar :page pelo número da página que deseja acessar como no anterior)
  Obs: use as datas no formato => ano-mes-diaT03:00:00.000Z (pode alterar o horário também)

/api/final/:dataInicial/:dataFinal
  GET filtra e lista todas as movimentações entre a data inicial e a data final da mais recente para a mais antiga (para usar paginação é só adicionar /:page e trocar :page pelo número da página que deseja acessar como no anterior)
  Obs: use as datas no formato => ano-mes-diaT03:00:00.000Z (pode alterar o horário também)

/api/saldo
  GET consulta saldo da carteira



## Descrição das versões
v1 
Upload com todos os arquivos para o git

v2
GET, POST, PUT conectando com o banco
Banco de dados atualizado

v3
GET, POST, PUT, DELETE 100%
Table movimentacoes atualizada

v4
Atualizei schema.prisma

v5
Filtragem das datas

v6
Table, Service e Controller do saldo

v7
Consulta de saldo
Paginação

v8
Atualização Service movimentação
Atualização Controller movimentação
Atualização Service saldo
Atualização Controller saldo
Atualização DTO
Aualização schema.prisma

v9
Atualização dos Services e Controllers
Atualização filtragem por data e paginação nos endpoints

v10
.env para testes

v11
update README.md

v12
update README.md


















# Kinvo - Desafio Back-end

## Instruções

- Utilize Typescript com Node;
- Desenvolva uma API REST ou GraphQL;
- Fique à vontade para escolher as libs, arquitetura, frameworks, banco de dados e etc.;
- Crie um arquivo README com instruções para executar seu projeto;
- Crie a collection do Insomnia ou Postman, salve com o nome "collection".

## Contexto

Um estudante a fim de poupar gastos e controlar suas finanças pessoais resolveu desenvolver um aplicativo para lhe ajudar nessa missão. Após um estudo de caso ele mapeou as seguintes funcionalidades:

- Criação da movimentação (receitas e despesas);
- Atualização da movimentação;
- Exclusão da movimentação;
- Listagem de movimentações;
- Exibição do saldo.

## Requisitos

### Desenvolvedor Júnior

- Filtro na listagem de movimentações por data (data inicial e data final);
- Paginação na listagem de movimentações.

### Desenvolvedor Pleno

- Todos os requisitos do Júnior;
- API Rest semântica (se escolheu desenvolver uma API Rest);
- Arquitetura minimamente escalável;
- Cobertura mínima de testes automatizados.

### Desenvolvedor Sênior

- Todos os requisitos do Pleno;
- Autenticação:
  - Cadastro de usuário;
  - Login;
  - Necessidade do usuário estar autenticado para a realização das atividades citadas no contexto.
- Dockerizar a aplicação;
- Boas práticas de POO (Exemplos: SOLID, Design Patterns, etc.).

### Diferenciais

- Cache;
- Segurança da aplicação;
- Deploy.

## Dicas

- Se optar por uma API REST, tenha cuidado ao definir as rotas e verbos HTTP: faça uso de boas práticas;
- Crie uma aplicação flexível, ou seja, que seja fácil incluir novas funcionalidades;
- Clean Code: o código deve ser fácil de entender;
- Atente-se a boas práticas de versionamento.

## Processo de submissão

1. Faça o fork deste repositório;
2. Faça seu projeto neste fork;
3. Suba as alterações para o seu fork;
4. Submeta uma PR para este repositório.

## Observações:

* O cumprimento dos requisitos solicitados para uma vaga em determinado nível não é garantia de aprovação. <strong>Focamos em avaliar a forma como os requisitos foram cumpridos.</strong>
* Apesar da listagem de requisitos mínimos acima, caso não tenha tido tempo suficiente ou tenha se esbarrado em alguma dificuldade, entregue o desafio ainda que incompleto e conte-nos na descrição do pull request quais foram as suas maiores dificuldades. Não se preocupe, avaliaremos ainda assim! :)
* Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário ou entre em contato.

### Boa sorte! 🍀







