var censorWords = ["sad","bad","mad"];
var customCensorWords = [];

function censor(instr){
	for(idx in censorWords){
		instr = instr.replace(censorWords[idx], "*****");
	}
	for(idx in customCensorWords){
		instr = instr.replace(customCensorWords[idx], "*****");
	}
	return instr;
}
function addCustomCensorWords(word){
	customCensorWords.push(word);
}
function getCensorWords(){
	var b = censorWords.concat(customCensorWords);
	return b;
} 
exports.censor = censor;
exports.addCustomCensorWords = addCustomCensorWords;
exports.getCensorWords = getCensorWords;
