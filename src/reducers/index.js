import { combineReducers } from 'redux';
import DragList from './draglist';
import Balls from './balls';

const pageReducers = combineReducers({
    DragList,
    Balls
});
  
export default pageReducers;