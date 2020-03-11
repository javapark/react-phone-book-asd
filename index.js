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

  render() {
    return (
      <div>
        <PhoneForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
