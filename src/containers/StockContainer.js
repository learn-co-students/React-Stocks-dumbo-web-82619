import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
   
  // console.log(this.props.stocks)
  
    return  <div> 
      {this.props.stocks.map((stock) => {
      return <Stock addPort={this.props.addPort} key={stock.id} stock={stock}/>
     
    })}
    </div>
     
    
  }

}

export default StockContainer;
