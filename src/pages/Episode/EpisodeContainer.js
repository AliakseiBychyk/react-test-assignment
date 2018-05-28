import { connect } from 'react-redux';
import { fetchEpisodes } from '../../actions/episodes';
import Episode from './Episode';

const mapStateToProps = (state, props) => ({
  episode: state.episodes.find(episode => (
    episode.id.toString() === props.match.params.episode
  ))
});

const mapDispatchToProps = (dispatch) => ({
  fetchEpisodes: () => dispatch(fetchEpisodes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episode);