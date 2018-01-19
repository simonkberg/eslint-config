import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class TodoApp extends Component {
  state = {
    items: [],
    text: '',
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: '',
    }))
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <ul>
          {this.state.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.body)
