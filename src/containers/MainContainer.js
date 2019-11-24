import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state ={
    stocks: [],
    port: []
  }



  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(data => {
      // console.log(data)
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

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer addPort ={this.handleClick} stocks={this.state.stocks}/>

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
