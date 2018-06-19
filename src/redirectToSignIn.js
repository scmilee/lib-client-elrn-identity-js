const blockstack = require('blockstack')

export default (redirectURI, manifestURI, permissionsArray) => {
    return new Promise((resolve, reject) => {
        try{
        	resolve(blockstack.redirectToSignIn(redirectURI, manifestURI, permissionsArray));
        } catch(err) {
        	reject(err);
        }
    });
};