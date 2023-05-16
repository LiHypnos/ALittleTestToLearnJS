var email=[];
var teste=string;
class salvar (a=""){
  let c=0;
  for(i=0;i<email.length;i++){
    if(a==email[i]){
      print("Esse e-mail já foi cadastrado");
      c++;
    } else if(i==email.length & c<1){
        print("E-mail cadastrado com sucesso");
        email.push(a);
    }
  } 
}
class verificar (teste=""){
  let p=0;
  for(i=0;i<email.length;i++){
    if(teste!=email[i]){
      p++;
    }
    if(p==email.length){
      print("E-mail não cadastrado")
    } else {
      print("Seja Bem-Vindo")
    }
  }
}