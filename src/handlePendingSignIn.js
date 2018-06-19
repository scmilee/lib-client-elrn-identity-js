const blockstack = require('blockstack')

export default (nameURL) => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.handlePendingSignIn(nameURL));
        } catch(err) {
        	reject(err);
        }
    });
}