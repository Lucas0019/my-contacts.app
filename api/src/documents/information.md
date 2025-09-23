# Notas de Aprendizado | JStack

## Backend | Nodejs e Express

### Folder Structure

```js
src
├── controllers
│   └── Controller.js
├── index.js
├── middlewares
│   └── Middleware.js
├── repositories
│   └── Repository.js
├── routes
│   └── routes.js
└── index.js
```

### Parttern Singleton

File Exemple: `src/index.js`

O padrão Singleton é um padrão de projeto que garante que uma classe
tenha apenas uma instância e fornece um ponto global de acesso a ela.
Com isso é possível ter um único objeto que armazena e compartilha
informações entre diferentes partes da aplicação.

Exemplo de uso: Conexão com o banco de dados

### Controllers

File Exemple: `src/controllers/Controller.js`

O padrão Controller é um padrão de projeto que abstrai a lógica das
rotas, facilitando a manutenção e testabilidade do código. Sendo uma
camada entre as rotas e o banco de dados, o Controller é responsável
por fazer as operações de CRUD (Create, Read, Update e Delete) no banco
de dados.

**Parttern Development:** index, show, store, update, delete

- Index: Listagem de registros
- Show: Exibir um único registro
- Store: Criar um registro
- Update: Alterar um registro
- Delete: Remover um registro

### Pattern Repository

File Exemple: `src/repositories/Repository.js`

O padrão Repository é um padrão de projeto que abstrai a comunicação
entre a aplicação e o banco de dados, facilitando a manutenção e
testabilidade do código. Sendo uma camada entre os controllers e o
banco de dados, o Repository é responsável por fazer as operações
de CRUD (Create, Read, Update e Delete) no banco de dados.

**Parttern Development:** findAll, findById, create, update, delete

### Middlewares

São funções que recebem e retornam requisições e respostas.
Podem ser utilizados para:

- Interromper requisições
- Alterar dados da requisição
- Alterar dados da resposta
- Finalizar a requisição
- Executar outras lógicas
- Definit como as rotas serão acessadas, se serão acessadas, etc.

 **No Express, os middlewares são executados na ordem em que são declarados.**

 Para que um middleware interrompa uma requisição, é necessário que ele
 retorne uma resposta.

 Para que um middleware altere dados da requisição, é necessário que ele
 altere o objeto req.

 Para que um middleware altere dados da resposta, é necessário que ele
 altere o objeto res.

 Para que um middleware finalize a requisição, é necessário que ele
 chame a função next.

 Para que um middleware execute outras lógicas, é necessário que ele
 execute a função next.

### Docker

O Docker é uma plataforma de código aberto que facilita a criação e
administração de ambientes isolados. Esses ambientes isolados são
chamados de containers e podem ser criados a partir de imagens.

**Imagem:** É um modelo somente leitura usado para criar containers.

**Container:** É uma instância de uma imagem. É possível criar, iniciar, parar,
 mover ou deletar um container usando a API ou a CLI do Docker.

**Dockerfile:** É um arquivo de texto que contém todos os comandos que um
usuário pode chamar na linha de comando para montar uma imagem.

### Postgres SQL ( Banco de Dados Relacional )

O Postgres é um banco de dados relacional de código aberto que utiliza
a linguagem SQL para realizar consultas. Ele é um dos bancos de dados
relacionais mais utilizados no mundo e é muito utilizado em aplicações
que precisam de um banco de dados com alta performance e confiabilidade.

**schema:** É um conjunto de tabelas, views, funções, etc. que pertencem
a um banco de dados.

**tabela:** É um conjunto de linhas e colunas que armazenam dados de uma
entidade.

**coluna:** É uma propriedade de uma tabela que armazena um tipo de dado.

**linha:** É um registro de uma tabela que armazena os dados de uma
entidade.

**chave primária:** É uma coluna que identifica unicamente uma linha de
uma tabela.

**chave estrangeira:** É uma coluna que referencia a chave primária de
outra tabela.

**índice:** É uma estrutura de dados que melhora a performance de
consultas em uma tabela.

**view:** É uma tabela virtual que armazena o resultado de uma consulta.

**trigger:** É um procedimento que é executado automaticamente quando
ocorre um evento em uma tabela.


#### Comandos Postgres Terminal

```bash
# Acessar o container do Postgres
docker exec -it postgres psql -U postgres

# Listar bancos de dados
\l

# Conectar a um banco de dados
\c <nome_do_banco>
\c mycontacts

# Listar tabelas
\dt

# Listar funções
\df

# Listar views
\dv

# Listar índices
\di

# Listar triggers
\dg

# Listar comandos
\?

# Sair do terminal do Postgres
\q
```

```bash
          List of relations
 Schema |    Name    | Type  | Owner
--------+------------+-------+-------
 public | categories | table | root

```

### SQl Injection

A injeção de SQL é uma vulnerabilidade que permite que um invasor execute
comandos SQL arbitrários em um banco de dados. Essa vulnerabilidade
ocorre quando o usuário insere dados não confiáveis em uma consulta SQL.

**Exemplo Errado de caso criação de usuário:**

```sql
async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
      VALUES ('${name}', '${email}', '${phone}', '${category_id}')
      RETURNING *
    `);

    return row;
  }
```

**Exemplo Correto de caso criação de usuário:**

```sql
 async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`INSERT INTO contacts(name, email, phone, category_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);

    return row;
  }
```

No cenário acima, o invasor pode inserir um comando SQL no campo name
e executar comandos SQL arbitrários no banco de dados. Podendo até
mesmo deletar o banco de dados.

**Exemplo de ataque:**

```sql
''); DROP TABLE contacts; --
```
