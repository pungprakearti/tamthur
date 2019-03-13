import { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.root = document.createElement('div')
  }

  componentDidMount() {
    document.body.prepend(this.root)
  }

  componentWillUnmount() {
    document.body.removeChild(this.root)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.root)
  }
}
