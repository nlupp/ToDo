$(document).ready(function () {
    $("#inserirNota").click(inserirNota);
});

function inserirNota() {
    var textoNota = $("#escreverNota").val();

    var div = $("<div>");
    var nota = $("<textarea>")
    $(nota).html(textoNota);
    $(nota).appendTo(div);
   
    var remover = $("<button>");
    $(remover).html('Remover');
    $(remover).on("click",function(){
        div.remove();
    });
    $(remover).appendTo(div);

    /
    var editar =  $("<button>");
    $(editar).html('editar');
    $(editar).on("click",function(){
       
    });

    $(div).appendTo('.container');
    // dentro da div 
}


/*
function remover(){

};

function editar() {

};
*/