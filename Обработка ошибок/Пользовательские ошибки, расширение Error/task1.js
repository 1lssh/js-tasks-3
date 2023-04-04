class FormatError extends SyntaxError {
	constructor(message) {
		this.message = message
		this.name = 'FormatError'
	}

}