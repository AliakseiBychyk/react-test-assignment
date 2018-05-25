import React, { Component } from 'react';

class Show extends Component {
  state = {
    show: {},
    episodes: [],
  }

  componentDidMount() {
    const url1 = 'http://api.tvmaze.com/shows/6771';
    fetch(url1, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(show => this.setState(() => ({ show })));

    const url2 = `${url1}/episodes`;
    fetch(url2, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(episodes => this.setState(() => ({ episodes })));
  }

  render() {
    return (
      <div className="show_container">
        {this.state.show.name}
        <ul className="show_container__list">
          {this.state.episodes.map(episode => (
            <li key={episode.id}>
              {episode.name}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default Show;
