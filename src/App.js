import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Chart from './components/Chart'
import './App.css';

export default class App extends Component {

  constructor(){
    super()

    const today = new Date()
    const lastyear = new Date(today.getTime() - ( 365 * 24 * 60 * 60 * 1000))

    this.state = {
      symbol: "",
      from: lastyear.toISOString().slice(0, 10),
      to: today.toISOString().slice(0, 10),
      symbolsList: [],
      filteredList:[],
      chartTitle: "",
      chartData: {
        x:[],
        y:[]
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    //console.log("getDerivedStateFromProps", props, state)
    return state
  }

  componentDidMount(){
    console.log("componentDidMount")
    this.getSymbols()
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    console.log("handleSubmit")
    const url = `${process.env.REACT_APP_IEX_BASE_URL}/stock/${this.state.symbol}/chart/1m`
    try {
      const {data} = await axios.get(url, {
        params: {
          token: process.env.REACT_APP_IEX_API_KEY
        }
      })
      let x = []
      let y = []
      data.forEach(data => {
        x.push(data.label)
        y.push(data.close)
      })
      let chartData = {x, y}
      console.log("chart data:", chartData)
      this.setState({chartData})

    } catch (err) {
      console.log(err)
    }
  }

  getSymbols = async () => {
    const url = `${process.env.REACT_APP_IEX_BASE_URL}/ref-data/symbols`

    try {
      const {data} = await axios.get(url, {
        params: {
          token: process.env.REACT_APP_IEX_API_KEY
        }
      })

      const list = data.map(data => {
        return { symbol: data.symbol, name: data.name}
      })

      this.setState({ symbolsList : list})

    } catch (err) {
      console.error(err)
    }
  }

  filterSearch = () => {
    console.log("filter search...", this.state.symbolsList)
    let filteredList = []
    for (let i=0; i < this.state.symbolsList; i++) {
      if (filteredList.length > 10) break
      if (this.state.symbolsList[i].toUpperCase().indexOf(this.state.symbol) > -1) {
        filteredList.push(this.state.symbolsList[i])
        console.log("symbolsList:", this.state.symbolsList[i])
      }
    }
   this.setState({filteredList})
  }

  render() {
    //console.log("render", this.state)
    return (
      <div className="App">
        <div className="info">
          <h1>Stock Lookup</h1>
          <Search state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        <Chart symbol={this.state.symbol} chartTitle={this.state.chartTitle} chartData={this.state.chartData}/>
        <div className="credit">
          Data provided by <a href="https://iexcloud.io">IEX Cloud</a>
        </div>
    </div>
    )
  }
}
