import React from 'react';
import './App.css';

class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
          input: '',
          output : 0
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.equals = this.equals.bind(this);
      this.clear = this.clear.bind(this);
  
    }
    handleChange(event){
        
        if (event.target.value === "X"){
            event.target.value = "*"
        }
      this.setState( state => ({

          input: state.input + event.target.value,
          output : state.input + event.target.value
    
        }))
    }
    equals(){
       this.setState({
          // eslint-disable-next-line no-eval
          output : eval(this.state.input)
      })
    }
    clear(){
      this.setState({
          input : '',
          output: 0
      })
    }
    render(){
      return(
        <div>
            <table>
                <thead>
                    <tr colSpan="2">
                        <td id="display" colSpan="3"><input value={this.state.input} /><input value={this.state.output}/></td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td id="zero"><input type="button" value="0" onClick={this.handleChange}/></td>
                    <td id="one"><input type="button" value="1" onClick={this.handleChange}/></td>
                    <td id="two"><input type="button" value="2" onClick={this.handleChange}/></td>
                </tr>
                <tr>
                    <td id="three"><input type="button" value="3" onClick={this.handleChange}/></td>
                    <td id="four"><input type="button" value="4" onClick={this.handleChange}/></td>
                    <td id="five"><input type="button" value="5" onClick={this.handleChange}/></td> 
                </tr>
                <tr>
                    <td id="six"><input type="button" value="6" onClick={this.handleChange}/></td>
                    <td id="seven"><input type="button" value="7" onClick={this.handleChange}/></td>
                    <td id="eight"><input type="button" value="8" onClick={this.handleChange}/></td>
                </tr>
                <tr>
                    <td id="nine"><input type="button" value="9" onClick={this.handleChange}/></td>
                    <td id="add"><input type="button" value="+" onClick={this.handleChange}/></td>
                    <td id="subtract"><input type="button" value="-" onClick={this.handleChange}/></td>
                </tr>
                <tr>
                    <td id="multiply"><button type="submit" value="X" onClick={this.handleChange}>X</button></td>
                    <td id="divide"><input type="button" value="/" onClick={this.handleChange}/></td>
                    <td id="decimal"><input type="button" value="." onClick={this.handleChange}/></td>
                </tr>
                <tr>
                    <td id='clear'><input type="button" value="AC" onClick={this.clear}/></td>
                    <td id='equals' colSpan="2"><input type="button" value="=" onClick={this.equals}/></td>
                </tr>
                </tbody>
            </table>
        </div>
      )
    }
  }

  export default MyComponent;



