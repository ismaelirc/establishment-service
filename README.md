# Establishment Service API

API REST para gerenciamento de estabelecimentos, construída com NestJS e PostgreSQL.

## 🚀 Tecnologias

- NestJS
- PostgreSQL
- Prisma ORM
- Docker
- Swagger (Documentação da API)

## 📋 Pré-requisitos

- Docker
- Docker Compose

## 🔧 Instalação e Execução

1. Clone o repositório
```bash
git clone [url-do-repositorio]
cd establishment-service
```

2. Execute o projeto com Docker Compose
```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:3000/v1`
A documentação Swagger estará disponível em `http://localhost:3000/v1/docs`

## 📦 Estrutura do Projeto

```
establishment-service/
├── src/
│   ├── establishment/
│   │   ├── dto/
│   │   ├── establishment.controller.ts
│   │   ├── establishment.service.ts
│   │   └── establishment.module.ts
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## 📚 Endpoints da API

### Listar Estabelecimentos
```http
GET /v1/establishment
```

**Query Parameters:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Itens por página (padrão: 10)

**Resposta:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Nome do Estabelecimento",
      "document": "12345678901234",
      "address": "Endereço do Estabelecimento",
      "phone": "11999999999"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

### Buscar Estabelecimento por ID
```http
GET /v1/establishment/:id
```

**Resposta:**
```json
{
  "id": "uuid",
  "name": "Nome do Estabelecimento",
  "document": "12345678901234",
  "address": "Endereço do Estabelecimento",
  "phone": "11999999999"
}
```

### Criar Estabelecimento
```http
POST /v1/establishment
```

**Body:**
```json
{
  "name": "Nome do Estabelecimento",
  "document": "12345678901234",
  "address": "Endereço do Estabelecimento",
  "phone": "11999999999"
}
```

**Resposta:**
```json
{
  "id": "uuid",
  "name": "Nome do Estabelecimento",
  "document": "12345678901234",
  "address": "Endereço do Estabelecimento",
  "phone": "11999999999"
}
```

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL como banco de dados. As configurações de conexão são:

- **Host**: localhost
- **Porta**: 5432
- **Database**: establishment-db
- **Usuário**: XXXX-user
- **Senha**: XXXX

Para acessar o banco de dados usando DBeaver ou outro cliente SQL:
1. Certifique-se de que o container está rodando
2. Use as credenciais acima para conectar

## 🔍 Documentação da API

A documentação completa da API está disponível através do Swagger UI em:
```
http://localhost:3000/v1/docs
```

## 🛠️ Desenvolvimento

Para desenvolvimento local sem Docker:

1. Instale as dependências
```bash
pnpm install
```

2. Configure o arquivo .env com as variáveis de ambiente necessárias

3. Execute as migrations do Prisma
```bash
pnpm prisma migrate deploy
```

4. Inicie o servidor de desenvolvimento
```bash
pnpm start:dev
```

## 📄 License

This project is licensed under the CC BY-NC-ND 4.0 License.  
Not for commercial use. See the LICENSE file for details.