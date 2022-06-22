 var personagem = [    {"id":"1", "nacao": "Hobbit", "casa" : "O condado", "descricao": "Os hobbits p...", "personagensSaga": 
 ["Bilbo Bolseiro", "Samwise Gamgee", "Frodo Bolseiro",
"Peregrin", "Rosinha Villa"], "imagem": "https...."},
 {"id":"2", "nacao": "Cavaleiro de Rohan", "casa" : "Abismo de helm", "descricao": "Durante a XIII....", "personagensSaga": 
 [       "Théoden",        "Théodred",       "Deorwine"], "imagem": "https...."}
  
    ]; 



   function personagemInfo() {
  console.log("clicou em 'personagemInfo'");
  personagem.push({"id": "", "nacao": "", "casa": "", "descricao": "", "personagensSaga": ""});
  escreveHtml(personagem);
}


function escreveHtml(arraypersonagem1) {
  
  arraypersonagem = arraypersonagem1.sort();
  var meuNovoConteudo = "";
  for (let i = 0; i < arraypersonagem.length; i++) {
    meuNovoConteudo += "<p>" + arraypersonagem[i].id +  "</p>";
    meuNovoConteudo += "<p>" + arraypersonagem[i].nacao +  "</p>";
    meuNovoConteudo += "<p>" + arraypersonagem[i].casa +  "</p>";
    meuNovoConteudo += "<p>" + arraypersonagem[i].descricao +  "</p>";
    meuNovoConteudo += "<p>" + arraypersonagem[i].personagensSaga +  "</p>";
    meuNovoConteudo += "<p>" + arraypersonagem[i].imagem +  "</p>";
  
  }

  var elemento = document.getElementById('personagem');
  elemento.innerHTML = meuNovoConteudo;

}

   
