

function receberDados(){
  let prosseguir = document.getElementById("prosseguir").value;
  console.log(prosseguir);
  let idade = document.getElementById("idade").value;
  let sexo = document.getElementById("genero").value;
  let altura = document.getElementById("altura").value;
  let peso = document.getElementById("peso").value;
  let atividade = document.getElementById("atividade").value;
  let objetivo = document.getElementById("objetivo").value;

  //
  let imc = Imc(peso, altura);
  let imc2 = Imc2(peso, altura);

  let agua = Agua(peso);
  let agua2 = Agua2(peso);
  let analise = AnaliseImc(imc2, sexo);
  localStorage.setItem("agua_p", agua2);
  localStorage.setItem("agua_l", agua);
  var zero = 0;
  var basal;
  //

  var agua_barra = localStorage.setItem("barra_agua", zero);
  if(sexo == "feminino"){
    basal = BasalFS(peso, altura, idade);
    localStorage.setItem("basal", basal);
  }
  else{
    basal = BasalMS(peso, idade, altura);
    localStorage.setItem("basal", basal);
  }
  var qtde_calorias = QntCalorias(peso, altura,idade,sexo,atividade);
  var qtde_proteinas = QntProteinas(sexo,peso,objetivo);
  var qtde_carboidratos = QntCarboidratos(sexo,peso,objetivo);
  var qtde_lipidios = QntLipidios(sexo, peso, objetivo);
  localStorage.setItem("qtde_calorias", qtde_calorias);
  localStorage.setItem("qtde_proteinas", qtde_proteinas);
  localStorage.setItem("qtde_carboidratos", qtde_carboidratos);
  localStorage.setItem("qtde_lipidios", qtde_lipidios);
  localStorage.setItem("IMC", imc);
  let dados = [agua, imc, analise, basal, qtde_calorias, qtde_carboidratos, qtde_proteinas, qtde_lipidios]; //, qtde_calorias, qtde_proteinas, qtde_lipidios];
  localStorage.setItem("DataUsuario", JSON.stringify(dados));

  let dudu = [0];
  localStorage.setItem("DataAgua", JSON.stringify(dudu));



}

// Função que calcula a Taxa metabólica basal feminina
function BasalF(peso,altura, idade){ // Taxa metabólica basal feminina
  var tmb;
  tmb = 655 + (9.6*peso)+(1.8*altura)-(4.7*idade);
  return tmb;

}
// Função que calcula a Taxa metabólica basal masculina
function BasalM(peso, altura, idade){ // Taxa metabólica basal masculina
  var tmb;
  tmb = 66 + (13.8*peso)+ (5*altura) - (6.8*idade);
  return tmb;

}
// Função que devolve uma string que indica a Taxa metabólica basal feminina 
function BasalFS(peso,altura, idade){ // Taxa metabólica basal feminina
  var tmb;
  tmb = 655 + (9.6*peso)+(1.8*altura)-(4.7*idade);
  return "Taxa metabólica basal (cal): " + ((tmb).toFixed(2)).toString();

}
// Função que devolve uma string que indica a Taxa metabólica basal masculina
function BasalMS(peso, altura, idade){ // Taxa metabólica basal masculina
  var tmb;
  tmb = 66 + (13.8*peso)+ (5*altura) - (6.8*idade);
  return "Taxa metabólica basal (Kcal): " + ((tmb).toFixed(2)).toString();

}
// Função que devolve uma string que indica O IMC
function Imc(peso, altura){
  altura = altura/100;
  var imc;
  imc = peso/(altura*altura);
  imc = parseFloat(imc.toFixed(2))
  return "IMC : " + imc.toString();
}
// Função que calcula o IMC
function Imc2(peso, altura){
  altura = altura/100;
  var imc;
  imc = peso/(altura*altura);
  imc = parseFloat(imc.toFixed(2))
  return imc;
}
// Função que analisa a massa a partir do IMC
function AnaliseImc(imc, sexo) {
  if ((sexo === "feminino") && (imc <= 19.10)){
    return "O seu peso está abaixo do ideial"
  }
  else if ((sexo === "feminino") && (imc > 19.10 && imc < 25.80)){
  return "O seu peso está normal!"
  }
  else if ((sexo === "feminino") && (imc >= 25.80 && imc < 27.30)){
  return "Você está marginalmente acima do peso!Atenção!"}
  else if  ((sexo === "feminino") && (imc >= 27.30 && imc <= 32.30)){
  return "Cuidado! Você está acima do peso ideal"}
  else if ((sexo === "feminino") && (imc > 32.30)){
  return "Você está com obesidade"}


  if ((sexo === "masculino") && (imc <= 20.70)) {
    return "O seu peso está abaixo do ideial"
  }
  else if ((sexo === "masculino") && (imc > 20.70 && imc < 26.40)){
  return "O seu peso está normal!"}
  else if ((sexo === "masculino") && (imc >= 26.40 && imc < 27.80)){
  return "Você está marginalmente acima do peso!Atenção!"}
  else if ((sexo === "masculino") && (imc >= 27.80 && imc <= 31.10)){
  return "Cuidado! Você está acima do peso ideal"}
  else if ((sexo === "masculino") && (imc > 31.10)){
  return "Você está com obesidade"}
}

// Função que devolve a quantidade de calorias diarias recomendadas.
function QntCalorias(peso, altura,idade,sexo,atividade){
  if (sexo === "feminino" &&  atividade === "baixo"){
    qnt_cal = (BasalF(peso,altura,idade) * 1.3)
  }
  if (sexo === "feminino" && atividade === "moderado"){
    qnt_cal = (BasalF(peso,altura,idade) * 1.45) 
  }
  if (sexo === "feminino" && atividade === "alto"){
    qnt_cal = (BasalF(peso,altura,idade) * 1.5)  
  }
  if (sexo === "feminino" && atividade === "muito_alto"){
    qnt_cal = (BasalF(peso,altura,idade) * 1.7)
  }
  if (sexo === "masculino" && atividade === "baixo"){
    qnt_cal = (BasalM(peso,altura,idade) * 1.4)
  }
  if (sexo === "masculino" && atividade === "moderado"){
    qnt_cal = (BasalM(peso,altura,idade) * 1.5)
  }
  if (sexo === "masculino" && atividade === "alto"){
    qnt_cal = (BasalM(peso,altura,idade) * 1.6)
  }
  if (sexo === "masculino" && atividade === "muito_alto"){
    qnt_cal = (BasalM(peso,altura,idade) * 1.8)
  }
  
  return "Calorias diárias recomendadas (cal) : " + (qnt_cal.toFixed(2)).toString() 

}
// Função que devolve a quantidade de carboidratos ingeridos diariamente recomendada tendo como critério o peso do usuário.
function QntCarboidratos(sexo,peso,objetivo){
 if (objetivo === "perder_peso"){ //2g/kg
    qnt = 2 * peso
  }
 if (objetivo === "manter_peso"){ //4g/kg
   qnt = 4 * peso
  }
 if (objetivo === "aumentar_peso"){ //6g/kg
  qnt = 6 * peso
 }
 return "Quantidade de carboidratos recomendada por dia (g): "+ qnt.toString();

}
// Função que devolve a quantidade de proteinas ingeridas diariamente recomendada tendo como critério o peso do usuário.
function QntProteinas(sexo,peso,objetivo){
 if (objetivo === "perder_peso"){ //1g/kg
   qnt = 1 * peso
  }
 if (objetivo === "manter_peso"){ //1g/kg
   qnt = 1 * peso
  }
 if (objetivo === "aumentar_peso"){ // 2g/kg
   qnt = 2 * peso
  }
 return "Quantidade de proteínas recomendada por dia (g): "+ qnt.toString();
}
// Função que devolve a quantidade de lipidios ingeridos diariamente recomendada tendo como critério o peso do usuário.
function QntLipidios(sexo, peso, objetivo){
  if (objetivo === "perder_peso"){  // 1g/kg
   qnt =  1 * peso
  }
  if (objetivo === "manter_peso"){ // 1g/kg
   qnt = 1 * peso
  }
  if (objetivo === "aumentar_peso"){// 1g/kg
    qnt =  1 * peso
  }
  return "Quantidade de lipídios recomendada por dia (g): "+ qnt.toString();
  
}

// Função que devolve a quantidade de água ingerida a partir do peso da pessoa em uma string
function Agua(peso){
  var agua;
  agua = 0.035*peso;
  agua = parseFloat(agua.toFixed(2));
  return agua.toString() + " Litros de água recomendados por dia";
}
// Função que calcula a quantidade de águaingerida recomendada por dia  em litros a partir do peso
function Agua2(peso){
  var agua;
  agua = 0.035*peso;
  agua = parseFloat(agua.toFixed(2));
  return agua;
}