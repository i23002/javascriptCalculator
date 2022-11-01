import React from 'react';
import './App.css';

class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
          input: '0',
          output : 0
      }
      this.handleChange = this.handleChange.bind(this);
      this.equals = this.equals.bind(this);
      this.clear = this.clear.bind(this);
  
    }
    handleChange(event){
      this.setState({
  
          input: event.target.value
    
        })
    }
    equals(){
       this.setState({
          // eslint-disable-next-line no-eval
          output : eval(this.state.input)
      })
    }
    clear(){
      this.setState({
          input : '0'
      })
    }
    render(){
      return(
        <div>
            <table>
                <thead>
                    <tr colSpan="2">
                        <td id="display" colSpan="3">display</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td id="zero"><input type="button" value="0"/></td>
                    <td id="one"><input type="button" value="1"/></td>
                    <td id="two"><input type="button" value="2"/></td>
                </tr>
                <tr>
                    <td id="three"><input type="button" value="3"/></td>
                    <td id="four"><input type="button" value="4"/></td>
                    <td id="five"><input type="button" value="5"/></td> 
                </tr>
                <tr>
                    <td id="six"><input type="button" value="6"/></td>
                    <td id="seven"><input type="button" value="7"/></td>
                    <td id="eight"><input type="button" value="8"/></td>
                </tr>
                <tr>
                    <td id="nine"><input type="button" value="9"/></td>
                    <td id="add"><input type="button" value="+"/></td>
                    <td id="subtract"><input type="button" value="-"/></td>
                </tr>
                <tr>
                    <td id="multiply"><input type="button" value="X"/></td>
                    <td id="divide"><input type="button" value="/"/></td>
                    <td id="decimal"><input type="button" value="."/></td>
                </tr>
                <tr>
                    <td id='clear'><input type="button" value="AC"/></td>
                    <td id='equals' colSpan="2"><input type="button" value="="/></td>
                </tr>
                </tbody>
            </table>
        </div>
      )
    }
  }

  export default MyComponent;



