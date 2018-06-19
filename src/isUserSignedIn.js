const blockstack = require('blockstack')

export default () => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.isUserSignedIn());
        } catch(err) {
        	reject(err);
        }
    });
}