const { I } = inject();

module.exports = {

  button:{
    buttonSalvar: "~salvar",
  }, 
  fields:{
    code: "~codigo",
    name: "~aluno",
    search: "~search",
  },
  checarLogin(){
    I.waitForElement(this.button.buttonSalvar, 5);
    I.seeElement(this.button.buttonSalvar);
  },
  preencherEstudante(name, code){
    I.waitForElement(this.fields.name, 5) 
    I.fillField(this.fields.code, code); 
    I.fillField(this.fields.name, name); 
    I.tap(this.button.buttonSalvar);
  },
  procurarEstudante(nome, check){
    I.fillField(this.fields.search, nome); 
    I.seeElement("//android.view.ViewGroup[@content-desc='"+check+"']"); 
  },


  //procurarEstudante(search,check){
 //   I.fillField(this.fields.search, search); 
 //   I.wait(5);
//    I.seeElement("android.view.ViewGroup[@content-desc='"+ check +"']"); 
  //},
}
	
//android.view.ViewGroup[@content-desc="98839"]








