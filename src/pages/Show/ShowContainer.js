import { connect } from 'react-redux';
import { fetchShow } from '../../actions/show';
import { fetchEpisodes } from '../../actions/episodes';
import { setEpisode } from '../../actions/episode';
import Show from './Show';

const mapStateToProps = state => ({
  show: state.show,
  episodes: state.episodes,
  episode: state.episode,
});

const mapDispatchToProps = dispatch => ({
  fetchEpisodes: () => dispatch(fetchEpisodes()),
  fetchShow: () => dispatch(fetchShow()),
  setEpisode: episode => dispatch(setEpisode(episode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
