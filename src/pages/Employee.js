import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Employee extends Component {
  constructor(props){
    super(props)
    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users').then(result => {
      this.setState({ employees: result.data }) 
    })
  }

  render () {

    return (
      <div>
        <Link to='/'><button className='btn btn-warning'>Back</button></Link>            
        <div className='row'> 
          {this.state.employees.map(employee => 
            <div style={{ width: '25%'}}>
              Name: {employee.login}<br/>
              <img alt={employee.login} src={employee.avatar_url} style={{ width: '80%'}} /><br/><br/>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Employee;