import React from 'react';

const ShowDetails = ({ name, summary, image }) => {
  const { original } = { ...image };

  return (
    <div className="showDetails_content">
      <div className="showDetails_content__name">{name}</div>
      <div className="showDetails_content__info">
        <div
          className="showDetails_content__summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <img src={original} className="showDetails_content__img" alt="cover" />
      </div>
    </div>
  );
};

export default ShowDetails;
