import React from 'react';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';

class Balls extends React.Component {
  componentDidMount(){
    var imgList = document.getElementsByTagName('img');
    var movePos = Observable.fromEvent(document, 'mousemove')
    .map(e => ({ x: e.clientX, y: e.clientY }))

    function followMouse(DOMArr) {
      const delayTime = 600;
      DOMArr.forEach((item, index) => {
        movePos
          .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
          .subscribe(function (pos){
            item.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
          });
      });
    }

    followMouse(Array.from(imgList))
  }
  render() {
    return(
      <div className="balls">
          <h1>hi, this is Balls Page</h1>
          <div>

          <img width="50px" src="/src/images/dog.png" alt="" />
          <img width="50px" src="/src/images/whale.png" alt="" />
          <img width="50px" src="/src/images/eagle.png" alt="" />
          <img width="50px" src="/src/images/giraffe.png" alt="" />
          <img width="50px" src="/src/images/kangaroo.png" alt="" />
          <img width="50px" src="/src/images/cat.png" alt="" />

          </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  balls: state.Balls,
});


export default connect(mapStateToProps)(Balls);



