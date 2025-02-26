import React from 'react';
import ReactDOM from 'react-dom/client';


class Text extends React.Component{  //component
    render(){
      console.log(this.props)  //output: title: "hello counter..."
      

      return(
        <h1>{this.props.title}</h1>
      )
    }
  }

export default Text;