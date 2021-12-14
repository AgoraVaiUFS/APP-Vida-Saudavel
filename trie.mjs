import {data} from "./data/banco_de_dados.mjs";

// Implementacao do No Trie
const TrieNode = function (key) 
{
  this.key = key;
  this.children = {};
  this.parent = null;
  this.val = null;
  this.end = false;
};

// implematacao da estrutura Trie
const Trie = function() 
{
  // definimos a raiz
  this.root = new TrieNode(null);

  // funcao para inserir elementos na Trie
  this.insert = function(word, val) 
  {
    let node = this.root;
     
    for(let i = 0; i < word.length; i++) 
    {
      if (!node.children[word[i]]) 
      {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      };
      node = node.children[word[i]];
      if (i == word.length - 1) 
      {
        node.val = val;
        node.end = true;
      };
    };
  };
  
  // funcao para retornar todas as correspondencias de palavras de um determinado prefixo
  this.keysWithPrefix = function(prefix) 
  {
    let node = this.root;
    let words_list = [];

    for(let i = 0; i < prefix.length; i++) 
    {
      if (node.children[prefix[i]]) 
      {
        node = node.children[prefix[i]];
      }; 
    };

    collect(node, words_list);

    return words_list;
  };

  const collect = (node, list) => 
  {
    if (node.end) 
    {
      list.unshift(this.getWord(node));
    };

    for (let child in node.children) 
    {
      collect(node.children[child], list);
    };
  };
  
  // funcao para retornar uma palavra a partir do ultimo caractere da chave 
  this.getWord = function(node)
  {
    let word = [];
    while (node != null) 
    {
      word.unshift(node.key);
      node = node.parent;
    };
    return word.join('');
  };

  // funcao para buscar e retornar o valor de uma chave
  this.find_val = function(word) 
  {
    let node = this.root;

    for(let i = 0; i < word.length; i++) 
    {
      if (node.children[word[i]]) 
      {
        node = node.children[word[i]];
      }; 
    };

    return node.val;
  };
  
};


// criando a trie
let t = new Trie();

// funcao para adicionar elementos em uma trie
const add_to_trie = function(trie ,data_base)
{
  for (var i = 0; i < data_base.length; i = i + 2)
  {
    var key = data_base[i]
    var value = data_base[i + 1]
    trie.insert(key, value)
  };
};

// adicao dos dados na trie
add_to_trie(t, data)

var nome = localStorage.getItem("comida");
var dados = t.find_val(nome);
console.log(dados);
localStorage.setItem("Data", JSON.stringify(dados));
