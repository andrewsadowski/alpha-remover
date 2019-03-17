const meow = require("meow");

const cli = meow(
  `
	Usage
	  $ alphaRemover --flag [input]

	Options
	  --dir  Lorem ipsum [Default: false]

	Examples
		$ testModule 
		unicorns & rainbows
	  $ testModule ponies
	  ponies & rainbows
`,
  {
    flags: {
      file: {
        type: "string",
        alias: "f"
      },
      dir: {
        type: "string",
        alias: "d"
      }
    }
  }
);

console.log(cli.input[0], cli.flags);
