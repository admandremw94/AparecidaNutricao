var paciente =  document.querySelector("#primeiro-paciente"); //Seleciona o primeiro paciente.

var tdAltura = paciente.querySelector(".info-altura") //Seleciona a Altura.
var altura = tdAltura.textContent;

var tdPeso = paciente.querySelector(".info-peso"); //Seleciona o Peso.
var peso = tdPeso.textContent;

var tdImc = paciente.querySelector(".info-imc"); // Seleciona o local onde será alterado o valor.


var pesoEhValido = true;
if (peso <= 0 || peso >= 400) { //Validação de peso. 
	tdImc.textContent = ("Peso invalido");
	pesoEhValido = false;
}

var alturaEhValida = true;
if (altura <= 0 || altura >= 3.00) { //Validação da altura.
	tdImc.textContent =("Altura invalida");
	alturaEhValida = false;
}



if (alturaEhValida && pesoEhValido) { //Se a altura e o peso forem verdadeiros execute esse codigo.
	var imc = peso / (altura * altura); //Calculo do IMC.
	tdImc.textContent = imc; //Altera o valor para o calculado.
}






