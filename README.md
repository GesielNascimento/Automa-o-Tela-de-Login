
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

  *Given que estou na página de login
  *When eu informo email e senha
  *And clico em entrar
  *Then devo ver a dashboard autenticada
  *And devo ver a mensagem "Bem-vindo"

Cenário: Login com senha inválida
  Given que estou na página de login
  When eu informo email e senha
  And clico em entrar
  Then devo ver a mensagem de erro "E-mail ou senha incorretos"

Cenário: Campos obrigatórios
  Given que estou na página de login
  When eu clico em entrar sem preencher os campos
  Then devo ver as mensagens de obrigatoriedade para email e senha



