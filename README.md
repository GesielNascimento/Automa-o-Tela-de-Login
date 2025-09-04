# Cypress Login Automation

Projeto de automação E2E com **Cypress** para validar cenários de **Login** usando o site público [saucedemo](https://www.saucedemo.com/).

##  Stack
- Cypress 13
- GitHub Actions (pipeline opcional incluído)

##  Estrutura
```
cypress-login-automation/
├─ cypress/
│  ├─ e2e/
│  │  └─ login.cy.js
│  ├─ fixtures/
│  │  └─ users.json
│  └─ support/
│     ├─ commands.js
│     └─ e2e.js
├─ .github/workflows/cypress.yml
├─ cypress.config.js
└─ package.json
```

## Como rodar
```bash
# instalar dependências
npm install

# abrir a interface do Cypress
npm run cy:open

# rodar em modo headless (CI)
npm run cy:run
```

### Variáveis de ambiente (opcional)
Por padrão, o teste usa `standard_user / secret_sauce`. Você pode sobrescrever via env:
```bash
# Linux/Mac
BASE_URL=https://www.saucedemo.com QA_USER=standard_user QA_PASS=secret_sauce npm run cy:run

# Windows (PowerShell)
$env:BASE_URL="https://www.saucedemo.com"; $env:QA_USER="standard_user"; $env:QA_PASS="secret_sauce"; npm run cy:run
```

## Cenários cobertos
- Login com credenciais válidas (sucesso)
- Login com usuário bloqueado
- Login com credenciais inválidas (data-driven)
- Regras de formulário (campos obrigatórios)

## CI (GitHub Actions)
Um workflow simples está em `.github/workflows/cypress.yml` para rodar os testes a cada push.


Edite `cypress.config.js` para apontar para a sua própria aplicação de login quando desejar.

##  CENARIO DE TESTE BDD

# Feature: Login

  Scenario: Successful login
    Given I am on the login page
    When I enter email "aluno@teste.com" and password "senha123"
    And I click on the login button
    Then I should be redirected to the dashboard
    And I should see the message "Welcome"

  Scenario: Invalid password
    Given I am on the login page
    When I enter email "aluno@teste.com" and password "wrongpass"
    And I click on the login button
    Then I should see the error message "Invalid email or password"

  Scenario: Required fields validation
    Given I am on the login page
    When I click on the login button without filling in the fields
    Then I should see validation messages for email and password

