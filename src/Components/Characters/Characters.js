import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Characters.scss';

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      characters: []
    };
  }
  componentDidMount() {
    axios
      .get('https://breakingbadapi.com/api/characters')
      .then((res) =>
        this.setState({
          loading: false,
          characters: res.data
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { loading, characters } = this.state;

    const charactersMapped = characters.map((char, i) => {
      return (
        <div key={i} className="character">
          <h4>{char.name}</h4>
          <figure>
            <img src={char.img} alt="Character" />
            <figcaption>
              <Link to={`/characters/${char.char_id}`}>View Details</Link>
            </figcaption>
          </figure>
        </div>
      );
    });

    return (
      <section className="characters">
        <h2>Characters</h2>
        <div className="characters-mapped">
          {
            loading 
              ? (
              <p>Loading...</p>
              ) : charactersMapped
          }
        </div>
      </section>
    );
  }
}

export default Characters;
