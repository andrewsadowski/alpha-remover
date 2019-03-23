const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

const { getFilesFromDir } = require("./utils.js");

/**
 * Main thread
 */
const main = pathToContent => {
  const checkDeps = depCheck();
  if (checkDeps) {
    let filesArr = getFilesFromDir(pathToContent);
  }
};

/**
 * Function checks if necessary dependencies are installed
 */
const depCheck = () => {
  let isIMinstalled;
  if (!shell.which("convert")) {
    shell.echo("imageMagick is not installed");
    shell.exec("brew install imageMagick", { silent: true });
    isIMinstalled = true;
    // shell.exit(1);
  } else {
    shell.echo("imageMagick is installed");
    isIMinstalled = true;
  }
  return isIMinstalled;
};

console.log(depCheck());

module.exports = {
  main
};
/**
 
 
# make sure to have brew installed, see https://brew.sh:
#   /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
#
# make sure to have imagemagick installed, see https://imagemagick.org:
#   brew install imagemagick
#

if command -v convert; then
    echo "imagemagick seems to be installed"
else
    echo "imagemagick not installed, trying to install ..."
    if command -v brew; then
        echo "brew is installed, using it"
    else
        echo "brew not installed, trying to install ..."
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    fi

    brew install imagemagick
fi

for i in `ls res/icon/ios/*.png`;
do
    echo "convert $i"
    convert $i -background white -alpha remove -alpha off $i;
done
*/
