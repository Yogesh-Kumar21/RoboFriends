import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchchange = (event) =>  {
        this.setState({searchfield: event.target.value})
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <Searchbox searchchange = {this.onSearchchange}/>
                <Scroll>
                    < CardList robots={filteredRobots} />
                </Scroll>
                
            </div>

        );
    }


}

export default App;
