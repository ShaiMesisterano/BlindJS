class _BlindJS {
	constructor() {
		this.column = null;
		this.typed = null;
		this.content = null;
		this.$el = null;
	}

	saveState() {
		this.typed += this.content.slice(this.column, this.column + 1);
		this.column += 1;
	}

	type() {
		this.saveState();
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
			this.$el.addEventListener("keyup", this.type.bind(this));
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
