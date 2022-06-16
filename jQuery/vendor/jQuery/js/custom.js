// $ instancia jquery e evita conflitos
// Importante: meu arquivo customizado tem que vir depois da chamada do jquery. o html vai carregar primeiro o jquery e a partir dai eu vou consumir a biblioteca.
jQuery( function($){

    //seletores simples
    $('h4') //tag
    $('.featured-item') //class
    $('#featured') //id

    //seletores compostos
    $('h4,h6')
    $('div h4') // quando eu quero uma tag que vem depois de uma div
    
})

console.log($('h4').text());