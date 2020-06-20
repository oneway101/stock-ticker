import React from 'react'

function Search(props) {
  let {symbol, to, from} = props.state
  let {handleChange, handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <input name="symbol" value={symbol} onChange={handleChange} />
        <input type="submit" value="search" />
      </div>
      <div className="container">
        <label>From Date </label>
        <input type="date" name="from" onChange={handleChange} value={from} />
      </div>
      <div className="container">
        <label> To Date </label>
        <input type="date" name="to" onChange={handleChange} value={to} />
      </div>
    </form>
  )
}

export default Search
