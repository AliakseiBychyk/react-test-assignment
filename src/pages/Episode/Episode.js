import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Episode extends Component {
  componentDidMount() {
    this.props.fetchEpisodes();
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
  fetchEpisodes: PropTypes.func.isRequired,
};

export default Episode;
