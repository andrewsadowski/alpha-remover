const meow = require("meow");

const cli = meow(
  `
	Usage
	  $ testModule --flag [input]

	Options
	  --foo  Lorem ipsum [Default: false]

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
