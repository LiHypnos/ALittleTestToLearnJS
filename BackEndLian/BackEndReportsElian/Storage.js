import Produtos from "./Product.js";
import promptSync from "prompt-sync";
const prompt = promptSync();
//import prompt from "prompt-sync";
export default class Estoque {
  constructor(pp = [], /*pp = [],*/ historico = []) {
    this.pp = pp;
    let produto0 = new Produtos(undefined, "Biscoito Maria", 2.99);
    //this.pp = pp;
    this.historico = historico;
    //this.pp.push((nome = "Biscoito Maria"), (preco = 2.99));
    this.pp.push(produto0);
    console.log(this.pp);
  }
  salvarProduto(N, P, Q) {
    /*this.pp.push(
      (id = this.pp.length + 1),
      (nome = N),
      (preco = P),
      (quantidade = Q)
    );*/
    let p0 = new Produtos(this.pp.length + 1, N, P, Q);
    this.pp.push(p0);

    //console.log("O id do produto é: " + this.pp);
    console.log(`O id do produto é: ${p0.id}`);
    this.historico.push(`O pp: ${p0.nome} de ID: ${p0.id} foi adicionado`);
  }
  editarProduto() {
    let IdPesquisa = Number(
      prompt("Qual o Id do produto que você deseja editar?\n")
    );
    // console.log(this.pp[0]);
    // if (IdPesquisa > this.pp.id.length) {
    //  console.log("Id não encontrado");
    // } else {

    // percorrer este array: this.pp
    // this.pp = Produtos[]

    // const idxEncontrado = this.pp.findIndex(function (elemento) {
    // elemento.id === IdPesquisa;
    // });
    for (let i = 0; i < this.pp.length; i++) {
      if (this.pp[i].id === IdPesquisa) {
        let choose = prompt(
          "Deseja mudar todas informações do produto ou apenas uma?\nPara mudar todas, digite (T)\nPara mudar uma em especifico digite (U)\n"
        );
        if (choose === "T" || choose === "t") {
          let N = prompt("Novo Nome:\n");
          let P = Number(prompt("Novo preço:\n"));
          let Q = Number(prompt("Quantidade:\n"));
          //let pAux = new Produtos(undefined, (nome = N), (preco = P), (quantidade = Q));
          //console.log(new Produtos(this.pp[i].id, N, P, Q));
          this.pp[i].nome = N;
          this.pp[i].preco = P;
          this.pp[i].quantidade = Q;
          this.historico.push(`O pp de ID: ${IdPesquisa} foi editado`);
        } else if (choose === "U" || choose === "u") {
          let decisao = prompt(
            "Se deseja alterar o nome do produto, digite (N)\nSe deseja alterar o preço do produto, digite (P)\nSe deseja alterar a quantidade no estoque, digite (Q)\n"
          );
          if (decisao === "N" || decisao === "n") {
            let N = prompt("Novo Nome:\n");
            this.pp[i].nome = N;
            this.historico.push(
              `O pp de ID: ${IdPesquisa} foi editado no campo NOME`
            );
          } else if (decisao === "P" || decisao === "p") {
            let P = Number(prompt("Novo preço:\n"));
            this.pp[i].preco = P;
            this.historico.push(
              `O pp de ID: ${IdPesquisa} foi editado no campo PREÇO`
            );
          } else if (decisao === "Q" || decisao === "q") {
            let Q = Number(prompt("Quantidade:\n"));
            this.pp[i].quantidade = Q;
            this.historico.push(
              `O pp de ID: ${IdPesquisa} foi editado no campo QUANTIDADE`
            );
          } else {
            console.log("Opção indisponivel");
          }
        } else {
          console.log("Opção Indisponivel");
        }
      }
    }
  }

  reabastecer() {
    //this
    let IdPesquisa = Number(
      prompt("Qual o ID do pp que você deseja adicionar mais quantidades?\n")
    );
    for (let i = 0; i < this.pp.length; i++) {
      if (IdPesquisa === this.pp[i].id) {
        let newQuant = Number(prompt("Nova quantidade a ser adicionada:\n"));
        this.pp[i].quantidade += newQuant;
        this.historico.push(
          `O pp de ID: ${IdPesquisa} recebeu mais ${newQuant} possuindo no total ${this.pp[i].quantidade} `
        );
      }
    }
  }
  listar() {
    let choose = prompt(
      "Deseja listar todos os itens ou um pp em especifico?\nCaso seja todos os itens, digite (A)\nCaso seja um em especifico, digite (B)\n"
    );
    if (choose === "A" || choose === "a") {
      for (let i = 0; i < this.pp.length; i++) {
        console.log(this.pp[i]);
      }
    } else if (choose === "B" || choose === "b") {
      let idPesquisa = Number(
        prompt("Qual o id do produto que você deseja consultar?\n")
      );
      if (idPesquisa > this.pp.length - 1) {
        console.log("ID não encontrado");
      } else {
        console.log(this.pp[idPesquisa - 1]);
      }
    } else {
      console.log("Opção Invalida");
    }
  }
  history() {
    for (let i = 0; i < this.historico.length; i++) {
      console.log(this.historico[i]);
    }
  }
  deleteProduct() {
    let idPesquisa = Number(
      prompt("Qual o ID do produto que você deseja excluir?\n")
    );
    let findx = this.pp.indexOf((x) => x.id === idPesquisa);
    delete this.pp[findx];
  }
}
/*this.pp.push(
      this.pp(
        ((id = this.pp.id.length + 1), (nome = "Biscoito Maria")),
        (preco = 2.99)
      )
    );*/ //problema com leitura do tamanho de pp
