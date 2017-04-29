var memorydefiner=require("./memory-service");
var assert = require("assert");
var data_img = require("./memory-data-image");
var data_sound = require("./memory-data-sound");


assert(memorydefiner({surrondings:"I drove to the beach!"}).image===data_img.beach );
console.log((memorydefiner({surrondings:"I drove to the beach!"})))
assert(memorydefiner({surrondings:"I drove to the park!"}).image===data_img.park );
console.log(memorydefiner({surrondings:"I drove to the park!"}))
assert(memorydefiner({surrondings:"I drove to the excitng!"}).image===data_img["~default"] );
assert(memorydefiner({surrondings:"I drove to the Beach!"}).image===data_img.beach );
assert(memorydefiner({surrondings:"I drove to the somewhere warm!",summary:"the beach had a dog"}).image===data_img.beach );
assert(memorydefiner({surrondings:"I saw a bird!"}).sound===data_sound.bird );
