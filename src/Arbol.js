import React, { Component } from 'react'

class Trunk extends Component {
  constructor (props) {
    super(props)
    this.state = { expanded: true }
  }
  togglePanel = (e) => {
    e.stopPropagation()
    this.setState({ expanded: !this.state.expanded })
  }
  render = () =>
    <div className={`elm-arbol ${this.state.expanded?' expanded':' collapsed'}`}>
      <span onClick={this.togglePanel.bind(this)}/>
      <ul {...this.props}>
        {this.state.expanded?
          this.props.children:
          <span className='elm-more' onClick={this.togglePanel.bind(this)}/>}
      </ul>
    </div>
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

const Arbol = (props) =>
<Trunk className={`elm-${Array.isArray(props.data)?'array':'object'}`}>
  {[...Object.keys(props.data).map((k, i) =>
    <Branch key={i}>
      <Key className='elm-label'>{`"${k}"`}</Key>
      {getValue(props.data[k])}
      {Object.keys(props.data)[i+1] !== undefined ? ',':null}
    </Branch>)]}
  </Trunk>

  export default Arbol