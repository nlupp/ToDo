$(document).ready(function () {
    $("#inserirNota").click(inserirNota);
});

function inserirNota() {
    var textoNota = $("#escreverNota").val();

    var div = $("<div>").addClass("");
    var nota = $("<textarea>")
    $(nota).html(textoNota);
    
    $(nota).appendTo(div);

    var editar = $("<button>").addClass("edicao");
    $(editar).html('editar');
    $(editar).on("click", function () {
        
    });
    $(editar).appendTo(div);

    var remover = $("<button>").addClass("remocao");
    $(remover).html('Remover');
    $(remover).on("click", function () {
        div.remove();
    });
    $(remover).appendTo(div);

    
    $(div).appendTo('.container');
}

/*
if ($(nota).prop("disabled", false)) {
} else {
    $(nota).prop("disabled", true)
}

/*
function remover(){

};

function editar() {

};
*/