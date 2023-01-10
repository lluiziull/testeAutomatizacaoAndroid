Feature: Login
  Eu como usuário
  Gostaria de fazer login na aplicação
  para acessar o sistema

  Scenario: Login com sucesso
    Given que eu preencho o email 
    And que eu preencho a senha
    When clicar em Entrar
    Then vejo o botão Salvar
