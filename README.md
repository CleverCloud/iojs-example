# IO.js Demo

This is a simple [IO.js](http://iojs.org) application. It works with any IO.js
app built with npm.

## Deploying on Clever Cloud

You can deploy this app on Clever Cloud with the node.js runtime.

If it's your first clever cloud node.js application, please have a look at the
documentation: <https://www.clever-cloud.com/doc/nodejs/nodejs/>.

## IO.js support

Just make sure you have `"engines": { "node": "iojs-v1.0.3" }` (please adapt
the IO.js version as needed) in your `package.json`.

In a nutshell:

 - create a node application
 - git remote add clever <git remote url>
 - git push clever master
