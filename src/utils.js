const fs = require("fs");
const path = require("path");

/**
 * NOTE: For future single file parsing
 * @param {string} filePath - Takes a path as a string to parse
 * @return {string} subtitleFileName - Returns only the filename, removing path and file extension
 */
const getFileName = filePath => {
  let fileName = path.basename(filePath, ".png");
  return fileName;
};

/**
 * NOTE: For future single file parsing
 * @param {string} content - path to content, either single file or dir
 */
const isDirOrFile = content => {
  let typeOfContent;
  if (!path.extname(content)) {
    typeOfContent = "dir";
  } else {
    typeOfContent = "file";
  }
  return typeOfContent;
};

/**
 *
 * @param {string} dirPath
 * @return {array} returns an array of all files in dir
 */
const getFilesFromDir = dirPath => fs.readdirSync(dirPath);

module.exports = {
  getFilesFromDir,
  isDirOrFile
};
