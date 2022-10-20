# Rock, Paper, Bundle App with Webpack.

## Comands for start:

`npm run build`
and
`npm run start`

## Completed actions:

1. Initialized the Node project
2. Instaled the npm packages:
   - webpack
   - webpack-cli
   - webpack-dev-server
   - style-loader
   - css-loader
3. Created a Webpack configuration file
   - set the mode to development
   - added rules in the config file for CSS, fonts, and images
   - defined the entry point
4. Imported the CSS within main.js
5. Added <script> tag that embeds the JavaScript code that will be at exit point
6. Linked all JavaScript content the the main.js file
7. Imported icons
8. To solve the error `Cannot GET /` added the following options to the  
   webpack.config.js file:

```
devServer: {
		static: {
			directory: path.join(__dirname, "/"),
		},
	},
```
