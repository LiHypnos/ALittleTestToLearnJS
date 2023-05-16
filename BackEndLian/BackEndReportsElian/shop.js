import Estoque from "./Storage.js";
import UserP from "./User.js";
import WorkUser from "./Worker.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
const stor = new Estoque();
//const infos = stor.pp();
export default class Shopping {
  constructor(user = [], funtional = [], view = []) {
    let uxerX = new UserP("José", "477.077.627-07", "123");
    let workU = new WorkUser("Lian", "492.773.028-04", "321");
    this.user = user;
    this.funtional = funtional;
    this.user.push(uxerX);
    this.funtional.push(workU);
    this.view = view;
  }
  addUser() {
    let n = prompt("Qual o nome do usuário?\n");
    let c = prompt("Digite seu CPF\n");
    let findx = this.user.find((x) => x.cpf === c);
    if (findx != false || findx != null || findx != -1) {
      let s = prompt("Digite sua senha\n");
      let add = new UserP(n, c, s);
      this.user.push(add);
      this.view.push(
        `Um usuário chamado ${n} com o CPF ${c} foi adicionado!\n`
      );
    } else {
      console.log("Esse CPF já pertence a alguém");
    }
  }
  addWorker() {
    let n = prompt("Qual o nome do usuário?\n");
    let c = prompt("Digite seu CPF\n");
    let findx = this.funtional.find((x) => x.cpf === c);
    if (findx != false || findx != null || findx != -1) {
      let s = prompt("Digite sua senha\n");
      console.log("Esse vai ser nosso segredinho ¬u¬\n");
      let add = new WorkUser(n, c, s);
      this.funtional.push(add);
      this.view.push(`Novo funcionário ??? com o CPF ${c} foi adicionado!\n`);
    } else {
      console.log("Esse CPF já pertence a alguém");
    }
  }

  addMoney() {
    let choose = prompt("Qual o cpf do usuário que você deseja depositar?\n");
    let c = this.user.find((x) => x.cpf === choose);
    if (c != false || c != null || c != -1) {
      let found = this.user.indexOf(choose);
      newMoney = Number(
        prompt("Qual o valor que você deseja adicionar ao usuário?\n R$")
      );
      this.user[found].coins += newMoney;
      this.view.push(`O valor de R$${newMoney} foi adicionado na conta do user com o CPF ${choose}`)
    } else {
      console.log("CPF não encontrado");
    }
  }

  listarUser() {
    let choose = prompt(
      "Deseja listar todos os usuários ou um em especifico?\nCaso todos, digite (T)\nCaso um, digite (U)\n"
    );
    if (choose === "T" || choose === "t") {
      for (let i = 0; i < this.user.length; i++) {
        console.log(this.user[i]);
      }
    } else if (choose === "U" || choose === "u") {
      let c = prompt("Qual o CPF do user que você deseja consultar?\n");
      let findx = this.user.find((x) => x.cpf === c);
      if (findx != false || findx != null || findx != -1) {
        let founxx = this.user.findIndex(x => x.cpf === c)
        console.log(this.user[founxx]);
      } else {
        console.log("CPF não encontrado");
      }
    } else {
      console.log("Opção Invalida");
    }
  }

  listarFun() {
    let choose = prompt(
      "Deseja listar todos os usuários ou um em especifico?\nCaso todos, digite (T)\nCaso um, digite (U)\n"
    );
    if (choose === "T" || choose === "t") {
      for (let i = 0; i < this.funtional.length; i++) {
        console.log(this.funtional[i]);
      }
    } else if (choose === "U" || choose === "u") {
      let c = prompt("Qual o CPF do user que você deseja consultar?\n");
      let findx = this.funtional.find((x) => x.cpf === c);
      if (findx != false || findx != null || findx != -1) {
        let foundx = this.funtional.findIndex(x => x.cpf === c)
        console.log(foundx);
      } else {
        console.log("CPF não encontrado");
      }
    } else {
      console.log("Opção Invalida");
    }
  }

  editU() {
    let know = prompt(
      "Qual o CPF do user que você deseja editar informações?\n"
    );
    let findx = this.user.find((x) => x.cpf === know);
    if (findx != false || findx != null || findx != -1) {
      let ind = this.user.indexOf(know);
      let choose = prompt(
        "Deseja alterar a senha ou o nome? caso senha, digite (S)\nCaso nome, digite (N)\n"
      );
      if (choose === n || choose === N) {
        nn = prompt("Novo nome: ");
        this.user[ind].nome = nn;
        this.view.push(`O nome do user do CPF ${know} foi alterado\n`)
      } else if (choose === s || choose === S) {
        ss = prompt("Nova senha: ");
        this.user[ind].senha = ss;
      }
    } else {
      console.log("CPF não encontrado");
    }
  }

  editF() {
    let know = prompt(
      "Qual o CPF do user que você deseja editar informações?\n"
    );
    let findx = this.funtional.find((x) => x.cpf === know);
    if (findx != false || findx != null || findx != -1) {
      let ind = this.funtional.indexOf(know);
      let choose = prompt(
        "Deseja alterar a senha ou o nome? caso senha, digite (S)\nCaso nome, digite (N)\n"
      );
      if (choose === n || choose === N) {
        nn = prompt("Novo nome: ");
        this.funtional[ind].nome = nn;
      } else if (choose === s || choose === S) {
        ss = prompt("Nova senha: ");
        this.funtional[ind].senha = ss;
      }
    } else {
      console.log("CPF não encontrado");
    }
  }

  deleteU() {
    let know = prompt("Qual o CPF do user que você deseja excluir\n");
    let findx = this.user.find((x) => x.cpf === know);
    if (findx != false || findx != null || findx != -1) {
      let ind = this.user.indexOf(know);
      this.user.splice(ind, 1);
    } else {
      console.log("CPF não encontrado");
    }
  }

  buySome() {
    let cpflogin=prompt("Informe o seu CPF\n")
    let testecpf = this.user.find(x => x.cpf === cpflogin)
    if (testecpf != -1 || testecpf != null){
      let indexcpf = this.user.findIndex(x => x.cpf === cpflogin)
      let senhalogin = prompt("Digite sua senha\n")
      if(senhalogin === this.user[indexcpf].senha){
        console.log(`Seja bem-vindo, ${this.user[indexcpf].nome}`)
        stor.listar();
        let shopcar = []
        let look = "S"
        while (look!=n || look!=N){
          let choose = Number(prompt("Deseja comprar qual produto?\n"));
          let findx = stor.pp.find((x) => x.id === choose);
          if (findx != false || findx != null || findx != -1) {
            let foundx = stor.pp.indexOf(choose);
            let much = Number(prompt("Quanto que você deseja comprar?\n"));4
            if (much > stor.pp[foundx].quantidade){
              console.log("Quantidade de produtos disponiveis é menor que a quantidade desejada para a compra!\n")
            } else {
              shopcar.push = [stor.pp[foundx].nome, stor.pp[foundx].preco, much]
              for (let i = 0; i < much; i++) {
                totalprice += stor.pp[foundx].preco;
              }
            }
          } else {
            console.log("Produto não encontrado\n")
          }
          look = prompt ('Deseja comprar mais algum produto? Se não, digite (N), se sim, aperte qualquer tecla\n')
        }
        let agree=prompt(`O total da compra será R$${totalprice}, deseja continuar a compra?\n se sim, digite (S), senão, aperte qualquer tecla.\n`)
        if (agree === "S" || agree === "s"){
          if(this.user[indexcpf].coins < totalprice){
            console.log("Valor em depósito inferior ao valor da compra :(\n")
          } else {
            this.user[indexcpf].coins = this.user[indexcpf].coins - totalprice;
            stor.pp[foundx].quantidade -= much;
            console.log("Compra finalizada com sucesso =D\n")
            console.log("Os itens comprados foram: ")
            for(let i=0;i<shopcar;i++){
              console.log(shopcar[i])
            }
            //this.pp[foundx].quantidade -= much
            this.view.push(`Uma compra no valor de R$${totalprice} foi feita no CPF ${cpflogin}`)
            stor.historico.push(`Uma quantidade de ${much} do produto de ID ${foundx} foi vendida\n`)
          }
        } else {
          console.log("compra cancelada!\n")
        }
          //if()
      } else {
        console.log("Senha Invalida\n")
      }
    } else {
      console.log("Usuário não encontrado!\n")
    }
  }
  geralHistory(){
    for(let i=0; i<this.view.length();i++){
      console.log(this.view[i])
    }
  }
}
//https://blog.dbins.com.br/remover-elementos-de-um-array-com-javascript
