# aurelia-users
A simple Aurelia demonstration of how to create a custom user signup/login process. The user accounts are stored (using the infamous [json-server package](https://github.com/typicode/json-server), which is awesome btw) using a simple JSON structure inside the db.json file, found in the project root folder.

The SCSS file(s) are built into regular CSS files by gulp (styles/*.scss).

Uses [Foundation for Sites](http://foundation.zurb.com/sites.html) (because who doesn't like it?) :-)

Uses the [aurelia-auth](https://github.com/paulvanbladel/aurelia-auth) plugin and the [aurelia-validatejs](https://github.com/aurelia/validatejs) plugin.

# System Requirements
This program requires node 5.x (currently using 5.11.0 myself).

# Installation & Usage
The dependencies can be installed as such (if you don't already have them):

```
npm install -g gulp jspm json-server
```

.then().run():

```
npm install
jspm install
```

And to power everything up:

```
json-server --watch db.json
gulp serve
```

That's all. Enjoy!
