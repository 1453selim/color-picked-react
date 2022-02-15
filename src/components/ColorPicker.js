import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       color: [142,23,152]
    }
  }
  

  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    this.applyColor();
    //this.chooseColor(); //just for testing
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    this.applyColor();
  }

  isLight(colorArr) {
    return colorArr.reduce((a,b) => a+b) < 127 * 3; // it returns true or false;
  }

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')'; 
  }

  applyColor=()=>{
    const color = this.formatColor(this.state.color);
    document.body.style.backgroundColor = color;
    // document.querySelector('p').style.color = color;   // just for trying
  }

 chooseColor=()=>{
   const randomColorArr = [];
   for (let i = 0; i < 3; i++) {
    randomColorArr.push(Math.floor(Math.random()*256));
  }
  this.setState({
    color:randomColorArr
  });
  //this.applyColor();
}


  render() {
    //this.applyColor();  // first option
    return (
      <div>
        <h1 className={this.isLight(this.state.color)? "black" : "white"}>
        Your color is {this.formatColor(this.state.color)}!
        </h1>
        {/* <button onClick={this.applyColor}>Change Color</button> // second option   */}
        <Button chooseColor={this.chooseColor} isLight={this.isLight(this.state.color)}>
        {/* <Button chooseColor={this.chooseColor}> */}
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;
