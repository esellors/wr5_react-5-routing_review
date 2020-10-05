import React from 'react';
import axios from 'axios';
import './Character.scss';

class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      character: {}
    };
  }
  componentDidMount() {
    axios
      .get(`https://breakingbadapi.com/api/characters/1`) // Want to get character dynamically
      .then((res) =>
        this.setState({
          loading: false,
          character: res.data[0]
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    const { loading } = this.state;
    const {
      name,
      nickname,
      birthday,
      status,
      portrayed,
      img
    } = this.state.character;

    return (
      <section className="character-details">
        {
          loading 
            ? (
              <p>Loading...</p>
            ) : (
              <>
                <h2>Character Details</h2>
                <h3>{name}</h3>
                <p>aka {nickname}</p>
                <figure>
                  <img src={img} alt="Character" />
                  <figcaption>
                    {name} played by {portrayed}
                  </figcaption>
                </figure>
                <p>Birthdate: {birthday}</p>
                <p>Dead or Alive: {status}</p>
              </>
            )
        }
      </section>
    );
  }
}

export default Character;
