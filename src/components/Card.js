import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Card',
      priority: 1,
    }
  }

  render () {
    const title = this.props.info.title
    const priority = this.props.info.priority

    return (
      <div className='Card'> 
        <h3>Title: {title}</h3> 
        Priority: {priority} <br/> 
      </div>
    )
  }
}

export default Card;