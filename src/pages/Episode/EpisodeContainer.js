import { connect } from 'react-redux';
import { setEpisode } from '../../actions/episode';
import { fetchEpisodes } from '../../actions/episodes';
import Episode from './Episode';

const mapStateToProps = state => ({
  episode: state.episode,
  episodes: state.episodes,
});

const mapDispatchToProps = dispatch => ({
  fetchEpisodes: () => dispatch(fetchEpisodes()),
  setEpisode: episode => dispatch(setEpisode(episode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);
