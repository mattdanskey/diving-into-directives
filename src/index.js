if (__DEV__) {
	document.write('<script src="http://localhost:8080/webpack-dev-server.js"></script>');
	document.write('is working!');
}

require('style!css!sass!autoprefixer!./styles.scss');