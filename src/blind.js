class _BlindJS {
	constructor() {
		this.column = null;
		this.typed = null;
		this.content = null;
		this.$el = null;
	}

	typeLine() {
		let nextNewLineIndex = this.content.indexOf('\n', this.column + 1);

		if (nextNewLineIndex === -1){
			nextNewLineIndex = this.content.length;
		}

		this.typed += this.content.slice(this.column, nextNewLineIndex);
		this.column = nextNewLineIndex;
	}

	typeCharacter() {
		this.typed += this.content.slice(this.column, this.column + 1);
		this.column += 1;
	}

	type(event) {
		event.preventDefault();
		if (event.keyCode === 13) {
			this.typeLine();
		} else {
			this.typeCharacter();
		}
		this.print();
		return this.typed;
	}

	print() {
		if (this.$el) {
			this.$el.value = this.typed;
		}
	}

	handleKeyUpEvent() {
		if (this.$el) {
			this.$el.addEventListener("keydown", this.type.bind(this));
		}
	}

	start({input, output}) {
		this.column = 0;
		this.typed = "";
		this.content = input;
		if (output) {
			this.$el = output;
			this.handleKeyUpEvent.call(this);
		}
	}
}

const BlindJS = new _BlindJS();

module.exports = BlindJS;
