const { I } = inject();

module.exports = {

    fields:{
      email: '~email',
      password: '~senha',
      
    }, 
    button:{
      enter: '~entrar',
    },
    mensagem: {
      msgLoginErrado: '~lognFail',
    },

    loginConta(email, password){
      
      I.waitForElement(this.fields.email, 5); 
      I.fillField(this.fields.email, email);     
      I.fillField(this.fields.password, password);     

      I.tap(this.button.enter);
    },

    checarLoginErrado(){

      I.waitForElement(this.mensagem.msgLoginErrado, 5);
      I.seeElement(this.mensagem.msgLoginErrado);
    },

}
