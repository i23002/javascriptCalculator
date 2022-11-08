import React from 'react';
import './App.css';

class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
          input: '',
          output : '0',
          count : 0,
          dot : 0
      }
      
      this.handleChange = this.handleChange.bind(this);
      this.equals = this.equals.bind(this);
      this.clear = this.clear.bind(this);
  
    }
    handleChange(event){
        if (event.target.value === "X"){
            event.target.value = "*"
        }

        if (event.target.value === "."){
            this.setState(state =>({
                dot :  1
            }))
        }

        if (this.state.count === 0 && event.target.value === "0"){
            this.setState(state => ({
                input : event.target.value,
                
            }))
        }else if(this.state.dot === 0 && event.target.value === "."){
            this.setState(state => ({
                 input : state.input + event.target.value
            }))
        }else if(this.state.dot > 0 && event.target.value === "."){
            this.setState(state => ({
                input : state.input,
            }))
        }
        else{ 
      this.setState( state => ({

          input: state.input + event.target.value,
          output : event.target.value,
          count : state.count + 1,
          dot : 0
    
        }))
    }
}
    equals(){
        if((this.state.input.length === 4) && ((this.state.input[2] === "-") || (this.state.input[2] === "*"))){
            if(this.state.input[2] === "-"){
                // eslint-disable-next-line react/no-direct-mutation-state
                this.state.input = this.state.input.replace(this.state.input[2] , "")
                this.setState({
                    // eslint-disable-next-line no-eval
                    output :"-".concat(((eval(this.state.input)).toString()))
                })
        }
            else{
                // eslint-disable-next-line react/no-direct-mutation-state
                this.state.input = this.state.input.replace(this.state.input[1],"")
                this.setState({
                    // eslint-disable-next-line no-eval
                   
                    // eslint-disable-next-line no-eval
                    output : eval(this.state.output)
                })
            }
        }
        else{
       this.setState({
          // eslint-disable-next-line no-eval
          // eslint-disable-next-line no-eval
          output : eval(this.state.input)
      })
    }
}
    clear(){
      this.setState({
          input : '',
          output: 0,
          count : 0,
          dot : 0
      })
    }
    render(){
      return(
        <div>
            <table>
                <thead>
                    <tr colSpan="2">
                        <td colSpan="3"><input value={this.state.input} id="display"/><input value={this.state.output} id="display"/></td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='button'><input type="button" value="0" onClick={this.handleChange}  id="zero"/></td>
                    <td className='button'><input type="button" value="1" onClick={this.handleChange} id="one"/></td>
                    <td className='button'><input type="button" value="2" onClick={this.handleChange}  id="two"/></td>
                </tr>
                <tr>
                    <td className='button'><input type="button" value="3" onClick={this.handleChange}  id="three"/></td>
                    <td className='button'><input type="button" value="4" onClick={this.handleChange}  id="four"/></td>
                    <td className='button'><input type="button" value="5" onClick={this.handleChange}  id="five"/></td> 
                </tr>
                <tr>
                    <td className='button'><input type="button" value="6" onClick={this.handleChange}  id="six"/></td>
                    <td className='button'><input type="button" value="7" onClick={this.handleChange}  id="seven"/></td>
                    <td className='button'><input type="button" value="8" onClick={this.handleChange}  id="eight"/></td>
                </tr>
                <tr>
                    <td className='button'><input type="button" value="9" onClick={this.handleChange}  id="nine"/></td>
                    <td className='button1'><input type="button" value="+" onClick={this.handleChange}  id="add"/></td>
                    <td className='button1'><input type="button" value="-" onClick={this.handleChange} id="subtract"/></td>
                </tr>
                <tr>
                    <td className='button4'><button type="submit" value="X" onClick={this.handleChange}  id="multiply">X</button></td>
                    <td className='button1'><input type="button" value="/" onClick={this.handleChange}  id="divide"/></td>
                    <td className='button1'><input type="button" value="." onClick={this.handleChange} id="decimal"/></td>
                </tr>
                <tr>
                    <td className='button2'><input type="button" value="AC" onClick={this.clear}  id='clear'/></td>
                    <td colSpan="2" className='button3'><input type="button" value="=" onClick={this.equals} id='equals'/></td>
                </tr>
                </tbody>
            </table>
        </div>
      )
    }
  }

  export default MyComponent;



