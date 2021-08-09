import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';



class App extends React.Component {
  state={
    allFoods: foods,
    // originalFoodList: foods,
    hideForm: false,
    name:'',
    calories:'',
    image:'https://media.istockphoto.com/photos/ice-cream-sundae-picture-id1143594100?k=6&m=1143594100&s=612x612&w=0&h=GwEisVKa3aPJjDBjYxN_l8XqNx2Peu--hF5ty-UNt4I='
  }

  showFoods = () => {
    return this.state.allFoods.map((eachFood, i) => {
      return <FoodBox key={i} {...eachFood} />
    })
  }
  
  addFoodToList = (food) => {
    console.log(food)
    let todaysFood = {...this.state.todaysFood}
    todaysFood[food.name] = food;
    this.setState({todaysFood})
  }

  showTodaysFood = () => {
    let items = []
    for(let key in this.state.todaysFood){
      items.push(
        <li>Name: {this.state.todaysFood[key.name]} Calories:{this.state.todaysFood} </li>
      )
    }
    return items
  }




  addNewFood = () => {
    // console.log("hello") 
    this.setState({hideForm: !this.state.hideForm})
  }

  handleSubmit = (e) => {
   e.preventDefault()
   console.log(this.state)
   let copyOfFood = [...this.state.allFoods]
   let food = {name: this.state.name, calories: this.state.calories, image: this.state.image}
   copyOfFood.unshift(food)
   this.setState({allFoods: copyOfFood})
  }

  handleChange = (e) => {
  console.log(e.target.value, e.target.name)
  this.setState({[e.target.name]: e.target.value})
  }

  search = (e) => {
    console.log(e.target.value)
    let filteredFoods = foods.filter((elem) => {
      // console.log(elem.name)
      return elem.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    this.setState({allFoods: filteredFoods})
  }

  render() {

  return (

    <div className="App">
      <input onChange={this.search} name="search" placeholder="search" type="text"/>
      <form onSubmit={this.handleSubmit} hidden= {this.state.hideForm}>
        <input onChange={this.handleChange} name="name" placeholder="food" type="text"/>
        <input onChange={this.handleChange} name="calories" placeholder="calories" type="number"/>
        <input onChange={this.handleChange} name="image" placeholder="image" type="text" value=""/>
      <button >Submit</button>
      </form>

      <button onClick={this.addNewFood}> Add New Food </button>

      <ul>
       {this.showFoods()} 
      </ul>



       </div>
  );
  }
}

export default App;
