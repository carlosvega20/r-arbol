import React, { useState } from 'react'

const Trunk = (props) => {
  const [toggle, setToggle] = useState(true)
  
  const togglePanel = (e) => {
    e.stopPropagation()
    setToggle(!toggle)
  }
  return (
    <div className={`elm-arbol ${toggle?' expanded':' collapsed'}`}>
      <span onClick={togglePanel}/>
      <ul {...props}>
        {toggle?
          props.children:
          <span className='elm-more' onClick={togglePanel}/>}
      </ul>
    </div>
  )
}

const Branch = (props) => <li {...props}>{props.children}</li>
const Key = (props) => <span {...props}>{props.children}</span>
const Value = (props) => <span {...props}>{props.children}</span>

const getValue = (value) => {
  switch (typeof value) {
    case 'object':
      return value === null?<Value className='elm-null'>null</Value>:<Arbol data={value}/>
    case 'string':
      return <Value className='elm-str'>"{value}"</Value>
    case 'function':
    case 'symbol':
      return <Value className='elm-func'>{String(value)}</Value>
    case 'boolean':
    case 'undefined':
    case 'number':
    default:
      return <Value className={`elm-${typeof value}`}>{String(value)}</Value>
  }
}

const Arbol = ({ data }) =>
<Trunk className={`elm-${Array.isArray(data)?'array':'object'}`}>
  {[...Object.keys(data).map((k, i) =>
    <Branch key={i}>
      <Key className='elm-label'>{`"${k}"`}</Key>
      {getValue(data[k])}
      {Object.keys(data)[i+1] !== undefined ? ',':null}
    </Branch>)]}
  </Trunk>

  export default Arbol