/*
  
  
   careers : { in: 'UI/UX,FullStack,Web Development' };
   
   careers:{
		$in:[
		    'UI/UX',
        'Full Stack'
		    'Web Development'
  	     ]  
       }
*/
let careers = { in: 'UI/UX,FullStack,Web Development' };

function conversionOperator(json) {
    var text = JSON.stringify(json);
    var newtext = text;
    text.replace(/\bin\b/g, word => {
        let inopreatorIndex = text.indexOf(word);
        let newWord = text.slice(inopreatorIndex + 5, text.indexOf('}', inopreatorIndex) - 1);
        let stringifyArrayOfobject = JSON.stringify(newWord.split(','));
        newtext = text.replace(newWord, stringifyArrayOfobject).replace('"["', '["').replace('"]"', '"]');
        newtext = newtext.replace(/\bin\b/, '$in');
        return word;
    })


    return newtext
}

// we are sending the text as json.Stringigy(jsonobject)
function conversionOperator2(text) {

    var newtext = text;
    text.replace(/"in"/g, word => {
        let inopreatorIndex = text.indexOf(word);
        let newWord = text.slice(inopreatorIndex + 6, text.indexOf('}', inopreatorIndex) - 1);
        let stringifyArrayOfobject = JSON.stringify(newWord.split(','));
        newtext = text.replace(newWord, stringifyArrayOfobject).replace('"["', '["').replace('"]"', '"]');
        newtext = newtext.replace('in'
				  , '$in');
        return word;
    })


    return newtext
}

console.log(conversionOperator(careers));
