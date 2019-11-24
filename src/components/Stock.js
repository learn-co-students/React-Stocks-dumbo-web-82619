import React from 'react'

class Stock extends React.Component{
  handleClick = () => {
    if(this.props.addPort){
    this.props.addPort(this.props.stock)
    } else {
      this.props.removeStock(this.props.stock)
    }
  }

  
  render(){

    const { id, ticker, name, type, price } = this.props.stock
    return (
      <div>
        <div className="card">
          <div onClick ={this.handleClick}  className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock
