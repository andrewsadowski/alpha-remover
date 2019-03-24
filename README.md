<div align="center">

  <img width="auto" height="auto" src="https://s3-us-west-2.amazonaws.com/andrew-sadowski-images/AlphaRemover_Slim.png">

</div>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/alpha-remover">
    <img src="https://img.shields.io/npm/v/alpha-remover.svg?style=flat-square" alt="npm version">
  </a>
    <a href="https://www.npmjs.com/package/alpha-remover">
    <img src="https://img.shields.io/npm/dt/alpha-remover.svg?style=flat-square" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/alpha-remover">
    <img src="https://img.shields.io/npm/dm/alpha-remover.svg?style=flat-square" alt="npm downloads monthly">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="code style" />
  </a>
</p>

A CLI that takes an absolute path to a directory of .pngs, and turns off the alpha-channel for all of them.

### Prerequisites

- NodeJS

### Installing

Install dependencies via NPM/Yarn to run

```bash
npm install -g alpha-remover
```

### Running Application

After installing globally via NPM, run from the terminal with a path to a directory:

```bash
alphaRemover '/absolute/path/to/dir/'
```

The CLI will check if you have Homebrew and ImageMagick installed, and if you don't it will install them for you. Then it will remove the alpha channel from each .png in the directory you passed it.
