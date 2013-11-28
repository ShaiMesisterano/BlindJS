describe("BlindJS Library", function () {
	beforeEach(function () {
		var cfg = {};
	});
	describe("Given being in 'browser' mode", function () {
		beforeEach(function () {
			// Create dummy elements
			var divElement = document.createElement("div");
			var textareaElement  = document.createElement("textarea");

			divElement.id = "input";
			divElement.innerHTML = "abc";
			textareaElement.id = "output";
			document.body.appendChild( divElement );
			document.body.appendChild( textareaElement );
			cfg = {
				input: divElement.innerHTML,
				output: textareaElement
			};
			BlindJS.start(cfg);
		});
		describe("When configured", function(){
			it("Should save output element as 'BlindJS.$el'", function () {
				expect(BlindJS.$el.id).toBe("output");
			});
		});
	});
	describe("Given being in 'brackets' mode", function () {
		var EditorManager = {
			getFocusedEditor: function(){
				this.getSelectedText = function(){
					return "abc";
				};	
				this._codeMirror = {
					replaceSelection: function(text){
						return text;
					},
					setValue: function(text){
						return text;
					}
				};
			}
		};
		beforeEach(function(){
			var selection = "abc";
			var text = "123";
			cfg = {
				input: selection,
				output: text
			};
			BlindJS.start(cfg);
		});
	});
	describe("When starting", function () {
		it("Should save content as 'BlindJS.content'", function () {
			expect(BlindJS.content).toBe("abc");
		});
	});
	describe("When typing a random character", function () {
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
		it("Should limit the length of typed content", function() {
			BlindJS.type("4");
			expect(BlindJS.typed).toBe("abc");
		});
	});
});
