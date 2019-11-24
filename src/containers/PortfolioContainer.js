import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
   
    return (
      <div>
        <h2>My Portfolio</h2>
        <div> 
          {this.props.ports.map((stock) => {
          return <Stock  removeStock={this.props.removeStock}
          key={stock.id} stock={stock}/>
          })}
         </div>
      </div>

    )
      
    ;
  }

}

export default PortfolioContainer;
