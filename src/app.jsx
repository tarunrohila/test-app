// import React from 'react';
// import Home from "./pages/home";
// import Test from "./pages/test";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch
// } from 'react-router-dom';
//
// const App = () => (
//       <Router>
//                 <Switch>
//                   <Route exact path="/" component={Home}/>
//                   <Route exact path="/test" component={Test}/>
//                 </Switch>
//       </Router>
// );
// export default App;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import annyang from 'annyang';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            wordIndex: 0,
            words: ["hello", "howdy"]
        }
        console.log("constructor is called");
    }


    componentDidMount = () => {
        if (annyang) {
            console.log("annyang called");
            const commands = {'hello': this.helloFunction};
            annyang.addCommands(commands);
            annyang.addCallback('resultMatch', this.checkWord);
            annyang.start();
        }
    }

    render() {
        return (
            <div>
                {this.state.score}
            </div>
        );
    }

    checkWord = (voiceInput) => {
        console.log(voiceInput);
        this.setState({score: this.state.score + 1})
        console.log(voiceInput);
    }

    helloFunction = () => {
        console.log('Hello is called');
    }

    componentWillUnmount = () => {
        annyang.abort()
    }
}

App.propTypes = {};

export default App;
