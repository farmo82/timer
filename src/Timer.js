import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'


var interval;


class Timer extends React.Component{  //component
    constructor(){
      super();
      this.state = {
        time: 10
      }
    }

    startInterval = ()=>{
      interval = setInterval(()=>{ //interval برای تغییر state
        this.setState({
          time: this.state.time - 1
        })
      }, 1000)
    }

    stopInterval = ()=>{
      clearInterval(interval);
    }

    componentDidMount(){  //یک بار اول کار میسازه
      this.startInterval();

    }

    componentDidUpdate(){
        if (this.state.time == 0){  //وقتی به این زمان رسید تایمر متوقف میشود
            this.stopInterval();
        }
    }

    componentWillUnmount(){
        
    }
  
    render(){
      return(
        <>
          <h2 className='timer'>
            {this.state.time}
          </h2>
          
          <div className='botton_box'>
            <span className='action_button start_button' onClick={this.startInterval}>start</span>
            <span className='action_button stop_button' onClick={this.stopInterval}>stop</span>
            <span className='action_button reset_button'>reset</span>
          </div>
        </>
      )
    }
  }

export default Timer;