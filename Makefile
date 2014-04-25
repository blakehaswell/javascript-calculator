SOURCE_DIR = src
OUTPUT_DIR = dist

JADE = node_modules/jade/bin/jade.js
BROWSERIFY = node_modules/browserify/bin/cmd.js

all: $(OUTPUT_DIR)/*

$(OUTPUT_DIR)/index.html: $(SOURCE_DIR)/index.jade
	$(JADE) $(SOURCE_DIR)/index.jade --out $(OUTPUT_DIR)

$(OUTPUT_DIR)/app.js: $(SOURCE_DIR)/*.js $(SOURCE_DIR)/**/*.js
	$(BROWSERIFY) $(SOURCE_DIR)/app.js --outfile $(OUTPUT_DIR)/app.js

.PHONY: all