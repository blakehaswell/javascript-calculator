dist/index.html: src/index.jade
	node_modules/jade/bin/jade.js src/index.jade --out dist