# Operadores

## Aritméticos: retornam o resultado de uma operação

+ somar
- subtrair
* multiplicador
/ dividir
% resto de divisão

##  Comparadores matemáticas: teste lógico, retorno booleano (verdadeiro/falso):

< menor que
> maior que
<= menor ou igual
>= maior ou igual

#####  Exemplos

a = 5
b = 4
1. a < b falso
2. a > b verdadeiro
3. a <= falso
4. a >= verdadeiro
 
##  Comparadores Lógicos: teste lógico, retorno booleano (true / false)
```
== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)
```

#####  Exemplo:

a == b = verdadeiro
a != b = falso

* Atribuição

a = b
a = 4

##  Operadores de lógica e lógica

! NÃO (NÃO)
&& E (E)
|| Ou (OU)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

####  Exemplos:

a != b // o valor de a é diferente de b
x !== y // o valor e o tipo de x são diferentes de y
!a == b // o valor de a não é igual ao valor de b

####  As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

####  Operador lógico de fábrica

Tem a capacidade de registro de valor a uma variável a partir de uma lógica lógica, IFs

#####  Exemplo:

var cor = "preto"
var meuCarro = cor == "preto" ? "preto" : "branco";

##  If
if ( condição logica) depois utiliza as {  colocar aqui o que vai ser executado, caso a condição logica seja verdadeira

## Else

* Exemplo

if (cor == "preto") {
    meuCarro = "preto";
} else {
    meuCarro = "cinza";
}

##  Else

else if  (...) {
}

* Exemplo

if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else{
    meuCarro = "azul";
}
## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
       break;
    Default :
        console.log('não temos a cor desejada');
}
## Cálculo médio de aluno

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( mídia >= 8 ) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}

# Loops
##  Laços de Repetição (loops)

- Permitem que a gente percorra, por exemplo , uma array de um objeto JavaScript que contem mais de uma informação, fazendo assim com que trabalhemos de forma repetida e controlada. Contudo precisamos ter uma condição de entrada e uma condição de saida, para não se transformar em um loop infinito. 

for([expressaoInicial]; [condicao]; [incremento]) 
{ [execução] }

- fazer revisão do carro aos 10km
var km;
var revisao = 10
for (km = 0; km <= revisao; km ++)
console.log (" apenas" +km+ "kms então pode rodar");

while([condicao]) {  [execução]  }

var hora = 24
while ( hora>0) { hora --;
console.log(hora); }

var contador = 0;
while(contador < 10) {
    contador++
}

var hora = 24;
enquanto (hora > 0){
    console.log(hora);
    hora--;
}

Do { [execução] }
While ([condição])

// fazer uma revisão do carro aos 10 km
var km;
var revisão = 3;
for(km = 0; km <= revisão; km++ ){
    console.log("apenas " + km + "kms então pode rodar");
}

### Cálculo da Média do Aluno
var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 6, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0;
for (var i = 0; i < alunos.length; i++){

    nota = 0
    notasAluno = alunos[i]
    console.log("Aluno: " + parseInt(i+1));
    console.log("Notas: " + notasAluno);

    for( c = 0; c < notasAluno.length; c++ ){
        nota += notasAluno[c];
    }

    media = nota / 4;

    if(media >= 7) {
        resultado = "aprovado";
    } else {
        resultado = "reprovado";
    }

    console.log("Media: " + media + " - " + resultado);

}

## Funções 

- Evitar repetição de código
- Realizar chamadas de animais

function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
       soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

	let media = calcularMedia( notas ); // escopo da função

	let condicao = media >= 8 ? "aprovado" : "reprovado";
  
    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// console.log()

//console.log( "Média: " + calcularMedia([8, 8, 7]))
console.log( aprovacao([8, 8, 7]) );


//console.log( "Média: " + calcularMedia([8, 8, 10, 6]))
console.log( aprovacao([8, 8, 10, 6]) );


//console.log( "Média: " + calcularMedia([9, 6]))
console.log( aprovacao([9, 6]) );