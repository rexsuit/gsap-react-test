import React from "react";
import ReactDOM from 'react-dom'
// import { TransitionGroup } from "react-transition-group";
import {TweenMax, Sine} from "gsap/all";




export default class Oof extends React.Component {
  
  componentDidMount() {
    let el = ReactDOM.findDOMNode(this)
    let tm = TweenMax.to(el, 3, {
      rotation:720,
      scale:0.5,
      ease: Sine.easeOut,
      onComplete: cb,
      onReverseComplete: () => tm.play(),
    });

    function cb() {
      console.log('tm', tm)
      tm.reverse()
    }
  }

  componentDidUpdate(prevProps) {
    
  }
  
  render() {
    return (
      <div>
        <p>well hi</p>
        <p>well hi</p>
      </div>
    )
  }
}
