import React, { Component } from 'react';
import Header from '../Header/HeaderList'
import axios from 'axios';
import ListCard from '../ListCard/ListCard'
import './List.css'
import Quote from '../quoteoftheday/quoteoftheday';

class List extends Component {
    constructor(){
      super()

      this.state = {
        list: [],
        userInput: '',

      }
      this.handleInput = this.handleInput.bind(this);this.handleAddItem = this.handleAddItem.bind(this)
      this.deleteItem = this.deleteItem.bind(this)
      this.updateList = this.updateList.bind(this)
    
    }



    componentDidMount(){
      axios.get('/api/groceryList').then(results => {
        this.setState({list: results.data
        })
      }).catch(err => console.log("error"));

    
    }



    handleInput(e) {
      this.setState({userInput: e.target.value})
    }

    handleAddItem() {
      axios.post('/api/groceryList', {title: this.state.userInput}).then (results => {
        this.setState({
          list: results.data,
          userInput: ''
        })
        console.log(results.data)
      })
    }
  
    deleteItem(id) {
      axios.delete(`/api/groceryList/${id}`).then(results => {
        this.setState({
          list: results.data
        })
      })
    }

    updateList(title, id) {
      axios.put(`/api/groceryList/${id}`, {title}).then(results => {
        this.setState({
          list: results.data
        })
      })
    }
  
  
    render() {
      let groceryList = this.state.list.map((list, i) => {
          return (
            <ListCard 
            key={i}
            list={list}
            deleteItem={this.deleteItem}
            updateList={this.updateList}
            />
          )
      })
    
      return (
        <div>
          <Header />
          <div  className='input' >
          <input  value={this.state.userInput}type='text' placeholder='item' onChange={this.handleInput}/>
          <button onClick= {this.handleAddItem}>Add</button>
          {groceryList}
          </div>
          <Quote />
        </div>
      )
  }
}


export default List;
