import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {

  myFunction(value) {
    console.log(value)
  }

  render () {
  return (
    <div>
      <Child myFunction={this.myFunction} />
    </div>
    )
  }
}

export default Parent;
