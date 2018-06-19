const blockstack = require('blockstack')

export default (filePath, options) => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.getFile(filePath,options));
        } catch(err) {
        	reject(err);
        }
    });
}