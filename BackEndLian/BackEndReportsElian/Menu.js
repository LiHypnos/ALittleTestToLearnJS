import Estoque from "./Storage.js";
import promptSync from "prompt-sync";
import Shopping from "./shop.js";
const prompt = promptSync();
export default class Menux {
  constructor() {
    const storage = new Estoque();
    const shopping = new Shopping();
    let controll = true;

    while (controll) {
      let funOrCli = prompt(
        "Você é Cliente ou Funcionario?\nSe cliente, digite (C)\nSe funcionario, digite (F)\n0 - SAIR\n"
      );
      if (funOrCli === "F" || funOrCli === "f") {
        let choose = prompt(
          "Informe a opção desejada\n1 - Adicionar Produto\n2 - listar Produtos\n3 - Alterar Produtos\n4 - Adicionar estoque de um produto\n5 - Histórico dos Produtos\n 6 - Historico de Contas\n7 - Listagem dos Usuários\n8 - Listagem dos Funcionários\n9 - Editar Conta\n10 - Deletar Conta de Usuário\n11 - Adicionar Funcionário\n"
        ); 
        if (choose === "1") {
          let N = prompt("Qual o nome do produto?\n");
          let P = Number(prompt("Qual o valor do produto?\n"));
          let Q = Number(prompt("Quantidade do produto: "));
          storage.salvarProduto(N, P, Q);
        }
        if (choose === "2") {
          storage.listar();
        }
        if (choose === "3") {
          storage.editarProduto();
        }
        if (choose === "4") {
          storage.reabastecer();
        }
        if (choose === "5") {
          storage.history();
        }
        if (choose === "6") {
          shopping.geralHistory();
        }
        if (choose === "7") {
          shopping.listarUser();
        }
        if (choose === "8") {
          shopping.listarFun();
        }
        if (choose === "9") {
          shopping.editF();
        }
        if (choose === "10") {
          shopping.deleteU();
        }
        if (choose === "11") {
          shopping.addWorker();
        } else {
          console.log("Valor Inválido");
        }
      } else if (funOrCli === "C" || funOrCli === "c"){
        let choose = prompt("Informe a opção desejada\n1 - Criar Conta\n2 - Compras\n3 - Editar Informações da Conta\n4 - Depositar\n");
        if (choose === "1"){
          shopping.addUser();
        }
        if (choose === "2"){
          shopping.buySome();
        }
        if (choose === "3"){
          shopping.editU();
        }
        if (choose === "4"){
          shopping.addMoney();
        } else {
          console.log("Opção Indisponivel\n")
        }
      } else if (funOrCli === "0") {
        console.log("Até logo :D\n")
        controll = false;
      } else {
        console.log("Comando Invalido")
      }
    } 
  }
}
