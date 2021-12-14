---
layout: page
title: Relatório Técnico
subtitle: Detalhes avançados do utilitário
---

Neste relatório, serão abordados os detalhes técnicos que compõem o utilitário **“Agora vai - Vida saudável”**. Para o front-end, foram utilizados exclusivamente **Html** e **CSS**. Já no back-end, os scripts foram escritos exclusivamente em **JavaScript** e para armazenar e transferir as variáveis entre os arquivos foi utilizado o *localStorage* e seus respectivos métodos *get* e *set*. Apenas um Framework foi utilizado para construção desse utilitário, o **Node js**.

O banco de dados foi extraído do site “Tabela Brasileira de Composição de Alimentos” com o auxílio de um script escrito pelos integrantes do grupo. Devido à grande quantidade de dados existentes, foi utilizado o mecanismo de filtro dos Tipos de Alimentos configurado em *“Preparo Simples do Alimento”*. Assim, foi possível obter um banco de dados que atende a maioria dos alimentos consumidos no cotidiano sem ocupar muito espaço de memória. Como ideia futura, planeja-se expandir tal base de dados.

> Para o desenvolvimento do **“Agora Vai - Vida Saudável”** foram utilizados os Tipos Abstratos de dados **Trie** e **Lista Simplesmente Encadeada (LSE)**.

A **Lista Simplesmente encadeada** foi utilizada na funcionalidade relacionada ao acompanhamento diário de água do usuário. Considerando que a quantidade de água só seria adicionada ao longo do dia, ou seja, não é possível regredir a quantidade de água ingerida naquele dia, foi utilizada essa estrutura para auxiliar o somatório de água.

A única possibilidade além de adicionar valores relacionados a quantidade de água seria recomeçar a contagem considerando o início de um novo dia, ou novo período que o usuário deseja acompanhar. Para isso, foi pensada a implementação da função *"Clear()"* que limpa os valores adicionados na LSE. Dentro da classe LSE, está presente uma função que passa e demonstra os elementos presentes em forma de Array (Função *"Show_Array"*). Através dessa função, facilmente é possível somar os elementos nela presentes.

Para a manipulação do banco de dados foi utilizada a TAD **Trie**. Na trie, cada nó possui R ponteiros, que corresponde ao tamanho do alfabeto da mesma. Além disso, cada nó possui um caractere e, quando tivermos uma palavra formada, teremos um valor associado, neste caso, o valor será às informações nutricionais do Alimento.

Seguindo essa linha de raciocínio, no utilitário, a Trie foi de grande importância para implementação da função relacionada à pesquisa das informações nutricionais dos Alimentos. Sendo assim, foram adicionados todos dados na Trie sendo as Chaves os nomes dos Alimentos e seu valor suas respectivas informações nutricionais, utilizando o método *“insert”*. Já para a barra de pesquisa foi utilizado o método *"keysWithPrefix"*, assim cada letra que o usuário insere surge sugestões com os alimentos presentes no banco de dados. Assim, apresentando um comportamento semelhante ao mecanismo de pesquisa visto em sites como “Google”.

Por fim, futuramente tem-se o objetivo implementar novas funcionalidades, como uma barra de progresso do consumo de Carboidratos, Proteínas e Lipídios que o usuário precisa ingerir; Registrar os horários nos quais beberam água; e, como dito anteriormente, aumentar o banco de dados com mais Alimentos. Dessa forma, melhorando progressivamente o utilitário. Todos os integrantes do grupo manifestaram o interesse em dar continuidade no desenvolvimento do aplicativo.
