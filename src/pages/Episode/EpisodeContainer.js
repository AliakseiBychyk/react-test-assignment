import { connect } from 'react-redux';
import Episode from './Episode';

const mapStateToProps = state => ({
  episode: state.episode,
});

export default connect(mapStateToProps)(Episode);
