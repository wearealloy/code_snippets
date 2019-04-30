export default function letterWrapping(){

    var lettersContainer = $('[data-letterWrapping]');

    lettersContainer.each(function (i){
        var charactersFromElement;
        var newCharacters = [];
        var wrapper;
        var spaces;

        $(this).data('wrapper') == undefined ||  $(this).data('wrapper').length == 0 ? wrapper = 'span' : wrapper = $(this).data('wrapper');
        $(this).data('spaces') == undefined ? spaces = false : spaces = true;

        charactersFromElement = $(this).text().split("");

        if($(this).data('wrappingclass') != undefined ){
            var className;
            var counter = 0;
            $(this).data('wrappingclass').length == 0 ? className = 'letter' : className = $(this).data('wrappingclass');
            for (var i = 0; i < charactersFromElement.length; i++) {
                if(spaces){
                    if(charactersFromElement[i] == " "){
                        newCharacters.push(`<${wrapper}>&nbsp;</${wrapper}>`);
                    }else{
                        newCharacters.push(`<${wrapper} class="${className} item-${counter}">${charactersFromElement[i]}</${wrapper}>`);
                        counter++;
                    }
                }else{
                    if(charactersFromElement[i] == " "){
                        newCharacters.push(`<${wrapper}>${charactersFromElement[i]}</${wrapper}>`);
                    }else{
                        newCharacters.push(`<${wrapper} class="${className} item-${counter}">${charactersFromElement[i]}</${wrapper}>`);
                        counter++;
                    }
                }
            }
        }else{
            for (var i = 0; i < charactersFromElement.length; i++) {
                var thisCharacter
                if(spaces){
                    thisCharacter = charactersFromElement[i] == " " ? "&nbsp;" : charactersFromElement[i];
                }else{
                    thisCharacter = charactersFromElement[i];
                }
                newCharacters.push(`<${wrapper}>${thisCharacter}</${wrapper}>`);
            }
        }

        $(this).empty();
        $(this).html(newCharacters);
    })
}