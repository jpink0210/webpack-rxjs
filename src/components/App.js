import React, { Component } from 'react';
import styled from 'styled-components'
import { Switch, Route, Link } from 'react-router-dom'
import DragList from '../pages/draglist';
import Balls from '../pages/balls';

const Button = styled.button`
    position: absolute;
    bottom: 0;
`
const H1 = styled.h1`
    font-size: 50px;
    color: cadetblue;
`

class App extends Component {

    handleA = () => {
        console.log('this is A')
    }

    render() {
        return (
            <div>
                <header>
                    <H1>Webpack Demo</H1>
                    <nav>
                        <ul>
                            <Link to='/'>首頁</Link>
                            <Link to='/balls'>拖曳跟隨</Link>

                        </ul>
                    </nav>
                </header>
                

                <Switch>
                    <Route exact path={`/`} component={DragList}/>
                    <Route path='/balls' component={Balls}/>
                </Switch>
                <Button onClick={this.handleA}>open</Button>
            </div>
        )
    }
}
export default App