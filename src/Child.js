import React, {Component} from 'react';


class Child extends Component {
    render () {
        return (
            <div>
                <h1 onClick= { () => 
                    this.props.myFunction("Hello World")
                }>Click on this to call Parent.myFunction()</h1>
            </div>
        )
    }
}

export default Child;
