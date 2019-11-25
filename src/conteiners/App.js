import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super()             //llama al constructor
        this.state = {
            robots: robots,   //ahora robots es parte del objeto, de la propiedad state
            searchfield: '',
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    
    render () {
        const { robots, searchfield } = this.state;   
        const filteredRobots= robots.filter(robot=> {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
       return !robots.length 
        ?  <h1> Cargando ... </h1> 
        : (<div className='tc'>
                     <h1 style= {{color: 'black'}}>RoboFriends</h1>
                     <SearchBox searchChange={this.onSearchChange}/>
                     <Scroll>
                        <CardList robots={filteredRobots}/>   
                     </Scroll>
          </div>);
      }   
 }

export default App;


    
