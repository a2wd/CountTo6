module.exports = function(...args){
	return (args.reduce((p,c) => p + c)/args.length)
}
