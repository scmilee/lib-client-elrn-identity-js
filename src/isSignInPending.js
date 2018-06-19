const blockstack = require('blockstack')

export default () => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.isSignInPending());
        } catch(err) {
        	reject(err);
        }
    });
}