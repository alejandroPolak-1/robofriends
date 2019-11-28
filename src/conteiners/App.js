import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

// creados para REDUX
const mapStateToProps = state => {
    return {   
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.IsPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())

    }
}

// 

class App extends Component {
    // constructor() {
    //     super()             //llama al constructor
    //     this.state = {
    //         robots: []   //se crea, y luego que los datos dl servidor se monten lo garga
           
    //     }
    // }

    componentDidMount() {
      this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    // }
    
    render () {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots= robots.filter(robot=> {
            return robot.name.toLowerCase().includes(searchField);
        })
        return isPending ?
            <h1> Loaring ... </h1> :
             (
                <div className='tc'>
                    <h1 className='f1' >RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                       <CardList robots={filteredRobots}/>   
                    </Scroll>
                </div>
          );
    //   }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


    
