import React from 'react';
import foods from '../foods.json';

class FoodBox extends React.Component{

  state = {
    clicked: true,
    calories: this.props.calories,

  };

  handleChange = (e) => {
    console.log(e.target.value*this.props.calories, e.target.name);
    this.setState({ [e.target.name]: e.target.value *  this.props.calories});
  };
  
  handleIncrementClick = (e) => {
console.log(`for button ${this.props.calories}`)

    this.setState({
      clicked:!true,
    });
  };

 render(){
    //  console.log(this)
     return(
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src= {this.props.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong> {this.props.name} </strong> <br />
          <small> {this.props.calories} </small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input"
           type="number"
           min="1"
           onChange={(e) => this.setState({quantity:e.target.value})}
            value={this.state.quantity} />
        </div>
        <div className="control">
          <button onClick={(e)=> {
          let { name.calories } = { ...this.props }
          this quantity = this.state.quantity
          this.props.bananas({name, calories, quantity})
          } 
        }
          className="button is-info"> + </button>
        </div>
      </div>
    </div>
  </article>
</div>

     )
 }
}

export default FoodBox;