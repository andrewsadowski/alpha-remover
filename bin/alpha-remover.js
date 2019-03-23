#!/usr/bin/env node
const meow = require("meow");
const { main } = require("../src/index.js");

const cli = meow(
  `
	Usage
	  $ alphaRemover [directory's absolute path]

	Examples
	  $ 'alphaRemover "/absolute/path/of/dir/"'
`
);

main(cli.input[0]);
