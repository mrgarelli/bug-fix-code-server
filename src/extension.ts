// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { join } from 'path';
import * as vscode from 'vscode';
import requestPromise = require('request-promise');

// const tot_link = 'https://giphy.com/gifs/studio-ghibli-hayao-miyazaki-11D0XkJInM2ssU/fullscreen'
const goog_link = 'http://www.google.com'


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "bug-fix-code-server" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('bug-fix-code-server.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from bug_fix_code_server!');
		var wvp = vscode.window.createWebviewPanel('goog', 'ExampleWebview', vscode.ViewColumn.Active);
		requestPromise(goog_link).then((htmlStr) => {
			wvp.webview.html = htmlStr;
		})

		// some failed attempts exploring the api
		// const uri = vscode.Uri.parse('http://www.google.com');
		// const uri = vscode.Uri.parse(tot_link)
		// vscode.env.asExternalUri(uri)
		// vscode.env.openExternal(uri);
		// wvp.webview.asWebviewUri(uri);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
