import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import characters from '../characters'

class CharacterPage extends Component {
  render() {
    let id = this.props.match.params.id
    let character = characters.find(c => c._id === id)
    let fields = ["name", "role", "house", "school", "boggart", "bloodStatus", "species"]
    return (
      <div className="CharacterPage">
        <h2>Character Page</h2>

        {/* 
        {fields
          .filter(f => character[f])
          .map(f => (
            <div key={f}>
              <strong>{f}</strong>: {character[f]}
            </div>
          ))} 
          */}

        <div><strong>role</strong>: {character.role}</div>
        {character.house && <div><strong>house</strong>: {character.house}</div>}
        <div><strong>school</strong>: {character.school}</div>
        <div><strong>boggart</strong>: {character.boggart}</div>
        <div><strong>bloodStatus</strong>: {character.bloodStatus}</div>
        <div><strong>species</strong>: {character.species}</div>
      </div>
    );
  }
}

export default CharacterPage;
