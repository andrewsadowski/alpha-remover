const shell = require("shelljs");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { getFilesFromDir } = require("./utils.js");

/**
 * Function checks if necessary dependencies are installed
 * And if they are not, installs them
 */
const depCheck = () => {
  let isIMinstalled;
  let isBrewInstalled;
  if (!shell.which("brew")) {
    shell.echo("You need Homebrew to use this tool!");
    shell.exec(
      `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
    );
    shell.echo(`Homebrew was installed`);
    isBrewInstalled = true;
  } else {
    isBrewInstalled = true;
  }
  if (!shell.which("convert")) {
    shell.echo("ImageMagick is being installed");
    shell.exec("brew install imageMagick", { silent: true });
    isIMinstalled = true;
  } else {
    isIMinstalled = true;
  }
  return isIMinstalled && isBrewInstalled ? true : false;
};

/**
 * Main thread
 */
const main = pathToContent => {
  const checkDeps = depCheck();
  const isFile;
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
        `Alpha channel turned off for all .png files in \n${pathToContent}`
      )
    );
  }
};

module.exports = {
  main
};
