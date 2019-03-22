const fs = require("fs");
const path = require("path");

/**
 *
 * @param {string} filePath - Takes a path as a string to parse
 * @return {string} subtitleFileName - Returns only the filename, removing path and file extension
 */
const getFileName = filePath => {
  let fileName = path.basename(filePath, ".png");
  return fileName;
};

const isDirOrFile = content => {
  let typeOfContent;
  if (!path.extname(content)) {
    typeOfContent = "file";
  } else {
    typeOfContent = "dir";
  }
  return typeOfContent;
};

const getFilesFromDir = async dirPath => {
  let fileArr = [];
  await fs.readdir(dirPath, (err, files) => {
    if (err) console.log(err);
    files.forEach(file => fileArr.push(file));
  });
  return fileArr;
};
