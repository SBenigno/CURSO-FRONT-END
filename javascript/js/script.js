function calcularMedia( notas) {

let soma = 0
for( c = 0; c < notas.length; c++ ) {
soma += notas [ c ]
}

media = soma / notas.length;

return media;
}

let media; // escopo global

function aprovacao( notas ) {
    let media = calcularMedia ( notas); // escopo da função
    let condicao = media >= 8 ? "aprovado" : "reprovado";
b
    return 'Media:  ' + media + ' - Resultado: ' +condicao;
}

// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

        // contagemRegressiva(50)

}


/* 
* Formulario envio de dados para calculo da media
*/
const formulario1 = documentgetElementById('fomulario-01')
formulario1.addEventListener('submit', function( evento ) {

    evento.preventDefault( );
    evento.stopPropagation( );

    if( this.getAtribute ('class').match(/erro/) )
    return false;

    let dados = new FormData(this);
    
    let notas = [ ]

    for(let key of dados.keys( ) ) {
        let numero =  dados.get(key).match(/\*d/) ? Number(dados.get(key) ) :0  // é um numero
        console.log(typeof numero)

        if(!isNaN (numero) ) {
            notas.push(numero)

        }

    console.log(notas);
    
    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto

} ) ;

/* Exemplo de Função para campo obrigatorio*/

function validaCampo (elemento) {
    addEventListener('focusout', function(event) {
        event.preventDefault(  );
        if(this.value == "   ") {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos e vermelho';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false
        } else {
            document.querySelector('.mensagem').innerHTML ="   ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }

    });
}

/* Exemplo de Função para campo numerico, copiando estrutura anterior*/

function validaCampoNumerico (elemento) {

    elemento.addEventListener('focusout', function(event) {
        event.preventDefault(  );
        let numero = this.value.match(/ ^[\d]5-[\d]3/) ? this.value.replace(/-/, "  ") : this.value;  /* Esta formato depois da virgula, valor, vazio, como e o caso do vaor do cep, o valor vai passar */
        if(this.value != "   " && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10) {
            document.querySelector('.mensagem').innerHTML ="   ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos e vermelho';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false

            
        }

    });
}
/*  Condição para validar e-mail*/ 
function validaEmail(elemento) {
    elemento.addEventListener('focusout', function(event) {
        event.preventDefault(  );
        const emailValido = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
        if(this.value.match(emailValido ) ) {
            document.querySelector('.mensagem').innerHTML ="   ";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos e vermelho';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false
        }

    } )

}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input. email');

for (let emfoco of camposObrigatorios) {
    validaCampo (emFoco);
}

for  (let emfoco of camposNumericos) {
    validaCampo (emFoco);
    
}

for  (let emfoco of camposEmail) {
    validaCampo (emFoco);
    
}