import React from 'react'
import Arbol from './Arbol.js'
import './arbol-skin.css'

const source = {
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
}

const App = () => (
  <div className="json-skin">
    <Arbol data={source} />
  </div>
)

export default App
