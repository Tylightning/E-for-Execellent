var data_img = require("./memory-data-image");
var data_sound = require("./memory-data-sound");
/**
 *This is a function created by T.S.
 * This functions purpose in the amazing life in the world of the internet is to evaluate a string made by the user to check for any key words and to return the proper image back to the user:)
 */
function memorydefiner(descObject){
    var image=memoryGenerator(descObject,data_img);
    var sound=memoryGenerator(descObject,data_sound);
    
    return{
        image,
        sound
    };    
}

function memoryGenerator(descObject,data){

    var keys= Object.keys(data);
    for (var x=0;x<keys.length-1;x++){
        if (isKeyInString(keys[x],descObject.surrondings+descObject.summary)){
            return data[keys[x]];
        }
    }
    return data["~default"];
}
/**
 *This is another function made by T.S.
 * This functions purpose is to turn the whole string from the user to lower casr letters to aviod any ridiculous expliots in the data:)
 */ 
function isKeyInString(key,str){
   return str.toLowerCase().indexOf(key)>=0;
}

module.exports=memorydefiner;