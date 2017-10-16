# npm-censor-words

This is simple words censoring

How to use:
1. First instal this using npm with 'npm install sensoring-words'
2. You can include this npm using
	var c = require(sensoring-words);

3. To filter some words you can use it by calling method censor
	c.censor("SOME_STRING_HAVE_CENSORED_WORDS")

4. To add new censor words you can add by calling method addCustomCensorWords 
	c.addCustomCensorWords("CENSORE_WORD")

5. To see all the censored words
	c.getCensorWords() 
