# taco-playground

learn and experiment with [TACO](http://taco.tools/) (Tools for [Apache Cordova](https://cordova.apache.org/))

### setup log

```sh
taco create taco-playground
cd taco-playground/
taco platform add ios
taco install-reqs ios
taco build ios

// livereload of web asset (.js, .html. css) changes via BrowserSync
taco emulate ios --livereload

// add a plugin using cordova
cordova plugin add cordova-plugin-device

//rebuild
taco build ios

// launch in emulator
taco emulate ios --livereload
```
