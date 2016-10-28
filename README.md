# r-arbol
[![npm package](https://img.shields.io/badge/npm-0.2.0-brightgreen.svg)](https://www.npmjs.com/package/r-arbol)

ReactJS Json Tree Viewer

##Demo
http://r-arbol.surge.sh/

Based on a Json Object:

`{
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

Then:
<img src="http://r-arbol.surge.sh/tree-sample.png" width="121">


skin:
Visual elements as '+', '-', '...' are separated from the logic and can be edited in CSS styles.

##Get Started
1. `npm start`

##Roadmap
- [x] Render Visual Tree
	- [x] Any Javascript Object (json, array, etc)
	- [x] Visual elements are separated from the logic

##TODO
- Unit test