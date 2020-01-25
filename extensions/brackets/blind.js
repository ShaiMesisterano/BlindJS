var BlindJS = (function (blindJS) {

	"use strict";

	blindJS.content = {};
	blindJS.$el = {};

	blindJS.printText = function () {
		this.$el.value = this.typed;
	};

	blindJS.saveState = function () {
		this.typed += this.content.slice(this.column, this.column + 1);
		this.column += 1;
	};

	blindJS.type = function () {
		blindJS.saveState();
		blindJS.printText();
	};

	blindJS.handleKeyUpEvent = function (self) {
		this.$el.addEventListener('keyup', self.type);
	};

	blindJS.start = function (cfg) {
		this.column = 0;
		this.typed = "";
		this.content = cfg.input;
		this.$el = cfg.output;
		this.handleKeyUpEvent(this);
	};

	return blindJS;

})(BlindJS || {});

if (typeof define === "function") {
	define(function (require, exports, module) {
		exports.BlindJS = BlindJS;
	});
}
