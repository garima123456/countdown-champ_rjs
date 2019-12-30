import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
class App extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            deadline:"December 25,2019"
        }
    }
    changeDeadline() { 
        this.setState({ deadline: this.state.newDeadline });
    }
    render() { 
        return (
            <div className="App">
                <div className="App-title">
                Countdown to december 25, 2019
                </div>
                
                <Clock 
                    deadline={this.state.deadline} />
                <Form inline >
                    <FormControl
                        className='Deadline-input'
                        placeholder='new date'
                        onChange={event => this.setState({ newDeadline: event.target.value })}   />
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </Form>
            </div>
        )
    }
}
export default App;