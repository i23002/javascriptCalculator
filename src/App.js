/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {create , all, number} from 'mathjs';
const config = {}
const math = create(all, config)

var dot = 0;
var symbols = 0;
var count = 0
var input = '';
var output = 0

class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state={
          input: '',
          output : 0,
          count : 0,
          dot : 0,
          symbols : 0,
          equals_count : 0
      }
      
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleChange6 = this.handleChange6.bind(this);
      this.handleChange7 = this.handleChange7.bind(this);
      this.handleChange8 = this.handleChange8.bind(this);
      this.handleChange9 = this.handleChange9.bind(this);
      this.handleChange10 = this.handleChange10.bind(this);
      this.handleChange11 = this.handleChange11.bind(this);
      this.handleChange12 = this.handleChange12.bind(this);
      this.handleChange13 = this.handleChange13.bind(this);
      this.handleChange14 = this.handleChange14.bind(this);
      this.handleChange15 = this.handleChange15.bind(this);
      this.equals = this.equals.bind(this);
      this.clear = this.clear.bind(this);
  
    }
    // need changes immediately
    handleChange1(event){
     if(symbols === 0){
        this.setState(state => ({
            input : event.target.value
        }))
        count += 1
     }
     if (symbols > 0) {
        this.setState(state => ({
            input : state.input + event.target.value
        })) 
     }
    }
    handleChange2(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1 
     }
     handleChange3(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange4(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange5(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1 
     }
     handleChange6(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange7(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange8(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange9(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange10(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
     }
     handleChange11(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1;
        dot = 0
     }
     handleChange12(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1;
        dot = 0
     }
     handleChange13(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1;
        dot = 0;
     }
     handleChange14(event){
        this.setState(state => ({
            input : state.input + event.target.value
        }))
        symbols += 1
        dot = 0
     }
     handleChange15(event){
        if(dot === 0){
            this.setState(state=> ({
                input : state.input + event.target.value,
            }))
        }
        dot += 1
     }
    equals(){
      
        if((this.state.input.length === 4) && ((this.state.input[2] === "-") || (this.state.input[2] === "*"))){
            if(this.state.input[2] === "-"){
                // eslint-disable-next-line react/no-direct-mutation-state
                this.state.input = this.state.input.replace(this.state.input[2] , "")
                this.setState(state => ({
                    equals_count : state.equals_count + 1,
                    // eslint-disable-next-line no-eval
                    output :"-".concat(((math.evaluate(this.state.input)).toString()))
                    
                }))
        }
            else{
                // eslint-disable-next-line react/no-direct-mutation-state
                this.state.input = this.state.input.replace(this.state.input[1],"")
                this.setState( state=> ({
                    equals_count : state.equals_count + 1,
                    // eslint-disable-next-line no-eval
                   
                    // eslint-disable-next-line no-eval
                    output : math.evaluate(this.state.output).toString()
                }))
            }
        }else if(this.state.equals_count % 2 === 0){
            this.setState( state=> ({
              // eslint-disable-next-line no-eval
              equals_count : state.equals_count + 1,
              //output : (math.evaluate(this.state.input)).toString(),
              output: (math.evaluate(this.state.input)).toString(),
              // eslint-disable-next-line no-eval
              //input: state.input.concat("=").concat((math.evaluate(this.state.input).toString()))
              input : this.state.input,
            }))
        }
        else{
       this.setState( state=> ({
          // eslint-disable-next-line no-eval
          // eslint-disable-next-line no-eval
          output : '',
          // eslint-disable-next-line no-eval
          input: state.output,
          equals_count : state.equals_count + 1
      }))
    }
}
    clear(){
      this.setState({
          input : '',
          output: 0,
          count : 0,
          dot : 0,
          symbols: 0,
          equals_count: 0
      })
      dot = 0;
      symbols = 0
    }
    render(){
      return(
        <div>
            <table>
                <thead>
                    <tr colSpan="2">
                        <td colSpan="3"><input value={this.state.input} id="dis"/><input value={this.state.output} id="display"/></td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='button'><input type="button" value="0" onClick={this.handleChange1}  id="zero"/></td>
                    <td className='button'><input type="button" value="1" onClick={this.handleChange2} id="one"/></td>
                    <td className='button'><input type="button" value="2" onClick={this.handleChange3}  id="two"/></td>
                </tr>
                <tr>
                    <td className='button'><input type="button" value="3" onClick={this.handleChange4}  id="three"/></td>
                    <td className='button'><input type="button" value="4" onClick={this.handleChange5}  id="four"/></td>
                    <td className='button'><input type="button" value="5" onClick={this.handleChange6}  id="five"/></td> 
                </tr>
                <tr>
                    <td className='button'><input type="button" value="6" onClick={this.handleChange7}  id="six"/></td>
                    <td className='button'><input type="button" value="7" onClick={this.handleChange8}  id="seven"/></td>
                    <td className='button'><input type="button" value="8" onClick={this.handleChange9}  id="eight"/></td>
                </tr>
                <tr>
                    <td className='button'><input type="button" value="9" onClick={this.handleChange10}  id="nine"/></td>
                    <td className='button1'><input type="button" value="+" onClick={this.handleChange11}  id="add"/></td>
                    <td className='button1'><input type="button" value="-" onClick={this.handleChange12} id="subtract"/></td>
                </tr>
                <tr>
                    <td className='button4'><button type="submit" value="X" onClick={this.handleChange13}  id="multiply">X</button></td>
                    <td className='button1'><input type="button" value="/" onClick={this.handleChange14}  id="divide"/></td>
                    <td className='button1'><input type="button" value="." onClick={this.handleChange15} id="decimal"/></td>
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



