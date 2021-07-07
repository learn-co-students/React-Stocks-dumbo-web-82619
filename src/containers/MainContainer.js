import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    port: [],
    fiterTerm: 'All'
  }



  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({ 
        stocks: data
      })

    })
  }

  handleClick = (stockObj) => {
    if(!this.state.port.includes(stockObj)){

    this.setState({
      port: [...this.state.port, stockObj]
    })
  }
  }


  removeStock = (stock) => {
    this.setState({ 
      port: this.state.port.filter(port => port !== stock)
    })
  }

  setFilterTerm = (term) => {
    this.setState({
      fiterTerm: term
    })
  }

  whichStocksToRender = () => {
    if(this.state.fiterTerm === "All"){
    return this.state.stocks
  } else {
    return this.state.stocks.filter(stock => stock.type === this.state.fiterTerm)
  }
  }
  
  

  render() {
    return (
      <div>
        <SearchBar term={this.state.fiterTerm} 
        setFilterTerm={this.setFilterTerm}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer addPort ={this.handleClick} stocks={this.whichStocksToRender()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer removeStock={this.removeStock} ports={this.state.port}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
