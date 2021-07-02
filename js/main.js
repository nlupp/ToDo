$(document).ready(function () {
    $("#inserirNota").click(inserirNota);
});

function inserirNota() {
    var textoNota = $("#escreverNota").val();

    var div = $("<div>").addClass("divconteudo");
    var nota = $("<textarea>")
    $(nota).attr({
        id: "tArea", class: "caixaDtexto",
        rows: "2", cols: "50", maxlength: "100",
        
    });
    $(nota).html(textoNota);

    $(nota).appendTo(div);

    var editar = $("<button>");
    $(editar).attr({ id: "edButton", class: "edicao" });
    $(editar).html('editar');
    $(editar).on("click", function () {
        if ($(nota).prop('readonly') == false) {
            $(nota).prop('readonly', true );
        } else {
            $(nota).prop('readonly', false);
        }

    });
    $(editar).appendTo(div);

    var remover = $("<button>")
    $(remover).attr({ id: "reButton", class: "remocao" });
    $(remover).html('Remover');
    $(remover).on("click", function () {
        div.remove();
    });
    $(remover).appendTo(div);


    $(div).appendTo('.container');
}

/*
if ($(nota).prop("readonly", false)) {
} else {
    $(nota).prop("readonly, true)
}

/*
function remover(){

};

function editar() {

};
*/