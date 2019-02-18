import React from 'react';
import { connect } from 'react-redux';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';

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
       
          {
            this.props.DragList.list.map((element, index) => 
              <img key={"drag" + index} 
              width="50px"
              src={require('../../images/' + element.img)} alt=""  />
            )
          }

          </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  balls: state.Balls,
  DragList: state.DragList,
});


export default connect(mapStateToProps)(Balls);



