# recolhimento-de-materias-reciclaveis
## Tecnologias Utilizadas nesse site:
- Node.js
- Postgres
### Rodando o projeto 
- Para rodar o projeto é necessario ter a ultima versão do node lts;
- Criar manualmente no postgres uma base de dados com nome 'myapp_test' e se não estiver usando usuario e senha padrão do docker postgres terá que mudar as conf e colocar do seu usuario;
- Certifique-se de estar no mesmo diretorio que package.json e instalar as dependencias com npm:
  ```
  npm install
  ```
- Depois, para rodar o projeto:
  ```
  npm run dev
  ```
- Criar as migrations no bd:
  ```
  npm run knex:migrate
  ```
- Para criar as seeds:
  ```
  npm run knex:seed
  ```
