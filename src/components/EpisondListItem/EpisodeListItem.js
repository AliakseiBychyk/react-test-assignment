import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EpisodeListItem = ({
  id, number, name, airdate, season, setEpisode,
}) => {
  const style = number % 2 === 0 ? {} : { backgroundColor: '#E6E6E6' };

  const airdateFormatted = moment(airdate).format('MMM D, YYYY');

  return (
    <Fragment>
      {number === 1 &&
        <Fragment>
          <li className="episodeListItem_container">
            <div>Season {season}</div>
          </li>
          <li className="episodeListItem_container--head">
            <div className="episodeListItem_container__number">Number</div>
            <div className="episodeListItem_container__airdate">Airdate</div>
            <div className="episodeListItem_container__name">Name</div>
          </li>
        </Fragment>}
      <li className="episodeListItem_container" style={style}>

        <div className="episodeListItem_container__number">
          <Link to={`/${id}`} onClick={setEpisode}>{number}</Link>
        </div>
        <div className="episodeListItem_container__airdate">
          <Link to={`/${id}`} onClick={setEpisode}>{airdateFormatted}</Link>
        </div>
        <div className="episodeListItem_container__name">
          <Link to={`/${id}`} onClick={setEpisode}>{name}</Link>
        </div>

      </li>
    </Fragment>
  );
};

export default EpisodeListItem;
