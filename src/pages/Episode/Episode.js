import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Episode extends Component {
  componentDidMount() {
    if (!this.props.episode.id) this.props.fetchEpisodes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.episodes !== this.props.episodes) {
      const choosedEpisode = this.props.episodes.find(episode =>
        episode.id === +this.props.match.params.episode);
      this.props.setEpisode(choosedEpisode);
    }
  }

  render() {
    const { episode } = this.props;
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

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default Episode;
