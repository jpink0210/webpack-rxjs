import React from 'react';
import { connect } from 'react-redux';
import Rx from 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
import Card from './card';


class DragList extends React.Component {
  render() {
    return(
      <div>
          <h1>Hi, this is DragList Page(點拉拖曳)</h1>
          {
            this.props.DragList.list.map((element, index) => 
              <Card key={"drag" + index} 
              addZIndex={this.props.addZIndex}
              imgZIndex={this.props.DragList.imgZIndex}
              data={element} dragId={index} />
            )
          }
          
      </div>
    );
  }
}

const mapStateToProps = state => ({
  DragList: state.DragList,
});

const mapDispatchToProps = (dispatch) => ({
  addZIndex: () => {
    dispatch({
      type: 'ADD_ZINDEX'
    });
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(DragList);



