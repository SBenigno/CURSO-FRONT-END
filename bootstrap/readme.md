# Bootstrap

-  Framework ou biblioteca de desenvolvimento
- Modular
- Componentes ricos
- CSS + JS
- Grid System
- Responsivo
- Mobile - first
-  Amplamente utilizada
- Cross browser

## Biblioteca x Framework

- Biblioteca : oferece objetos / classes prontas para uso
- Framework : oferece um conjunto de bibliotecas
- Biblioteca : recurso para trabalhar
- Framework : metodologia de trabalho
- Biblioteca : te leva ao destino
- Framework : te ensina a chegar

## Desenvolvimento Agíl

- Metodologias : Scrum, Kanban, XP
- Entrega de  valor para o negocio
- Ciclos evolutivos
- Não se repita
- Separar grandes projetos em pequenas entregas, focar em um componente por vez ( ter pensamento de como dividir o projeto)
- MVP - Minimo Produto Viável
- Estar envolvido x comprometido

## Vantagens

- Uso simples
- Menos codigo
- Abstração de estilos
- Documentação completa : https://getbootstrap.com/

## Desvantagens

- Uso excessivo (planejar a necessidade de usar )
- Override de estilos (sobreposição)
- Abstração de estilos

### Com Bootstrap

<a class=" btn batn-lg">Botão</a>

### Sem bootstrap
<a class=" botao botao grande">Botao</a>

<style>
    html {
        font-size : 62.5%
    }

    .botao{
        background-color : #ccc;
        boder-radios : 2px;
        display : block;
        font-family : sans-serif;
        font-size : 1.6rem;
        padding : 1rem 2rem ;
        margin: 5px auto;

    }

.botao .grande{
    font-size: 2rem;
}

.botao: hover {...} // passar o mause em cima
.botao active {...} // se foi visitado
.botao:visited {...} //

</style>
