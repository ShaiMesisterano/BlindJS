const vscode = require('vscode');
const BlindJS = require('./lib/blind');

const getCompleteDocumentRange = document => {
	const firstLine = document.lineAt(0);
	const lastLine = document.lineAt(document.lineCount - 1);
	return new vscode.Range(firstLine.range.start, lastLine.range.end);
};

let disposableType;
function activate(context) {
	console.log('activate');

	const disposableOpenWithBlindJs = vscode.commands.registerCommand('extension.openWithBlindJs', function ({ fsPath }) {
		const setting = vscode.Uri.parse(fsPath);

		disposableType = vscode.commands.registerCommand('type', () => {
			const typed = BlindJS.type();
			const { _line, _character } = vscode.window.activeTextEditor.selection.anchor;

			vscode.window.activeTextEditor.edit(activeEditor => {
				let newPosition;
				let newSelection;

				activeEditor.replace(getCompleteDocumentRange(activeEditor._document), typed);

				newPosition = new vscode.Position(_line + 1, _character + 1);
				newSelection = new vscode.Selection(newPosition, newPosition);

				vscode.window.activeTextEditor.selection = newSelection;
			});
		});

		vscode.workspace.openTextDocument(setting).then((a) => {
			vscode.window.showTextDocument(a).then(e => {
				e.edit(edit => {
					const { _document } = edit;
					const input = _document.getText();

					BlindJS.start({
						input
					});

					edit.delete(getCompleteDocumentRange(_document));
				});
			});
		}, (error) => {
			console.error({ error });
		});
	});

	const disposableTerminateBlindJs = vscode.commands.registerCommand('extension.terminateBlindJs', function () {
		console.log('terminateBlindJs');

		disposableType.dispose()
	});

	context.subscriptions.push(disposableType);
	context.subscriptions.push(disposableTerminateBlindJs);
	context.subscriptions.push(disposableOpenWithBlindJs);
}
exports.activate = activate;

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
