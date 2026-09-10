//Code 01 : 

//import React from 'react'; 
//const Greeting = ({ name }) => { 
//return <div>Hello, {name}!</div>;
 //};
 //export default Greeting;



import React from 'react';
interface GreetingProps {
  name: string;
}
// Define the type of props name :string


const Greeting = ({ name }: GreetingProps) => {
  // apply the GreetingProps type.
  return <div>Hello, {name}!</div>;
};
// Display a greeting message using the name prop.
export default Greeting;
// Export the component .





//Code 02 :

//import React, { Component } from 'react'; 
//class Counter extends Component { 
//state = {
 //count: 0
 //}; increment = () => {
// this.setState({ count: this.state.count + 1 }); 
//}; 
//render() { 
//return 
//( <div> 
//<p>Count: {this.state.count}</p> 
//<button onClick={this.increment}>Increment</button> 
//</div> );
// }
// } 
//export default Counter;


import React, { Component } from 'react';

interface CounterState {
  count: number;
}
// Define the type of the state count :number
class Counter extends Component<{}, CounterState> {
// the Counter class component.
  state: CounterState = {
    count: 0,
  };
// Initialize the state with count set to 0.
  
  increment = (): void => {
    this.setState({
      count: this.state.count + 1,
    });
  };// This function increases the counter by 1.
  
// Display the component
  render() {
    return (
      <div>
        {/* Display the current counter value */}
        <p>Count: {this.state.count}</p>

        {/* Call increment when the button is clicked */}
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
// Export the component