const meow = require("meow");

const cli = meow(
  `
	Usage
	  $ alphaRemover --flag [file/directory absolute path]
	Options
    --file, -f Absolute path to file
    --dir, -d Absolute path to directory
	Examples
	  $ 'alphaRemover -f "/absolute/path/to/file.png"'
	  $ 'alphaRemover -d "/absolute/path/of/dir/"'
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
