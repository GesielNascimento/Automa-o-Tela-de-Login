
- Cypress Login Automation

Projeto de automação E2E com Cypress para validar cenários de Login.

- Como rodar localmente

    bash
- instalar dependências
npm install

- abrir a interface interativa do Cypress
npm run cy:open

- rodar em modo headless (CI)
npm run cy:run


******** Cenários de Testes em BDD

Cenário: Login válido
Dado que estou na página de login
Quando eu informo email e senha 
E clico em entrar
Então devo ver a dashboard autenticada
E devo ver a mensagem "Bem-vindo"

___

Cenário: Login com senha inválida
Dado que estou na página de login
Quando eu informo email  e senha 
E clico em entrar
Então devo ver a mensagem de erro "E-mail ou senha incorretos"


___

Cenário: Campos obrigatórios
Dado que estou na página de login
Quando eu clico em entrar sem preencher os campos
Então devo ver as mensagens de obrigatoriedade para email e senha


