import { connect } from 'react-redux';
import { fetchShow } from '../../actions/show';
import { fetchEpisodes } from '../../actions/episodes';
import Show from './Show';

const mapStateToProps = (state) => ({
  show: state.show,
  episodes: state.episodes
});

const mapDispatchToProps = (dispatch) => ({
  fetchEpisodes: () => dispatch(fetchEpisodes()),
  fetchShow: () => dispatch(fetchShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(Show);
