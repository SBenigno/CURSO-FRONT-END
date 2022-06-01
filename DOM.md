# DOM

- Document Object Model
- EStrutura de um arquivo na web
- Representa documentos HTML ou XML
- Interface de programação 
- Não e uma linguaguem de programação
- É essencial para o JS entender o modelo de paginas web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo 
- Alterar conteudo

## Como?
- Disponibilizando API ( Application Programming Interface)
- Rotinas  e padrões estabelecidos
- Metodos (funções)
- Arvore de elementos
-  Seletores
- Objetos ( nós / nodes)

## Exemplo HTML
...
<html> 
    <head> </head>
    <body> </body>
</html>

## Exemplo Objeto

objeto = {
    html : {
        head : { },
        body : { 
            h1 : { }
        }
    }
}

## DOM x JAVA
- O DOM pode ser usado por outras linguaguens
- Sem o DOM o JS não teria noção de pagina

## Vantagens de usar JavaScript 
- Codigo e executado por navegadores
- Torns=ar as paginas dinâmicas
- Evitar Requisições desnecessarias ( performance )
- SPA ( Single Page Applications )
- Reagir rapidamnet as ações dos ususarios

## Desvantagnes de usar o JavaScript
- Codigo é executado por navegadores 
- O conteudo NÃO fica visivel para indexadores de busca
- Alterações em tempo de execução não ficam savas no documento
### Exemplos
Seleciona o objeto e disponibiliza ( metodo/ funções ). calback

- document.getElementaryById ( id )
- document.getElementaryByTagName ( 'div' )
- document.createElement ( 'div' )
- parentNode. appendChild ( node ) // html.appendChild ( 'body' )
- element.setAttribute ( 'name' ) // setar
- element.getAttribute (' name' ) // pegar
- element.addEventListener (  )
- window.location
- window.onload
- console.log (   )
- window.scrollTo ( x, y )




