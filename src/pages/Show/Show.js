import React, { Component } from 'react';
import EpisodeListItem from '../../components/EpisondListItem/EpisodeListItem';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Show extends Component {
  state = {
    show: {},
    episodes: [],
  }

  componentDidMount() {
    const url1 = 'https://api.tvmaze.com/shows/6771';
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
    const { episodes, show } = this.state;

    return (
      <div className="show_container">
        <ShowDetails
          {...show}
        />
        <ul className="show_container__list">
          {episodes.map((episode, i) => (
            <EpisodeListItem
              key={episode.id}
              {...episode}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Show;
