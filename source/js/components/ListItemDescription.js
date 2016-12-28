import React, { PropTypes } from 'react';

const ListItemDescription = ({ description }) => (
  <div className="panel-body">
    {description}
  </div>
);

ListItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ListItemDescription;
