import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EpisodeListItem from '../../components/EpisondListItem/EpisodeListItem';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Show extends Component {
  componentDidMount() {
    this.props.fetchShow();
    this.props.fetchEpisodes();
  }

  render() {
    const { episodes, show } = this.props;

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

Show.propTypes = {
  show: PropTypes.object.isRequired,
  episodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchShow: PropTypes.func.isRequired,
  fetchEpisodes: PropTypes.func.isRequired,
};


export default Show;
