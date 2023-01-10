var random_name = require('node-random-name');

random_name();

const getNome = () =>{
    return random_name();
}
exports.getNome = getNome;
