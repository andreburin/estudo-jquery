/*
 *	Declaração de variáveis
 *
 * As declarações de variáveis são executadas antes de qualquer código,
 * mas são executadas somente quando existe uma atribuição de valores
 * para as mesmas. Com isso a declaração e atribuição de uma váriável
 * pode acontecer em qualquer parte do escopo que ela pertence com se
 * fosse no início esse comportamento denomina-se "Hoisting"
 */
 function hoisting(){
 	//Uso da variável sem declaração
 	console.log(variavel);

 	//declaração e atribuição de valor a variável
 	var variavel = 'qualquerValor';
 }

 /* 
  *  Declaração de variável global
  * 
  * Obs: pode-se declarar variáveis globais utilizando "var" se a
  * declaração ocorrer no contexto global
  */
 	nome1 = 'André';

 /*
  * Variáveis declaradas não são configuráveis no contexto de execução.
  */

  var a = 1;
  //Variável global
  b = 2;

  delete this.a; //lança exception TypeError em modos restrito
  delete.this.b;

  console.log(a,b); //throws a ReferenceError
  //"b" não existe mais



/*
 *	Declaração da variável Local
 *
 * O escopo de uma variável declarada com "var" é o seu contexto
 * atual em execução, o qual é uma função a qual pertence ou,
 * para variáveis declaradas fora de uma função, seu escopo é global
 */
 	var nome2 = 'André'; // Global

 	function()={
 		var nome2 = "André 2"; // Local
 	}


/* let permite que sejam declaradas variáveis limitando seu escopo 
 * no bloco, instrução ou uma expressão na qual é usada. Ao contrário
 * da keyword "var" que define uma variável globalmente ou em um 
 * escopo inteiro de uma função
 */


 	var teste = "";//Escopo global

 	function testeFunction(){
 		//Escopo da function
 		var functionTeste = "functionTeste";

 		if(1==1){
 			var verdadeiramenteo - true//Escopo da function
 			let isVerdadeiro = true;//Escopo do inf
 			console.log(isVerdadeiro);
 		}else{
 			//Escopo do else
 			let isFalso = false;
 			console.log(isFalso);
 		}
 	}

/*
 * A keyword "const" cria uma contante de escopo local ou global
 * de uma function. O valor de uma constante não pode ser alterado
 * via re-atribuição, e uma constante não pode ser redeclarada.
 * O valor deve ser atribuído à contante no ato de sua declaração 
 * obigatoriamente. Uma contante não pode compartilhar nomes com 
 * uma function ou uma variável. Isso não significa que o valor
 * seja imutavel, mas apenas que a variável constante não pode ser 
 * alterada ou reatribuida
 */
 	function functionConst(){
 		const minhaConstante
 	}