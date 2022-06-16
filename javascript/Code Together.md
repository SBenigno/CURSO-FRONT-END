# Code Together

## Lista de Exercícios

1. Descrever um Algoritmo para resolver o problema da travessia de modo "seguro";

Um homem precisa atravessar um rio com um barco que possui capacidade apenas  para carregar ele mesmo e mais um de seus três  pertences, que são : um lobo, uma cabra e um maço de alfafa. Em cada viagem, so podera ir o homem e apenas um de seus pertences A seguinte regra devera ser respeitada : o lobo não pode ficar sozinho com a cabra  e nem a cabra sozinha com o maço de alfafa. Escreva um algoritmo para fazer a travessia dos pertences que estão em uma margem do rio para outra.



2. JS: Exibir média de 3 números com entradas pelo formulario HTML. Enviar link(s) do git ou do fiddle.

# Resposta 1

var Homem = H
var ovelha = on
var lobo = alfa
var maço de alfafa = ma
var entregar = conserva
var recolher ao barco = protege
var viagem de ida = peregrina
var viagem de volta = rumo
var travessia = percurso
var lado direito = porto
var lado esquerdo = destino
var trajeto concluido em segurança = patrimonio

1. H {
    (peregrina percurso destino on )
    (conserva on destino) [" primeira viagem so com a ovelha"]
    (percurso rumo porto)
    }

2. H {
    (protege alfa)
    (peregrina percurso destino )  ["segunda viagem so com o lobo"]
    (conserva alfa )     [ "aqui ele deixa o o lobo e retona com a ovelha" ]
    (protege on)
    (percurso rumo porto)
}

3. H {
    (conserva on porto)
    (protege ma)   [ "aqui ele deixa a ovelha no ponto de partida, e leva so a alfafa"]
    (peregrina percurso destino)
    (conserva ma)
    (percurso rumo porto)
}

4. H {
    ( protege on porto) ["aqui ele faz a ultima viagem so com a ovelha"]
    ( peregrina rumo a destino)
}

5. H patrimonio ( homem conseguiu atravessar todos os seus peretences em segurança)

### Descrição

1. Homem atravessa o Rio com a ovelha
2. Homem deixa ovelha do outro lado do Rio
3. Homem Retorna a a margem e Atravesa o Rio com o lobo
4. Homem deixa o lobo do outro lado do rio, pega novamente a ovelha, homem retorna a margem com a ovelha
5. Homem retorna a margem, deixa a ovelha e pega a Alfafa para Atravessar o rio.
6. Homem deixa alfafa do outro lado do rio, junto com o lobo
7. Homem retorna a margem, pega sua ovelha, atravessa para o outro lado do rio, e assim, mantem todos os seus pertences em segurança.