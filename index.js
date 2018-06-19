import isUserSignedIn from './src/isUserSignedIn.js'
import isSignInPending from './src/isSignInPending.js'
import loadUserData from './src/loadUserData.js'
import putFile from './src/putFile.js'
import getFile from './src/getFile.js'


export default class knockstack {
	constructor(options){
		this.options = Object.call(defaultOptions, options);
	}
	isUserSignedIn(){
		return isUserSignedIn.call(this.options);
	}
	isSignInPending(){
		return isSignInPending.call(this.options);
	}
	loadUserData(){
		return loadUserData.call(this.options);
	}
	putFile(filePath,content, options){
		return putFile.call(this.options,filePath,content,options);
	}
	getFile(filePath, options){
		return getFile.call(this.options, filePath, options);
	}

}