import React from 'react';

class ListItemDescription extends React.Component {
  render() {
    return (
      <div className="panel-body">
        {this.props.description}
      </div>
    );
  }
}

export default ListItemDescription;