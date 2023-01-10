const { I } = inject();

Given('que eu preencho o email', () => {
  I.waitForElement("~email", 5);
  I.fillField("~email", "teste@teste.com"); 
});

Given('que eu preencho a senha', () => {
  I.fillField("~senha", "123456");  
});

When('clicar em Entrar', () => {
  I.tap("~entrar");
});

Then('vejo o botão Salvar', () => {
  I.waitForElement("~salvar", 5);
  I.seeElement("~salvar");
});
