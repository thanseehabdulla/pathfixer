'use strict';

/**
 * Filter path with ..
 * @param {string} path
 * @return {string}
 */
module.exports = function(path) {

    var split[] = path.split('/')
    var pathnew = "";

    for(let i = 0 ; i < split.length; i++ ){
        if(split[i] == '..'){
            i++;
        }else{
            pathnew = pathnew +'/'+split[i];
        }
    }

    return pathnew;
};