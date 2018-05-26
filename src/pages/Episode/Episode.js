import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Episode extends Component {
  state = {
    episode: {},
  }

  componentDidMount() {
    const url = 'http://api.tvmaze.com/shows/6771/episodes';

    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(episodes => episodes.find(episode =>
        episode.id.toString() === this.props.match.params.episode))
      .then(episode => this.setState(() => ({ episode })));
  }

  render() {
    const { episode } = this.state;
    return (
      <div className="episode_container">
        <div className="episode_container__homelink">
          <Link to="/">Back To Show Page</Link>
        </div>
        <ShowDetails {...episode} />
      </div>
    );
  }
}


export default Episode;
