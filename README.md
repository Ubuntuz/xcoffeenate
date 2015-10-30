# xcoffeenate

## How to use

This repo uses gulp. Which is awesome. You'll need node.js for it to work. You can download that [here](https://nodejs.org/download/).

Once you've installed Node, clone this repo.

Open `terminal` or `cmd` and navigate to the root of the project.

Input `npm install -g gulp` to install the build system.

Input `npm install` and let Node do it's magic.

You can now trigger builds by using the command `gulp build` (And see a complete list of tasks available in the build system by using the command `gulp`).

The built files will be put in a folder called `/build/` - Open the `index.html` file there, and you can use the sim.

-----

Useful commands:

`gulp watch` - Will do a new build of the files, every time you save a change.

`gulp clean` - Will clean out old files. Useful to do every once in a while.

`gulp build` - Compiles and builds all the files needed for the project.