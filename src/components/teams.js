import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const URL_TEAMS = 'http://localhost:3004/teams';


class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams:[],
      filtered:[],
      keywords:''
    }
  }

  componentDidMount(){
      fetch(URL_TEAMS{method:'GET'})
      .then(response => response.json())
      .then(json =>{
        this.setState({
          teams:json,
          filtered:json
        })
      })
  }

  renderList = ({filtered}) =>{
    return filtered.map((item)=>{
      return(
        <Link>
          
        </Link>
        )
    })

  }

  render() {
    return (
        <div className="teams_component">
          <div className="teams_input">
            <input 
            type="text"
            placeholder="Search for a team"
          </div>
          <div className="teams_container">
            {this.renderList(this.state)}
          </div>
        </div>
    );
  }
}

export default Teams;
