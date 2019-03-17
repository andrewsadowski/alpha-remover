const shell = require("shelljs");

/**
 * Function checks if necessary dependencies are installed
 */
const depCheck = () => {
  let isIMinstalled;
  if (shell.exec("imagemagick -v").code !== 0) {
    shell.echo("imageMagic is not installed");
    isIMinstalled = false;
    shell.exit(1);
  }
  return isIMinstalled;
};

module.exports = {
  main
};
