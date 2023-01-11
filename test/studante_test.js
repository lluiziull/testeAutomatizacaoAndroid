const loginPage = require("../pages/loginPage");
const homePage = require("../pages/homePage");
const getCode = require("../utils/codigoGerador");
const getNome = require("../utils/nomeGerador");



Feature('Studant');

Scenario('teste add aluno',  ({I}) => {

    loginPage.loginConta("teste@teste.com", "123456"); 
    homePage.checarLogin();

    const nome = getNome.getNome();
    const code = getCode.getCode();

    homePage.preencherEstudante(nome, code);
    homePage.procurarEstudante(nome, code);


    /*I.touchPerform([
            {
            action: 'longPress',
            Option:{
                x: 500, y: 1300}},
            {    
            action: 'moveTo',
            Option:{
                x: 500, y: 300}},
        {action: 'release'}
    ])
    */
});