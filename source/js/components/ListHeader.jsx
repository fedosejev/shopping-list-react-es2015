import React from 'react';

class ListHeader extends React.Component {
  _handleSubmit(event) {
    event.preventDefault();

    this.props.removeAllListItems();
  }

  render() {
    var totalNumberOfListItems = this.props.totalNumberOfListItems;

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this._handleSubmit.bind(this)} className="form-inline">
          {this.props.totalNumberOfListItems} {totalNumberOfListItems === 1 ? 'item' : 'items'}
          {' '}
          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      );
    }

    return (<span>Shopping List</span>);
  }
}

export default ListHeader;