import React from 'react';
import Rx from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';


class Card extends React.Component {
  componentDidMount(){
    const dragDOM = document.getElementsByClassName('drag')[this.props.dragId];
    const body = document.body;
    const mouseDown = Observable.fromEvent(dragDOM, 'mousedown');
    const mouseUp = Observable.fromEvent(body, 'mouseup');
    const mouseMove = Observable.fromEvent(body, 'mousemove');
    const validValue = (value, max, min) => {
      return Math.min(Math.max(value, min), max)
    }
    mouseDown
      .map(event => {
        this.props.addZIndex();
        dragDOM.style.zIndex = this.props.imgZIndex;
        
        return mouseMove.takeUntil(mouseUp)
      })
      .concatAll()
      .withLatestFrom(mouseDown, (move, down) => {
        return {
            x: validValue(move.clientX - down.offsetX, window.innerWidth, 0),
            y: validValue(move.clientY - down.offsetY, window.innerHeight, 0)
        }
      })
      .subscribe(pos => {
        dragDOM.style.left = pos.x + 'px';
        dragDOM.style.top = pos.y + 'px';
      })
  }
  render() {
    return(
      <div className="drag"
        style={{
          left: this.props.data.left + 'px',
          top: this.props.data.top + 'px'
        }}
      >
        <div
          className="dragImg"
          style={{
            backgroundImage: `url(${this.props.data.img})`
          }}
        >
        </div>
      </div>
    );
  }
}

export default Card;