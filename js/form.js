var botaoAdicionar = document.querySelector("#adicionar-paciente"); //Criando a variavel para o botão.
botaoAdicionar.addEventListener("click", function(event) { //Cria um escutador para o botão e a função
	event.preventDefault(); //Previne o comportamento padrão.

	var form = document.querySelector("#form-adiciona"); //Aceso aos imputs

	var paciente = obtemPacienteDoFormulario(form); //Chama a função declarada

	var pacienteTr = montaTr(paciente);	//Chama a função declarada

	var erros = validaPaciente(paciente);

	if(erros.length > 0) { //Se teve algum erro exibe
		exibeMensagensDeErro(erros);
		return;
	}

	var tabela = document.querySelector("#tabela-pacientes"); //Seleciona a variavel tabela

	tabela.appendChild(pacienteTr); //Insira dentro da tabela o paciente criado

	form.reset(); //Limpa os campos após o click

	var mensagensErro = document.querySelector("#mensagens-erro")
	mensagensErro.innerHTML = ""; //Limpa a (ul) apos enviar o formulário
});

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro")

	ul.innerHTML = ""; //Apaga as mensagens anteriores 

	erros.forEach(function(erro){ //loop de repetição
		var li = document.createElement("li"); //Cria uma (li)
		li.textContent = erro; //Preenche com o erro
		ul.appendChild(li);
		});
}


function obtemPacienteDoFormulario(form) { // Função para obter os dados
	var paciente = {
		nome: form.nome.value, // Formulario - variavel - valor
		peso: form.peso.value, 
		altura: form.altura.value, 
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}


function montaTr(paciente) {
	var pacienteTr = document.createElement("tr"); //Cria o elemtno (tr) dentro do HTML;
	pacienteTr.classList.add("paciente"); //Adiciona a classe a (tr)

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe) {
	var td = document.createElement("td"); //Cria a (td)
	td.textContent = dado; 				   //Atribui o dado digitado ao local criado
	td.classList.add(classe);			   //Adiciona a classe
	return td;
}

function validaPaciente(paciente) {

	var erros = []; //Array

	if (paciente.nome.length == 0) { //Se não houver caracteres
		erros.push("O nome não pode serem branco") //Empurra o código
	}

	if(!validaPeso(paciente.peso)){ //Se o meu peso não for válido
		erros.push("Peso é inválido");	//Empurra o código
	}

	if(!validaAltura(paciente.altura)){ //Se a minha Altura não for válida
		erros.push("Altura é inválido"); //Empurra o código
	}

	if(paciente.gordura.length == 0) {
		erros.push("A gordura não pode ser em branco")
	}

	if(paciente.peso.length == 0) {
	erros.push("O peso não pode ser em branco")
	}

	if(paciente.altura.length == 0) {
	erros.push("A altura não pode ser em branco")
	}

	return erros;

}