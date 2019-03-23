### Alpha-Remover

A CLI that takes an absolute path to a directory of .pngs, and removes the alpha-channel from all of them.

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
