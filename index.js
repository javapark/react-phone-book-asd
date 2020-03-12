import React, { Component } from 'react';
import { render } from 'react-dom';
import PhoneForm from './components/PhoneForm';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  handleCreate = (data)=>{
    console.log(data);
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
