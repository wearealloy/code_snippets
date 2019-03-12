export default function letterWrapping(element, className){
	var charactersFromElement;
	var newCharacters = [];

	if(element.length > 0){
		charactersFromElement = element.text().split("");

		for (var i = 0; i < charactersFromElement.length; i++) {
			newCharacters.push("<div>" + charactersFromElement[i] + "</div>");
		}
		
	}

	return newCharacters;
}