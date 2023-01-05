var pacientes = document.querySelectorAll(".paciente"); //Seleciona todos os pacientes.

//Length é o tamanho ca lista
for (var i = 0; i < pacientes.length; i++) { //Estrutura de repetição para analisar cada paciente
	
	var paciente = pacientes[i]; //Define nosso paciente como o indice;

	var tdAltura = paciente.querySelector(".info-altura") //Seleciona a Altura.
	var altura = tdAltura.textContent;

	var tdPeso = paciente.querySelector(".info-peso"); //Seleciona o Peso.
	var peso = tdPeso.textContent;

	var tdImc = paciente.querySelector(".info-imc"); // Seleciona o local onde será alterado o valor.


	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	if (!pesoEhValido) { //Se o peso não é válido
		pesoEhValido = false;
		tdImc.textContent = ("Peso invalido");
		paciente.classList.add("paciente-invalido"); //Adiciona uma classe a linha paciente
		}

	
	if (!alturaEhValida) { //Validação da altura.
		alturaEhValida = false;
		tdImc.textContent =("Altura invalida");
		paciente.classList.add("paciente-invalido");
		}


	if (alturaEhValida && pesoEhValido) { //Se a altura e o peso forem verdadeiros execute esse codigo.
		var imc = calculaImc(peso,altura) //Calculo do IMC.
		tdImc.textContent = imc; //Altera o valor para o calculado. 
	}

	function validaPeso(peso){ //Validação de peso. 
		if(peso >= 0 && peso < 400) {
			return true;
		}else {
			return false;
		}
	}

		function validaAltura(altura){ //Validação de peso. 
		if(altura >= 0 && altura < 3.0) {
			return true;
		}else {
			return false;
		}
	}

	function calculaImc(peso,altura) { // Função criada para calcular o IMC
		var imc = 0;

		imc = peso / (altura * altura);

		return imc.toFixed(2); // toFixed altera para duas casas descimais.
	}
}
