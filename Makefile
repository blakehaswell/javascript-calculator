SOURCE_DIR = src
OUTPUT_DIR = dist

JADE = node_modules/jade/bin/jade.js
BROWSERIFY = node_modules/browserify/bin/cmd.js
COMPASS = compass compile

all: $(OUTPUT_DIR)/index.html $(OUTPUT_DIR)/app.js $(OUTPUT_DIR)/app.css

$(OUTPUT_DIR)/index.html: $(SOURCE_DIR)/index.jade
	$(JADE) $(SOURCE_DIR)/index.jade --out $(OUTPUT_DIR)

$(OUTPUT_DIR)/app.js: $(SOURCE_DIR)/*.js $(SOURCE_DIR)/**/*.js
	$(BROWSERIFY) $(SOURCE_DIR)/app.js --outfile $(OUTPUT_DIR)/app.js

$(OUTPUT_DIR)/app.css: $(SOURCE_DIR)/app.scss
	$(COMPASS) $(SOURCE_DIR)/app.scss --sass-dir $(SOURCE_DIR) --css-dir $(OUTPUT_DIR)

deps:
	npm prune
	npm install
	bower prune
	bower install
	bundle install

.PHONY: all deps