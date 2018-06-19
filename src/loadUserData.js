const blockstack = require('blockstack')

export default () => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.loadUserData());
        } catch(err) {
        	reject(err);
        }
    });
}