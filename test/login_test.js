
const homePage = require("../pages/homePage");
const loginPage = require("../pages/loginPage");

Feature('login');

BeforeSuite(()=>{
    console.log('antes de tudo')
});

Before(()=>{
    console.log("////////////////////////////////");
});

Scenario('Login with sucess',  ({I}) => {

    loginPage.loginConta("teste@teste.com", "123456");
    homePage.checarLogin();
});


Scenario('Login fail', ({I}) =>{
   
    loginPage.loginConta("email@errados", "123456");
    loginPage.checarLoginErrado();
});
