import React, { Fragment } from 'react';
import moment from 'moment';

const EpisodeListItem = ({
  number, name, airdate, season,
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
          {number}
        </div>
        <div className="episodeListItem_container__airdate">
          {airdateFormatted}
        </div>
        <div className="episodeListItem_container__name">
          {name}
        </div>
      </li>
    </Fragment>
  );
};

export default EpisodeListItem;
