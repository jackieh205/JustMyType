let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIndex = 0;
let letterIndex = 0;


$('#keyboard-upper-container').hide();
$("#sentence").text(sentences[sentenceIndex]);
$("#target-letter").text(sentences[sentenceIndex][letterIndex]);

$(document).keydown(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-lower-container').hide();
        $('#keyboard-upper-container').show();
    }

    $(`#${e.key.charCodeAt(0)}`).css("background-color", "yellow");
    $("#yellow-block").css("left", "10px");
}
    $("yellow-block").append
});


$(document).keyup(function (e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
});

