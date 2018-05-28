import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShowDetails from '../../components/ShowDetails/ShowDetails';

const Episode = ({ episode }) => (
  <div className="episode_container">
    <div className="episode_container__homelink">
      <Link to="/">Back To Show Page</Link>
    </div>
    <ShowDetails {...episode} />
  </div>
);

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default Episode;
