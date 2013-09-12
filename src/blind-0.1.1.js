var BlindJS = (function (blindJS) {

    "use strict";

    blindJS.$el = "";
    blindJS.content = "";
    blindJS.column = 0;
    blindJS.typed = "";

    blindJS.start = function (inputElement, outputElement) {
        this.content = document.getElementById(inputElement).innerText;
        this.$el = document.getElementById(outputElement);
        this.$el.value = "";
        this.attachChangeEvent(this);
    };

    blindJS.type = function (typedChar) {
        this.typed += this.content.slice(this.column, this.column + 1);
        this.$el.value = this.typed;
        ++this.column;
    };

    blindJS.attachChangeEvent = function (self) {
        this.$el.onkeyup = function () {
            self.type(this.value);
        };
    };

    return blindJS;

})(BlindJS || {});


