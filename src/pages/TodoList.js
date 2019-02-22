import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { sortBy } from 'lodash';
import Card from '../components/Card';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      priority: 0,
      cardList: [{title: 'change color' , priority: 1 }]
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: [event.target.value]})
  } 

  addCard = () => {
    let editedList = this.state.cardList
    editedList.push({title: this.state.title, priority: this.state.priority})
    editedList = sortBy(editedList, ['priority'])
    
    this.setState({ cardList: editedList, title: '', priority: 0 })
  }

  render() {
    return (
      <div className='row'>
        <div className='col'>
          { this.state.cardList.map( card => 
            <Card info={card}/>
          )}
        </div>
        <div className='col'>
          Title: <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/><br/>
          Priority: <input type='number' name='priority' value={this.state.priority} onChange={this.handleChange}/>
          <br/>
          <button className='btn btn-info' onClick={this.addCard}> Add </button> <br/><br/>
          <Link to='/employee'><button className='btn btn-warning'>Employee </button></Link>            
        </div>s
      </div>
    )
  }
}

export default TodoList;