describe("BlindJS Library", function () {
    describe("Given an input div and an output textarea", function () {
        beforeEach(function () {
            // Create dummy DIV
            var divElement = document.createElement("div");
             divElement.id = "input";
             divElement .value = "abc";
            document.body.appendChild( divElement );
	    // Create dummy TextBox
 	     textareaElement  = document.createElement("textarea");
             textareaElement.id = "output";
            document.body.appendChild( textareaElement);

            BlindJS.start("input", "output");
        });
        describe("When starting", function () {
            it("Should save parameter as 'BlindJS.$el'", function () {
                expect(BlindJS.$el).toBe("elementId");
            });
            it("Should save content as 'BlindJS.content'", function () {
                expect(BlindJS.content).toBe("abc");
            });
        });
        describe("When typing a random caharachter", function () {
            beforeEach(function () {
                BlindJS.typed = "";
                BlindJS.type("a");
            });
            it("Should print charachter from the stored content", function () {
                expect(BlindJS.typed).toBe("a");
            });
        });
        describe("When typing random characters", function () {
            beforeEach(function () {
                BlindJS.column = 0;
                BlindJS.typed = "";
                BlindJS.type("1");
                BlindJS.type("2");
                BlindJS.type("3");
            });
            it("Should count the number of key strokes", function () {
                expect(BlindJS.column).toBe(3);
            });
            it("Should print characters from the stored content", function () {
                expect(BlindJS.typed).toBe("abc");
            });
        });
    });
});
