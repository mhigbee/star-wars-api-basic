import React, { Component } from 'react';
import '../App.css';
import 'react-bootstrap';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: []
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.getStarWarsImages = this.getStarWarsImages.bind(this);
  }

  componentDidMount() {
    this.getStarWarsImages();
  };

  getStarWarsImages = () => {
    axios.get('https://swapi.co/api/people/1/')
    .then(response => {
      console.log(response);
      this.setState({
        data: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });

  }


  render() {
    return (
      <div className='container'>
        <form>
          <label>
            Star Wars
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          {this.props.data.map((data, key) => 
            <ul>
              <li key={key}>{data.name}</li>
              <li key={key}>{data.gender}</li>
              <li key={key}>{data.hair_color}</li>
              <li key={key}>{data.mass}</li>
              <li key={key}>{data.birth_year}</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Input;
