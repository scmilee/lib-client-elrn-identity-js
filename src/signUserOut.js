const blockstack = require('blockstack')

export default (optionalRedirect) => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.signUserOut(optionalRedirect));
        } catch(err) {
        	reject(err);
        }
    });
}