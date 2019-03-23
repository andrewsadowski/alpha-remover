const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { getFilesFromDir } = require("./utils.js");

/**
 * Function checks if necessary dependencies are installed
 */
const depCheck = () => {
  let isIMinstalled;
  if (!shell.which("brew")) {
    shell.echo("You need Homebrew to use this tool!");
    shell.exec(
      `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    );
    shell.echo(`Homebrew was installed`);
  }
  if (!shell.which("convert")) {
    shell.echo("ImageMagick is being installed");
    shell.exec("brew install imageMagick", { silent: true });
    isIMinstalled = true;
    // shell.exit(1);
  } else {
    // shell.echo("imageMagick is installed");
    isIMinstalled = true;
  }
  return isIMinstalled;
};

/**
 * Main thread
 */
const main = pathToContent => {
  const checkDeps = depCheck();
  if (checkDeps) {
    let filesArr = getFilesFromDir(pathToContent);
    filesArr.splice(filesArr.indexOf(".DS_Store"), 1);
    console.log(filesArr);

    filesArr.forEach(file => {
      shell.exec(
        `convert ${path.join(
          pathToContent,
          file
        )} -background white -alpha remove -alpha off ${path.join(
          pathToContent,
          file
        )}`
      );
    });
    return console.log(
      chalk.blue(
        `Alpha channel removed for all .png files\nin ${pathToContent}`
      )
    );
  }
};

module.exports = {
  main
};
