import React from 'react';

const ShowDetails = ({
  name, summary, image, weight,
}) => {
  const { medium } = { ...image };
  const episode = typeof weight === 'number' ? '' : 'Episode: ';

  return (
    <div className="showDetails_content">
      <div className="showDetails_content__name">{episode}{name}</div>
      <div
        className="showDetails_content__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <img src={medium} className="showDetails_content__img" alt="cover" />
    </div>
  );
};

export default ShowDetails;
