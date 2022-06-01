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

document.addEventListener('submit', function(evento) {

    evento.preventDefault( );
    evento.stopPropagation( );
    let formulario = document.getElementById('formulario-01');
    let dados = new FormData(formulario);
    let objeto = { };
    let notas = 0

    for(let key of dados.keys( ) ) {
        objeto[key] = dados.get(key);


        // adicionar itens na array
        notas.push(  parseInt += parseInt (dados.get(key)))
    }
    console.log(notas);
    console.log(objeto);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = texto

})