// Funções do construtor, ReturnLength,Add e SomaLSE baseado na implementação de LSE visualizadas do site <https://medium.com/@alexangm/estrutura-de-dados-com-classes-javascript-23e09b2fe161> 

class LSE{
  constructor(head = null, length = 0){
    this.head = head
    this.length = length
  }
  ReturnLength(){
    return this.length
  }

 // Função que irá adicionar o novo nó no início da LSE
  Add(dado){
    let no =  {
      dado : dado,
      next : this.head
    };

    this.head = no;
    this.length++

  }

// função que soma os valores da LSE
  SomaLSE(){
    if (this.head === null){
      return null;
     } else {
        var array = 0
        let current = this.head
        for  (let i = 0; i <this.length; i++){
          array = array + current.dado
          current = current.next
        }
        return array
     }
  }
// Função responsável por apagar a LSE inteira
  Clear(){
    
     while (this.head != null){
      // this.aux = this.head
       this.head = this.head.next
     }
     return this.head;
       //contador = 0
    }

    
  
}
// aqui sao as classes que foram usadas no css
let quantidade = document.querySelector('.quantidade');
const botao = document.querySelector('.agua');


function adiciona_agua(veri){
  var dados = JSON.parse(localStorage.getItem("DataAgua"));
  var qtde_agua = localStorage.getItem("agua_p");
  let lista_agua = new LSE();
  if(dados != null){
    for(i = 0; i<dados.length; i++){   
      lista_agua.Add(dados[i]);    // transfere os valores ja armazenados para a lse
    }
  }
  if(veri == 0){
    lista_agua.Add((0.2/qtde_agua)*100);  // adiciona a lse os valores de agua ja catalogados
    dados.push((0.2/qtde_agua)*100); 
  }
  agua = lista_agua.SomaLSE(); // soma os valores da lse
  if(agua > 100){
    agua = 100;       
  }
  
  agua_temp = agua.toFixed(0);
  quantidade.innerHTML=`${agua_temp}%` ;  // esse valor aqui corresponde ao valor inteiro que aparece na tela do html
  localStorage.setItem("DataAgua", JSON.stringify(dados));     // ele ta armazenando a minha lista que sera usada na proxima vez que a funcao adiciona_agua for chamada
  document.documentElement.style.setProperty('--porcento', agua);  // esse valor representa o quanto a barra vai se mover
}



function limpar(){    // limpa a minha "DataAgua"
  var dados = JSON.parse(localStorage.getItem("DataAgua"));
  var qtde_agua = localStorage.getItem("agua_p");
  let lista_agua = new LSE();
  if(dados != null){
    for(i = 0; i<dados.length; i++){
      lista_agua.Add(dados[i]);
    }
  }
  agua = lista_agua.SomaLSE();     
  if(agua >= 100){  // ele ta verificando se a soma desses dados resuta em 100, coso positivo ele irar atribuir 0 e jogar o mesmo valor em "DataAgua" 
    lista_agua.Clear();
    dados = [0];
    quantidade.innerHTML=`${0}%` ;  
    localStorage.setItem("DataAgua", JSON.stringify(dados)); // armazenada os dados ja zerados 
    document.documentElement.style.setProperty('--porcento', 0); 
  }


}


