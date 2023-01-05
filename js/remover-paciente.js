var pacinetes = document.querySelector(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {	  //Escuta o ação de dois click
	event.target.parentNode.classList.add("fadeOut");     // Remove os itens da lista
	setTimeout(function(){ 								  //setTimaout é uma função para esperar a função
		event.target.parentNode.remove(); 				  //Remove a lista
	},500); 											  //Espera 500 mile segundo
});
