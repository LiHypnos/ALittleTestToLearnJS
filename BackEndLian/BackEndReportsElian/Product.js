//"use strict";
//console.log("Pratica Um");
export default class Produtos {
  constructor(id = 1, nome, preco = 0.0, quantidade = 1) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
}

/*var Produto = {
  Nome: '',
  Preco: 0.0,
  Disponibilidade: false,
};
var Estoque = {
  Produto.Nome,
  Produto.Preco,
  Quantidade=0,
};
var Item = Produto;
function Salvar(N,P,D){
  Item.Nome=N;
  Item.Preco=P;
  Item.Disponibilidade=D;
};
function AdicaoEstoque()*/
