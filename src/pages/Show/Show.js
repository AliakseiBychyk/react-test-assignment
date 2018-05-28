import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EpisodeListItem from '../../components/EpisondListItem/EpisodeListItem';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

class Show extends Component {
  componentDidMount() {
    this.props.fetchShow()
    this.props.fetchEpisodes()
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
  show: PropTypes.object,
  episodes: PropTypes.arrayOf(PropTypes.object),
  fetchShow: PropTypes.func,
  fetchEpisodes: PropTypes.func
}



export default Show;
