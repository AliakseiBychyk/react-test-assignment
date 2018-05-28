import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EpisodeListItem from '../../components/EpisondListItem/EpisodeListItem';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Show extends Component {
  static defaultProps = {
    episode: {},
  }

  componentDidMount() {
    this.props.fetchShow();
    this.props.fetchEpisodes();
  }

  setEpisode = (id) => {
    const choosedepisode = this.props.episodes.find(episode =>
      episode.id === id);
    this.props.setEpisode(choosedepisode);
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
              setEpisode={() => this.setEpisode(episode.id)}
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
  episode: PropTypes.object,
  fetchShow: PropTypes.func.isRequired,
  fetchEpisodes: PropTypes.func.isRequired,
};

export default Show;
