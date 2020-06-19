import React, { Component } from 'react'

export default class Search extends Component {

  constructor(){
    super()

    const today = new Date()
    const lastyear = new Date(today.getTime() - ( 365 * 24 * 60 * 60 * 1000))

    this.state = {
      symbol: "",
      from: lastyear.toISOString().slice(0, 10),
      to: today.toISOString().slice(0, 10)
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", props, state)
    return state
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})

  }

  handleSubmit = async(e) => {
    e.preventDefault()
  }

  render() {
    console.log("render", this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <input name="symbol" value={this.state.symbol} onChange={this.handleChange} />
          <input type="submit" value="search"/>
        </div>
        <div className="container">
          <label> From Date:
            <input type="date" name="from" onChange={this.handleChange} value={this.state.from} />
          </label>
        </div>
        <div className="container">
          <label> To Date:
            <input type="date" name="to" onChange={this.handleChange} value={this.state.to} />
          </label>
        </div>
      </form>
    )
  }
}
