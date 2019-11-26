import React, { Component } from 'react';
import CardList from './components/CardList';
// import { robots } from './components/robots';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll'

class App extends Component {
    constructor() {
        super()             //llama al constructor
        this.state = {
            robots: [],   //se crea, y luego que los datos dl servidor se monten lo garga
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())   //json(), transforma lo que recibe en archivo json
        .then(users => this.setState({ robots:users })); 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render () {
        const filteredRobots= this.state.robots.filter(robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0) {
            return <h1> Loaring ... </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 style= {{color: 'black'}}>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                       <CardList robots={filteredRobots}/>   
                    </Scroll>
                </div>
          );
      }
   }
}

export default App;


    
