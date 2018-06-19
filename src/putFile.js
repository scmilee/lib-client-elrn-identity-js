const blockstack = require('blockstack')

export default (filePath,content, options) => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.putFile(filePath,content,options));
        } catch(err) {
        	reject(err);
        }
    });
}