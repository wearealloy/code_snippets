export default function letterWrapping(){

    var lettersContainer = $('[data-letterWrapping]');

    lettersContainer.each(function (i){
        var charactersFromElement;
        var newCharacters = [];
        var wrapper;

        $(this).data('wrapper') == undefined ||  $(this).data('wrapper').length == 0 ? wrapper = 'span' : wrapper = $(this).data('wrapper');

        charactersFromElement = $(this).text().split("");

        if($(this).data('wrappingclass') != undefined ){
            var className;
            $(this).data('wrappingclass').length == 0 ? className = 'letter' : className = $(this).data('wrappingclass');
            for (var i = 0; i < charactersFromElement.length; i++) {
                newCharacters.push(`<${wrapper} class="${className}">${charactersFromElement[i]}</${wrapper}>`);
            }
        }else{
            for (var i = 0; i < charactersFromElement.length; i++) {
                newCharacters.push(`<${wrapper}>${charactersFromElement[i]}</${wrapper}>`);
            }
        }

        $(this).empty();
        $(this).html(newCharacters);
    })
}