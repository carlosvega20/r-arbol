# r-arbol
[![npm package](https://img.shields.io/badge/npm-0.2.0-brightgreen.svg)](https://www.npmjs.com/package/r-arbol)

ReactJS Json Tree Viewer (http://r-arbol.surge.sh/)

##Usage
npm install -g r-arbol

then in your code:

`import TreeView from "r-arbol"`

Based on a Json Object:

`var jsonObj = {
  "id": 1,
  "name": "Foo",
  "price": 123,
  "tags": [
    null,
    undefined,
    "label",
    function () {}
  ],
  "stock": {
    "warehouse": 300,
    "retail": 20,
    "isDisable": true
  }
}`

`<TreeView data={jsonObj} />`

[<img src="http://r-arbol.surge.sh/tree-sample.png" width="242">](http://r-arbol.surge.sh/)

Skin:
Visual elements as '+', '-', '...', etc are separated from the logic and can be edited in CSS styles.

##Roadmap
- [x] Render Visual Tree
	- [x] Any Javascript Object (json, array, etc)
	- [x] Visual elements are separated from the logic

##TODO
- Unit test
